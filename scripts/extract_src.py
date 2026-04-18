import os
import re

def extract_project_code(src_dir, output_file):
    supported_extensions = ('.tsx', '.ts', '.js', '.jsx', '.css', '.scss')
    
    with open(output_file, 'w', encoding='utf-8') as md_file:
        md_file.write("# Project Source Code Extraction\n\n")
        
        for root, dirs, files in os.walk(src_dir):
            for file in files:
                if file.endswith(supported_extensions):
                    file_path = os.path.join(root, file)
                    rel_path = os.path.relpath(file_path, src_dir).replace('\\', '/')
                    
                    # Skip files in components/ui/
                    if rel_path.startswith('components/ui/'):
                        continue
                    
                    # Try to guess component name from filename
                    component_name = os.path.splitext(file)[0]
                    # Convert kebab-case or snake_case to PascalCase if it looks like a component
                    if '-' in component_name or '_' in component_name:
                        component_name = ''.join(word.capitalize() for word in re.split('[-_]', component_name))
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        md_file.write(f"## {rel_path}\n")
                        md_file.write(f"**Component:** {component_name}\n\n")
                        
                        # Determine language for markdown block
                        ext = os.path.splitext(file)[1][1:]
                        lang = ext if ext != 'tsx' else 'typescript'
                        if ext == 'js' or ext == 'jsx': lang = 'javascript'
                        
                        md_file.write(f"```{lang}\n")
                        md_file.write(content)
                        md_file.write("\n```\n\n")
                        md_file.write("---\n\n")
                        
                    except Exception as e:
                        print(f"Error reading {file_path}: {e}")

if __name__ == "__main__":
    src_directory = r"e:\proyectos\00pruebasuperbear\src"
    output_md = r"e:\proyectos\00pruebasuperbear\src_content_report.md"
    extract_project_code(src_directory, output_md)
    print(f"Report generated at: {output_md}")
