import os

def extract_project_code(src_dir, search_text, output_file):
    supported_extensions = ('.tsx', '.ts', '.js', '.jsx', '.css', '.scss')
    
    with open(output_file, 'w', encoding='utf-8') as md_file:
        md_file.write(f"# Resultados de búsqueda para: '{search_text}'\n\n")
        
        for root, dirs, files in os.walk(src_dir):
            for file in files:
                if file.endswith(supported_extensions):
                    file_path = os.path.join(root, file)
                    # Ruta relativa para las exclusiones (ej: app/page.tsx)
                    rel_path = os.path.relpath(file_path, src_dir).replace('\\', '/')
                    
                    # Omitir components/ui/ y app/globals.css
                    if rel_path.startswith('components/ui/') or rel_path == 'app/globals.css':
                        continue
                    
                    # Ruta de visualización completa (ej: src/app/page.tsx)
                    display_path = f"{src_dir}/{rel_path}"
                    
                    try:
                        with open(file_path, 'r', encoding='utf-8') as f:
                            lines = f.readlines()
                        
                        # Buscar línea por línea
                        for line_num, line in enumerate(lines, 1):
                            if search_text in line:
                                # Formato de lista minimizado: Archivo - Línea - Texto
                                md_file.write(f"- `{display_path}` (Línea {line_num}): {line.strip()}\n")
                                
                    except Exception as e:
                        print(f"Error leyendo {file_path}: {e}")

if __name__ == "__main__":
    src_directory = "src"
    output_md = "src_content_report.md"
    
    # ⚠️ IMPORTANTE: Escribe aquí la palabra o código exacto que quieres buscar ⚠️
    texto_a_buscar = "export default" 
    
    if os.path.exists(src_directory):
        extract_project_code(src_directory, texto_a_buscar, output_md)
        print(f"Reporte generado en: {output_md}")
    else:
        print(f"Error: El directorio '{src_directory}' no existe.")