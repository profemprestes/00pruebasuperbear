'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Upload, Minus, Square } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function AdminConfigPage() {
  const [bio, setBio] = useState('¡Hola! Soy Facu. He llegado al Nivel 9 con la barra de energía al máximo y te invito a celebrarlo conmigo en esta nueva aventura multijugador.');
  const [likes, setLikes] = useState<string[]>(['Taekwondo', 'Videojuegos', 'Super Bear Adventure']);
  const [currentLike, setCurrentLike] = useState('');
  const [photo1File, setPhoto1File] = useState<File | null>(null);
  const [photo2File, setPhoto2File] = useState<File | null>(null);
  const [photo1Preview, setPhoto1Preview] = useState<string | null>('/facu.jpg');
  const [photo2Preview, setPhoto2Preview] = useState<string | null>('/facu2.jpeg');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, photoNumber: 1 | 2) => {
    const file = e.target.files?.[0] || null;
    if (photoNumber === 1) {
      setPhoto1File(file);
      if (file) {
        setPhoto1Preview(URL.createObjectURL(file));
      } else {
        setPhoto1Preview('/facu.jpg');
      }
    } else {
      setPhoto2File(file);
      if (file) {
        setPhoto2Preview(URL.createObjectURL(file));
      } else {
        setPhoto2Preview('/facu2.jpeg');
      }
    }
  };

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
    let photo1DataUrl = photo1Preview;
    let photo2DataUrl = photo2Preview;

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

  const defaultInventory = [
    { icon: '🥋', text: 'Taekwondo' },
    { icon: '🎮', text: 'Videojuegos' },
    { icon: '🐻', text: 'Super Bear Adventure' },
    { icon: '🏀', text: 'Baloncesto' },
  ];

  const inventoryItems = likes.length > 0
    ? likes.map(like => ({ text: like, icon: '⭐' }))
    : defaultInventory;

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-start justify-center bg-blue-500 p-3 sm:p-4 gap-4 sm:gap-6 md:gap-8 overflow-y-auto">
      {/* Left Column: Config Panel */}
      <div className="flex-shrink-0 w-full md:w-1/2 max-w-2xl">
        <div className="bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 shadow-xl w-full flex flex-col">
          <div className="bg-blue-700 p-1 flex justify-between items-center text-white cursor-move">
            <h2 className="font-mono font-bold text-sm sm:text-base">Beendows XP - Configuración de Nivel</h2>
            <div className="flex items-center gap-1">
              <button aria-label="Minimizar ventana" className="w-5 h-5 bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center text-black font-bold"><Minus size={12}/></button>
              <button aria-label="Maximizar ventana" className="w-5 h-5 bg-gray-200 border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 flex items-center justify-center text-black font-bold"><Square size={8}/></button>
              <button aria-label="Cerrar ventana de configuración" className="w-5 h-5 bg-red-500 border-2 border-t-red-300 border-l-red-300 border-r-red-700 border-b-red-700 flex items-center justify-center text-white font-bold"><X size={12}/></button>
            </div>
          </div>

          <div className="bg-white p-4 flex-grow overflow-y-auto max-h-[calc(100vh-200px)]">
            <fieldset className="border-2 border-gray-300 p-3 mb-4">
              <legend className="px-2 font-mono font-bold">Sección de Presentación</legend>
              <Textarea 
                placeholder="Escribe tu mensaje de bienvenida..." 
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
                <Button onClick={handleAddLike} aria-label="Agregar gusto a la lista de Facu" className="font-mono bg-gray-200 text-black border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-300 active:bg-gray-400 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white">Añadir</Button>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map(i => (
                  <div key={i}>
                    <Button onClick={() => (i === 1 ? fileInputRef1 : fileInputRef2).current?.click()} className="w-full font-mono bg-gray-200 text-black border-2 border-t-white border-l-white border-r-gray-500 border-b-gray-500 hover:bg-gray-300 active:bg-gray-400 active:border-t-gray-500 active:border-l-gray-500 active:border-r-white active:border-b-white">
                      <Upload size={16} className="mr-2"/>
                      Subir Foto {i}
                    </Button>
                    <Input type="file" accept="image/*" className="hidden" ref={i === 1 ? fileInputRef1 : fileInputRef2} onChange={(e) => handleFileChange(e, i as 1 | 2)} />
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="p-4 border-t-2 border-gray-300">
              <Button onClick={handleCompile} aria-label="Compilar nivel y generar invitación de cumpleaños" className="w-full font-milky text-white text-lg sm:text-xl h-auto sm:h-14 py-3 sm:py-4 bg-grass-green border-0 shadow-[0_6px_0_#2E8B57] transition-all duration-200 hover:bg-green-500 hover:shadow-[0_8px_0_#2E8B57] hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-none">
                ¡Compilar Nivel y Generar Invitación!
              </Button>
          </div>
        </div>
      </div>

      {/* Right Column: Preview */}
      <div className="flex-1 w-full md:w-1/2 max-w-md">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
            <span className="text-4xl sm:text-6xl motion-safe:animate-subtle-float" role="img" aria-label="Oso científico de Super Bear Adventure">🐻‍❄️</span>
            <div className="bg-white p-2 rounded-lg border-2 border-black shadow-lg relative max-w-xs text-left">
                <p className="font-mono text-xs sm:text-sm">¡Saludos, creador Facu! Los cambios se reflejarán aquí en vivo.</p>
                <div className="absolute -top-3 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-white"></div>
            </div>
        </div>
        <h3 className="font-milky text-white text-xl sm:text-2xl text-center mb-2" style={{textShadow: '2px 2px #000'}}>Vista Previa en Vivo</h3>
        <div className="bg-gray-800 p-2 rounded-lg border-4 border-black aspect-[9/16] max-h-[60vh] sm:max-h-[75vh] w-full mx-auto overflow-y-auto">
            {/* Simplified PresentationScreen */}
            <div className="relative w-full h-[50vh] scale-[0.85] origin-top bg-cover bg-center" style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')" }}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative bg-white border-8 border-[hsl(var(--foreground))] rounded-2xl p-6 pt-16 shadow-[8px_8px_0px_hsl(var(--foreground))] w-full">
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-10">
                            <Image src="/facu_bear_sin_fondo.png" alt="Facu Bear" width={120} height={120} className="drop-shadow-lg" />
                        </div>
                        <h2 className="font-milky text-xl text-center text-[hsl(var(--foreground))]">¡Nivel 9 Desbloqueado!</h2>
                        <p className="font-body text-xs text-[#333] mt-2 text-center h-20 overflow-y-auto">{bio}</p>
                    </div>
                </div>
            </div>
             {/* Simplified BioBookScreen */}
            <div className="relative w-full min-h-[60vh] scale-[0.85] origin-top bg-cover bg-center mt-4 p-4" style={{ backgroundImage: "url('/mundos/bear_village/Gianthouseentrancearea.webp')" }}>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                <div className="relative z-10 text-center w-full mx-auto">
                    <h2 className="font-milky text-2xl text-white mb-4" style={{ textShadow: '2px 2px hsl(var(--teddy-brown))' }}>Inventario de Facu</h2>
                    <div className="grid grid-cols-2 gap-2 mb-6 max-w-sm mx-auto">
                        {inventoryItems.map((item, index) => (
                            <div key={index} className="bg-white/10 border-2 border-golden-coin rounded-lg flex flex-col items-center justify-center p-2 aspect-square">
                                <span className="text-2xl">{item.icon}</span>
                                <p className="font-body text-white font-bold text-xs mt-1 text-center">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        {photo1Preview && (
                            <div className="bg-white p-2 pb-6 shadow-lg border-4 border-gray-300 relative w-full max-w-[150px]">
                                <Image src={photo1Preview} alt="Vista previa del recuerdo 1 de Facu" width={150} height={150} className="w-full object-cover aspect-square" />
                                <p className="absolute bottom-1 left-1/2 -translate-x-1/2 font-milky text-sm text-teddy-brown">RECUERDO 1</p>
                            </div>
                        )}
                        {photo2Preview && (
                             <div className="bg-white p-2 pb-6 shadow-lg border-4 border-gray-300 relative w-full max-w-[150px]">
                                <Image src={photo2Preview} alt="Vista previa del recuerdo 2 de Facu" width={150} height={150} className="w-full object-cover aspect-square" />
                                <p className="absolute bottom-1 left-1/2 -translate-x-1/2 font-milky text-sm text-teddy-brown">RECUERDO 2</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
