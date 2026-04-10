'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Upload, Minus, Square } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminConfigPage() {
  const [bio, setBio] = useState('');
  const [likes, setLikes] = useState<string[]>([]);
  const [currentLike, setCurrentLike] = useState('');
  const [photo1File, setPhoto1File] = useState<File | null>(null);
  const [photo2File, setPhoto2File] = useState<File | null>(null);
  const [photo1Preview, setPhoto1Preview] = useState<string | null>(null);
  const [photo2Preview, setPhoto2Preview] = useState<string | null>(null);

  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toast } = useToast();

  const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (!photo1File) return;
    const objectUrl = URL.createObjectURL(photo1File);
    setPhoto1Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo1File]);

  useEffect(() => {
    if (!photo2File) return;
    const objectUrl = URL.createObjectURL(photo2File);
    setPhoto2Preview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [photo2File]);

  const handleAddLike = () => {
    if (currentLike.trim() && !likes.includes(currentLike.trim())) {
      setLikes([...likes, currentLike.trim()]);
      setCurrentLike('');
    }
  };

  const handleRemoveLike = (likeToRemove: string) => {
    setLikes(likes.filter(like => like !== likeToRemove));
  };

  const handleCompile = async () => {
    let photo1DataUrl = null;
    let photo2DataUrl = null;

    if (photo1File) {
      photo1DataUrl = await fileToDataUrl(photo1File);
    }
    if (photo2File) {
      photo2DataUrl = await fileToDataUrl(photo2File);
    }

    const configData = {
      bio,
      likes,
      photo1: photo1DataUrl,
      photo2: photo2DataUrl,
    };

    localStorage.setItem('facuConfig', JSON.stringify(configData));
    
    toast({
        title: "¡Nivel Compilado!",
        description: "La configuración se ha guardado. Redirigiendo a la invitación...",
    });

    setTimeout(() => {
        router.push('/');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500 p-4">
      <div className="absolute left-4 bottom-4 text-center">
          <span className="text-8xl motion-safe:animate-subtle-float">🐻‍❄️</span>
          <div className="bg-white p-2 rounded-lg border-2 border-black shadow-lg relative mt-2 max-w-xs text-left">
              <p className="font-mono text-sm">¡Saludos, creador Facu! Soy el Científico. Ingresa los datos en la terminal Beendows XP para compilar tu mundo virtual.</p>
               <div className="absolute -top-3 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-white"></div>
          </div>
      </div>
      <div className="bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 shadow-xl w-full max-w-2xl h-[90vh] flex flex-col">
        {/* Title Bar */}
        <div className="bg-blue-700 p-1 flex justify-between items-center text-white">
          <h2 className="font-mono font-bold">Beendows XP - Configuración de Nivel</h2>
          <div className="flex items-center gap-1">
            <button className="w-5 h-5 bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center text-black font-bold"><Minus size={12}/></button>
            <button className="w-5 h-5 bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center text-black font-bold"><Square size={8}/></button>
            <button className="w-5 h-5 bg-red-500 border-2 border-t-red-300 border-l-red-300 border-r-red-700 border-b-red-700 flex items-center justify-center text-white font-bold"><X size={12}/></button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-4 flex-grow overflow-y-auto">
          <fieldset className="border-2 border-gray-300 p-3 mb-4">
            <legend className="px-2 font-mono font-bold">Sección de Presentación</legend>
            <Textarea 
              placeholder="Escribe tu mensaje de bienvenida o lore personal aquí..." 
              className="font-mono bg-gray-100 border-gray-400"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset className="border-2 border-gray-300 p-3 mb-4">
            <legend className="px-2 font-mono font-bold">Inventario de Gustos</legend>
            <div className="flex gap-2">
              <Input 
                placeholder="Añadir gusto (ej. Taekwondo)" 
                className="font-mono bg-gray-100 border-gray-400"
                value={currentLike}
                onChange={(e) => setCurrentLike(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddLike()}
              />
              <Button onClick={handleAddLike} className="font-mono bg-gray-200 text-black border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-300 active:bg-gray-400 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white">Añadir</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {likes.map(like => (
                <div key={like} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2 font-mono">
                  {like}
                  <button onClick={() => handleRemoveLike(like)} className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">x</button>
                </div>
              ))}
            </div>
          </fieldset>

          <fieldset className="border-2 border-gray-300 p-3">
            <legend className="px-2 font-mono font-bold">Cofre de Recuerdos (Fotos)</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map(i => (
                <div key={i}>
                  <Button onClick={() => (i === 1 ? fileInputRef1 : fileInputRef2).current?.click()} className="w-full font-mono bg-gray-200 text-black border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-300 active:bg-gray-400 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white">
                    <Upload size={16} className="mr-2"/>
                    Subir Foto {i}
                  </Button>
                  <Input type="file" accept="image/*" className="hidden" ref={i === 1 ? fileInputRef1 : fileInputRef2} onChange={(e) => (i === 1 ? setPhoto1File : setPhoto2File)(e.target.files?.[0] || null)} />
                  {(i === 1 ? photo1Preview : photo2Preview) && (
                    <div className="mt-2 relative w-24 h-24">
                        <img src={i === 1 ? photo1Preview : photo2Preview} alt={`Vista previa ${i}`} className="w-full h-full object-cover rounded-md border-2 border-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Compile Button */}
        <div className="p-4 border-t-2 border-gray-300">
            <Button onClick={handleCompile} className="w-full font-milky text-white text-xl h-14 bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-150 hover:bg-green-500 hover:shadow-[0_4px_0_#2E8B57] active:translate-y-[6px] active:shadow-none">
              ¡Compilar Nivel y Generar Invitación!
            </Button>
        </div>
      </div>
    </div>
  );
}
