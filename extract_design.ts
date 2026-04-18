import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function extractInfo(sourceFile: ts.SourceFile) {
    const texts: { tag: string, text: string }[] = [];
    const designClasses = new Set<string>();

    function visit(node: ts.Node) {
        if (ts.isJsxElement(node)) {
            const tagName = node.openingElement.tagName.getText(sourceFile);

            // Extract className
            const attributes = node.openingElement.attributes.properties;
            for (const attr of attributes) {
                if (ts.isJsxAttribute(attr) && attr.name.getText(sourceFile) === 'className') {
                    if (attr.initializer && ts.isStringLiteral(attr.initializer)) {
                        designClasses.add(attr.initializer.text);
                    } else if (attr.initializer && ts.isJsxExpression(attr.initializer)) {
                        designClasses.add(attr.initializer.getText(sourceFile));
                    }
                }
            }

            // Extract text children
            let textContent = '';
            for (const child of node.children) {
                if (ts.isJsxText(child)) {
                    textContent += child.text;
                } else if (ts.isJsxExpression(child)) {
                    textContent += child.getText(sourceFile) + ' ';
                }
            }
            const cleanText = textContent.replace(/\s+/g, ' ').trim();
            if (cleanText && cleanText !== '') {
                texts.push({ tag: tagName, text: cleanText });
            }
        } else if (ts.isJsxSelfClosingElement(node)) {
            // Extract className for self closing
             const attributes = node.attributes.properties;
             for (const attr of attributes) {
                if (ts.isJsxAttribute(attr) && attr.name.getText(sourceFile) === 'className') {
                    if (attr.initializer && ts.isStringLiteral(attr.initializer)) {
                        designClasses.add(attr.initializer.text);
                    } else if (attr.initializer && ts.isJsxExpression(attr.initializer)) {
                        designClasses.add(attr.initializer.getText(sourceFile));
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }

    visit(sourceFile);
    return { texts, designClasses: Array.from(designClasses) };
}

function processDirectory(dir: string, outDir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath, outDir);
        } else if (fullPath.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const sourceFile = ts.createSourceFile(
                fullPath,
                content,
                ts.ScriptTarget.Latest,
                true,
                ts.ScriptKind.TSX
            );

            const { texts, designClasses } = extractInfo(sourceFile);

            const mdFilename = fullPath.replace(/[\/\\]/g, '_').replace('.tsx', '.md');
            const mdPath = path.join(outDir, mdFilename);

            let mdContent = `# Detalle de Diseño y Textos: ${fullPath}\n\n`;

            mdContent += `## Diseño del Cuerpo del Componente\n`;
            mdContent += `El componente utiliza las siguientes clases y estilos:\n\n`;
            if (designClasses.length > 0) {
                for (const cls of designClasses) {
                    mdContent += `- \`${cls}\`\n`;
                }
            } else {
                mdContent += `No se encontraron clases de Tailwind/CSS explícitas.\n`;
            }

            mdContent += `\n## Textos del Componente\n`;
            mdContent += `A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:\n\n`;
            if (texts.length > 0) {
                for (const t of texts) {
                    mdContent += `- **<${t.tag}>**: ${t.text}\n`;
                }
            } else {
                mdContent += `No se encontraron textos estáticos.\n`;
            }

            mdContent += `\n## Contenido Completo del Archivo\n`;
            mdContent += "```tsx\n" + content + "\n```\n";

            fs.writeFileSync(mdPath, mdContent);
        }
    }
}

const outDir = path.join(process.cwd(), 'docs', 'component_designs');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

processDirectory(path.join(process.cwd(), 'src', 'app'), outDir);
processDirectory(path.join(process.cwd(), 'src', 'components'), outDir);
console.log("Generación completada en docs/component_designs/");
