# Detalle de Diseño y Textos: /app/src/app/02-admin-config/page.tsx

## Diseño del Cuerpo del Componente
El componente utiliza las siguientes clases y estilos:

- `min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 sm:p-6 overflow-y-auto`
- `fixed inset-0 pointer-events-none overflow-hidden`
- `absolute w-1 h-1 bg-white rounded-full opacity-60 motion-safe:animate-pulse`
- `relative z-10 text-center mb-6 sm:mb-8`
- `inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border-2 border-yellow-400 mb-4`
- `w-5 h-5 text-yellow-400 motion-safe:animate-spin`
- `font-milky text-yellow-400 text-sm sm:text-base tracking-wider`
- `font-milky text-3xl sm:text-4xl md:text-5xl text-white mb-2`
- `font-amble text-base sm:text-lg text-purple-200`
- `relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8`
- `space-y-6`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-blue-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden`
- `bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-5`
- `flex items-center gap-3`
- `w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg`
- `font-arcade text-xs text-white/80 uppercase tracking-wider`
- `font-milky text-xl sm:text-2xl text-white`
- `w-5 h-5 inline mr-2`
- `p-4 sm:p-6`
- `font-amble text-sm text-gray-600 mb-3`
- `font-amble bg-gray-50 border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-[120px] text-sm sm:text-base`
- `flex items-center justify-between mt-2`
- `font-amble text-xs text-gray-400`
- `font-amble text-xs text-blue-500`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-green-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden`
- `bg-gradient-to-r from-green-500 to-emerald-500 p-4 sm:p-5`
- `font-amble text-sm text-gray-600 mb-4`
- `flex gap-2 mb-4`
- `font-amble bg-gray-50 border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 flex-1`
- `font-amble bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-0 shadow-[0_4px_0_#2E8B57] hover:shadow-[0_6px_0_#2E8B57] active:translate-y-0.5 active:shadow-[0_2px_0_#2E8B57]`
- `mr-1`
- `flex flex-wrap gap-2 min-h-[60px] p-3 bg-green-50 rounded-xl border-2 border-green-200`
- `font-amble text-sm text-gray-400 italic w-full text-center py-2`
- `bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 font-amble text-sm border-2 border-green-300 shadow-sm`
- `bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-all shadow-sm hover:shadow`
- `flex items-center justify-between mt-3`
- `font-amble text-xs text-green-600`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-orange-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden`
- `bg-gradient-to-r from-orange-500 to-amber-500 p-4 sm:p-5`
- `grid grid-cols-1 sm:grid-cols-2 gap-4`
- `bg-orange-50 border-2 border-orange-200 rounded-xl p-4`
- `w-full font-amble bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 border-0 shadow-[0_4px_0_#B8860B] hover:shadow-[0_6px_0_#B8860B] active:translate-y-0.5 active:shadow-[0_2px_0_#B8860B] mb-3`
- `mr-2`
- `hidden`
- `relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-orange-300`
- `object-cover`
- `w-full h-full flex items-center justify-center text-gray-400`
- `text-center`
- `mx-auto mb-2`
- `font-amble text-xs`
- `font-arcade text-xs text-orange-600 text-center mt-2`
- `flex items-center justify-between mt-4`
- `font-amble text-xs text-orange-600`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-yellow-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] p-4 sm:p-6`
- `w-full font-milky text-white text-lg sm:text-xl h-auto sm:h-16 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 border-0 shadow-[0_8px_0_#2E8B57] transition-all duration-200 hover:from-green-600 hover:to-emerald-700 hover:shadow-[0_10px_0_#2E8B57] hover:-translate-y-1 active:translate-y-2 active:shadow-[0_4px_0_#2E8B57] disabled:opacity-60 disabled:cursor-not-allowed`
- `flex items-center justify-center gap-3`
- `animate-spin`
- `flex items-center justify-center gap-2`
- `w-6 h-6`
- `font-amble text-xs text-gray-500 text-center mt-3`
- `lg:sticky lg:top-6 lg:self-start space-y-4`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-purple-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] p-4 sm:p-5`
- `flex items-center gap-3 mb-3`
- `text-4xl sm:text-5xl motion-safe:animate-subtle-float`
- `font-milky text-xl sm:text-2xl text-purple-800`
- `font-amble text-xs sm:text-sm text-purple-600`
- `bg-purple-50 border-2 border-purple-200 rounded-xl p-3`
- `font-amble text-xs text-purple-700`
- `bg-gray-800 p-3 rounded-2xl border-4 border-black shadow-2xl`
- `bg-black rounded-xl overflow-hidden`
- `bg-black px-4 py-2 flex items-center justify-between`
- `text-white text-xs font-mono`
- `flex items-center gap-1`
- `w-3 h-3 bg-green-500 rounded-full`
- `w-3 h-3 bg-yellow-500 rounded-full`
- `w-3 h-3 bg-red-500 rounded-full`
- `bg-gray-900 overflow-y-auto max-h-[calc(100vh-250px)]`
- `relative w-full h-[300px] bg-cover bg-center`
- `absolute inset-0 bg-black/40`
- `absolute inset-0 flex items-center justify-center p-4`
- `relative bg-white border-4 border-[hsl(var(--foreground))] rounded-2xl p-4 pt-12 shadow-[4px_4px_0px_hsl(var(--foreground))] w-full max-w-[250px]`
- `absolute -top-10 left-1/2 -translate-x-1/2 z-10 motion-safe:animate-float`
- `drop-shadow-lg`
- `font-milky text-base text-center text-[hsl(var(--foreground))] mb-1`
- `font-body text-[10px] text-[#333] text-center h-16 overflow-y-auto leading-tight`
- `h-4 bg-gradient-to-b from-gray-900 to-transparent`
- `relative w-full min-h-[350px] bg-cover bg-center p-3`
- `absolute inset-0 bg-black/70 backdrop-blur-sm`
- `relative z-10 text-center w-full`
- `font-milky text-lg text-white mb-3`
- `grid grid-cols-2 gap-2 mb-4 max-w-[250px] mx-auto`
- `bg-white/10 border-2 border-golden-coin rounded-lg flex flex-col items-center justify-center p-2 aspect-square`
- `text-xl sm:text-2xl`
- `font-body text-white font-bold text-[10px] mt-1 text-center leading-tight`
- `bg-white p-1.5 pb-4 shadow-lg border-2 border-gray-300 relative w-[80px]`
- `w-full object-cover aspect-square`
- `absolute bottom-0.5 left-1/2 -translate-x-1/2 font-milky text-[8px] text-teddy-brown whitespace-nowrap`
- `bg-white/95 backdrop-blur-md rounded-2xl border-4 border-yellow-400 shadow-[0_8px_0_#8B4513] p-4`
- `font-milky text-base text-yellow-800 mb-3`
- `space-y-2`
- `flex items-center justify-between`
- `font-amble text-xs text-gray-600`
- `text-green-500`
- `text-yellow-500 text-xs`
- `mt-3 pt-3 border-t border-yellow-200`
- `font-amble text-xs text-gray-500`
- `font-arcade text-xs text-yellow-600`
- `w-full bg-yellow-200 rounded-full h-2 mt-1 overflow-hidden`
- `h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 rounded-full`
- `relative z-10 text-center mt-8 pb-8`
- `font-amble text-xs sm:text-sm text-purple-300 italic`

## Textos del Componente
A continuación se detallan los textos encontrados en el componente y el elemento donde se encuentran:

- **<div>**: {/* Animated Stars Background */} {/* Header */} {/* Main Content Grid */} {/* Footer */}
- **<div>**: {[...Array(30)].map((_, i) => ( <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-60 motion-safe:animate-pulse" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s`, animationDuration: `${2 + Math.random() * 2}s`, }} /> ))}
- **<span>**: PANEL DE CONFIGURACIÓN DE HÉROE
- **<h1>**: 🎮 Personaliza tu Personaje, Facu 🐻
- **<p>**: Nivel 9 — Completa tu perfil para generar la invitación épica
- **<div>**: {/* Left Column: Config Panel */} {/* Right Column: Live Preview */}
- **<div>**: {/* Section 1: Hero Bio */} {/* Section 2: Inventory/Likes */} {/* Section 3: Photo Memory Chest */} {/* Compile Button */}
- **<div>**: 📝
- **<p>**: Sección 1
- **<h2>**: Mensaje de Presentación
- **<p>**: Escribe tu mensaje de bienvenida para los invitados. ¡Haz que sea ÉPICO! 🎉
- **<span>**: {bio.length} caracteres
- **<span>**: ✅ Perfecto para la invitación
- **<div>**: 🎒
- **<p>**: Sección 2
- **<h2>**: Inventario de Gustos
- **<div>**: {/* Add Like Input */} {/* Likes Tags */}
- **<p>**: Agrega todas las cosas que te gustan. ¡Cuantas más agregues, más épico será tu inventario! ⚡
- **<Button>**: Añadir
- **<div>**: {likes.length === 0 ? ( <p className="font-amble text-sm text-gray-400 italic w-full text-center py-2"> Aún no has agregado gustos. ¡Empieza ahora! 🎮 </p> ) : ( likes.map(like => ( <div key={like} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 font-amble text-sm border-2 border-green-300 shadow-sm"> <span>⭐</span> <span>{like}</span> <button onClick={() => handleRemoveLike(like)} aria-label={`Eliminar ${like} de la lista`} className="bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-all shadow-sm hover:shadow" > <X size={10} /> </button> </div> )) )}
- **<p>**: Aún no has agregado gustos. ¡Empieza ahora! 🎮
- **<span>**: ⭐
- **<span>**: {like}
- **<span>**: {likes.length} items en inventario
- **<span>**: {likes.length >= 3 ? '✅ ¡Inventario completo!' : '⚡ Agrega más para ser épico'}
- **<div>**: 📸
- **<p>**: Sección 3
- **<h2>**: Cofre de Recuerdos
- **<p>**: Sube 2 fotos tuyas para que los invitados vean al héroe detrás de la aventura. ¡Elige tus mejores momentos! 🏆
- **<div>**: {[1, 2].map(i => ( <div key={i} className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4"> {/* Upload Button */} <Button onClick={() => (i === 1 ? fileInputRef1 : fileInputRef2).current?.click()} aria-label={`Subir foto ${i}`} className="w-full font-amble bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 border-0 shadow-[0_4px_0_#B8860B] hover:shadow-[0_6px_0_#B8860B] active:translate-y-0.5 active:shadow-[0_2px_0_#B8860B] mb-3" > <Upload size={16} className="mr-2" /> {photo1Preview && i === 1 ? '📷 Cambiar Foto 1' : photo2Preview && i === 2 ? '📷 Cambiar Foto 2' : '📷 Subir Foto ' + i} </Button> <Input type="file" accept="image/*" className="hidden" ref={i === 1 ? fileInputRef1 : fileInputRef2} onChange={(e) => handleFileChange(e, i as 1 | 2)} /> {/* Photo Preview */} <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-orange-300"> {((i === 1 && photo1Preview) || (i === 2 && photo2Preview)) ? ( <Image src={i === 1 ? photo1Preview! : photo2Preview!} alt={`Recuerdo ${i} de Facu`} fill className="object-cover" /> ) : ( <div className="w-full h-full flex items-center justify-center text-gray-400"> <div className="text-center"> <Camera size={40} className="mx-auto mb-2" /> <p className="font-amble text-xs">Sin foto aún</p> </div> </div> )} </div> <p className="font-arcade text-xs text-orange-600 text-center mt-2"> RECUERDO {i} </p> </div> ))}
- **<div>**: {/* Upload Button */} {/* Photo Preview */}
- **<Button>**: {photo1Preview && i === 1 ? '📷 Cambiar Foto 1' : photo2Preview && i === 2 ? '📷 Cambiar Foto 2' : '📷 Subir Foto ' + i}
- **<div>**: {((i === 1 && photo1Preview) || (i === 2 && photo2Preview)) ? ( <Image src={i === 1 ? photo1Preview! : photo2Preview!} alt={`Recuerdo ${i} de Facu`} fill className="object-cover" /> ) : ( <div className="w-full h-full flex items-center justify-center text-gray-400"> <div className="text-center"> <Camera size={40} className="mx-auto mb-2" /> <p className="font-amble text-xs">Sin foto aún</p> </div> </div> )}
- **<p>**: Sin foto aún
- **<p>**: RECUERDO {i}
- **<span>**: {photo1Preview && photo2Preview ? '2/2 fotos subidas' : photo1Preview || photo2Preview ? '1/2 fotos subidas' : '0/2 fotos subidas'}
- **<span>**: {photo1Preview && photo2Preview ? '✅ ¡Cofre completo!' : '⚡ Sube ambas fotos'}
- **<Button>**: {isCompiling ? ( <span className="flex items-center justify-center gap-3"> <span className="animate-spin">⚙️</span> Compilando Nivel... </span> ) : ( <span className="flex items-center justify-center gap-2"> 🎮 ¡Compilar Nivel y Generar Invitación! <CheckCircle className="w-6 h-6" /> </span> )}
- **<span>**: Compilando Nivel...
- **<span>**: ⚙️
- **<span>**: 🎮 ¡Compilar Nivel y Generar Invitación!
- **<p>**: Al compilar, se guardará tu configuración y se generará la invitación web
- **<div>**: {/* Preview Header */} {/* Phone Preview Frame */} {/* Quick Stats */}
- **<span>**: 🐻‍❄️
- **<h3>**: Vista Previa en Vivo
- **<p>**: Así se verá tu invitación
- **<p>**: 💡 Los cambios se reflejan aquí en tiempo real mientras editas
- **<strong>**: Tip:
- **<div>**: {/* Phone Status Bar */} {/* Preview Content */}
- **<span>**: 9:41
- **<div>**: {/* PresentationScreen Preview */} {/* Divider */} {/* BioBookScreen Preview */}
- **<h2>**: ¡Nivel 9 Desbloqueado!
- **<p>**: {bio}
- **<div>**: {/* Inventory Grid */} {/* Photos Preview */}
- **<h2>**: 🎒 Inventario de Facu
- **<div>**: {inventoryItems.map((item, index) => ( <div key={index} className="bg-white/10 border-2 border-golden-coin rounded-lg flex flex-col items-center justify-center p-2 aspect-square"> <span className="text-xl sm:text-2xl">{item.icon}</span> <p className="font-body text-white font-bold text-[10px] mt-1 text-center leading-tight">{item.text}</p> </div> ))}
- **<span>**: {item.icon}
- **<p>**: {item.text}
- **<div>**: {photo1Preview && ( <div className="bg-white p-1.5 pb-4 shadow-lg border-2 border-gray-300 relative w-[80px]"> <Image src={photo1Preview} alt="Recuerdo 1" width={80} height={80} className="w-full object-cover aspect-square" /> <p className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-milky text-[8px] text-teddy-brown whitespace-nowrap">RECUERDO 1</p> </div> )} {photo2Preview && ( <div className="bg-white p-1.5 pb-4 shadow-lg border-2 border-gray-300 relative w-[80px]"> <Image src={photo2Preview} alt="Recuerdo 2" width={80} height={80} className="w-full object-cover aspect-square" /> <p className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-milky text-[8px] text-teddy-brown whitespace-nowrap">RECUERDO 2</p> </div> )}
- **<p>**: RECUERDO 1
- **<p>**: RECUERDO 2
- **<h4>**: 📊 Estado del Perfil
- **<div>**: {bio.length > 20 ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
- **<span>**: 📝 Mensaje
- **<span>**: ⚡
- **<div>**: {likes.length >= 3 ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
- **<span>**: 🎒 Inventario
- **<span>**: ⚡
- **<div>**: {photo1Preview && photo2Preview ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
- **<span>**: 📸 Fotos
- **<span>**: ⚡
- **<span>**: Progreso total
- **<span>**: {([bio.length > 20, likes.length >= 3, photo1Preview && photo2Preview].filter(Boolean).length / 3 * 100).toFixed(0)} %
- **<p>**: 💡 Consejo: Completa todas las secciones para que la invitación sea ¡INCREÍBLE!

## Contenido Completo del Archivo
```tsx
'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Upload, Star, Shield, Heart, Camera, CheckCircle, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

export default function AdminConfigPage() {
  const [bio, setBio] = useState('¡Hola! Soy Facu. He llegado al Nivel 9 con la barra de energía al máximo y te invito a celebrarlo conmigo en esta nueva aventura multijugador.');
  const [likes, setLikes] = useState<string[]>(['Taekwondo', 'Videojuegos', 'Super Bear Adventure', 'Baloncesto']);
  const [currentLike, setCurrentLike] = useState('');
  const [photo1File, setPhoto1File] = useState<File | null>(null);
  const [photo2File, setPhoto2File] = useState<File | null>(null);
  const [photo1Preview, setPhoto1Preview] = useState<string | null>('/facu.jpg');
  const [photo2Preview, setPhoto2Preview] = useState<string | null>('/facu2.jpeg');
  const [isCompiling, setIsCompiling] = useState(false);

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
    setIsCompiling(true);

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
        title: "🎮 ¡Nivel Compilado!",
        description: "¡La configuración se ha guardado exitosamente! Redirigiendo a la invitación...",
    });

    setTimeout(() => {
        setIsCompiling(false);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4 sm:p-6 overflow-y-auto">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 motion-safe:animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border-2 border-yellow-400 mb-4">
          <Star className="w-5 h-5 text-yellow-400 motion-safe:animate-spin" style={{ animationDuration: '3s' }} />
          <span className="font-milky text-yellow-400 text-sm sm:text-base tracking-wider">PANEL DE CONFIGURACIÓN DE HÉROE</span>
          <Star className="w-5 h-5 text-yellow-400 motion-safe:animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
        </div>
        <h1 className="font-milky text-3xl sm:text-4xl md:text-5xl text-white mb-2" style={{ textShadow: '3px 3px 0 #8B4513' }}>
          🎮 Personaliza tu Personaje, Facu 🐻
        </h1>
        <p className="font-amble text-base sm:text-lg text-purple-200">
          Nivel 9 — Completa tu perfil para generar la invitación épica
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

        {/* Left Column: Config Panel */}
        <div className="space-y-6">

          {/* Section 1: Hero Bio */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-blue-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  📝
                </div>
                <div>
                  <p className="font-arcade text-xs text-white/80 uppercase tracking-wider">Sección 1</p>
                  <h2 className="font-milky text-xl sm:text-2xl text-white" style={{ textShadow: '2px 2px 0 #8B4513' }}>
                    <Shield className="w-5 h-5 inline mr-2" />
                    Mensaje de Presentación
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="font-amble text-sm text-gray-600 mb-3">
                Escribe tu mensaje de bienvenida para los invitados. ¡Haz que sea ÉPICO! 🎉
              </p>
              <Textarea
                placeholder="¡Hola! Soy Facu. He llegado al Nivel 9..."
                className="font-amble bg-gray-50 border-2 border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-[120px] text-sm sm:text-base"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={5}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="font-amble text-xs text-gray-400">
                  {bio.length} caracteres
                </span>
                <span className="font-amble text-xs text-blue-500">
                  ✅ Perfecto para la invitación
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Inventory/Likes */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-green-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  🎒
                </div>
                <div>
                  <p className="font-arcade text-xs text-white/80 uppercase tracking-wider">Sección 2</p>
                  <h2 className="font-milky text-xl sm:text-2xl text-white" style={{ textShadow: '2px 2px 0 #8B4513' }}>
                    <Heart className="w-5 h-5 inline mr-2" />
                    Inventario de Gustos
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="font-amble text-sm text-gray-600 mb-4">
                Agrega todas las cosas que te gustan. ¡Cuantas más agregues, más épico será tu inventario! ⚡
              </p>

              {/* Add Like Input */}
              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Añadir gusto (ej. Taekwondo, Pizza...)"
                  className="font-amble bg-gray-50 border-2 border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 flex-1"
                  value={currentLike}
                  onChange={(e) => setCurrentLike(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddLike()}
                />
                <Button
                  onClick={handleAddLike}
                  aria-label="Agregar gusto a la lista de Facu"
                  className="font-amble bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 border-0 shadow-[0_4px_0_#2E8B57] hover:shadow-[0_6px_0_#2E8B57] active:translate-y-0.5 active:shadow-[0_2px_0_#2E8B57]"
                >
                  <Plus size={16} className="mr-1" /> Añadir
                </Button>
              </div>

              {/* Likes Tags */}
              <div className="flex flex-wrap gap-2 min-h-[60px] p-3 bg-green-50 rounded-xl border-2 border-green-200">
                {likes.length === 0 ? (
                  <p className="font-amble text-sm text-gray-400 italic w-full text-center py-2">
                    Aún no has agregado gustos. ¡Empieza ahora! 🎮
                  </p>
                ) : (
                  likes.map(like => (
                    <div key={like} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2 font-amble text-sm border-2 border-green-300 shadow-sm">
                      <span>⭐</span>
                      <span>{like}</span>
                      <button
                        onClick={() => handleRemoveLike(like)}
                        aria-label={`Eliminar ${like} de la lista`}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs transition-all shadow-sm hover:shadow"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="flex items-center justify-between mt-3">
                <span className="font-amble text-xs text-gray-400">
                  {likes.length} items en inventario
                </span>
                <span className="font-amble text-xs text-green-600">
                  {likes.length >= 3 ? '✅ ¡Inventario completo!' : '⚡ Agrega más para ser épico'}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Photo Memory Chest */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-orange-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                  📸
                </div>
                <div>
                  <p className="font-arcade text-xs text-white/80 uppercase tracking-wider">Sección 3</p>
                  <h2 className="font-milky text-xl sm:text-2xl text-white" style={{ textShadow: '2px 2px 0 #8B4513' }}>
                    <Camera className="w-5 h-5 inline mr-2" />
                    Cofre de Recuerdos
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <p className="font-amble text-sm text-gray-600 mb-4">
                Sube 2 fotos tuyas para que los invitados vean al héroe detrás de la aventura. ¡Elige tus mejores momentos! 🏆
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2].map(i => (
                  <div key={i} className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                    {/* Upload Button */}
                    <Button
                      onClick={() => (i === 1 ? fileInputRef1 : fileInputRef2).current?.click()}
                      aria-label={`Subir foto ${i}`}
                      className="w-full font-amble bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 border-0 shadow-[0_4px_0_#B8860B] hover:shadow-[0_6px_0_#B8860B] active:translate-y-0.5 active:shadow-[0_2px_0_#B8860B] mb-3"
                    >
                      <Upload size={16} className="mr-2" />
                      {photo1Preview && i === 1 ? '📷 Cambiar Foto 1' : photo2Preview && i === 2 ? '📷 Cambiar Foto 2' : '📷 Subir Foto ' + i}
                    </Button>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={i === 1 ? fileInputRef1 : fileInputRef2}
                      onChange={(e) => handleFileChange(e, i as 1 | 2)}
                    />

                    {/* Photo Preview */}
                    <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-orange-300">
                      {((i === 1 && photo1Preview) || (i === 2 && photo2Preview)) ? (
                        <Image
                          src={i === 1 ? photo1Preview! : photo2Preview!}
                          alt={`Recuerdo ${i} de Facu`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <div className="text-center">
                            <Camera size={40} className="mx-auto mb-2" />
                            <p className="font-amble text-xs">Sin foto aún</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="font-arcade text-xs text-orange-600 text-center mt-2">
                      RECUERDO {i}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="font-amble text-xs text-gray-400">
                  {photo1Preview && photo2Preview ? '2/2 fotos subidas' : photo1Preview || photo2Preview ? '1/2 fotos subidas' : '0/2 fotos subidas'}
                </span>
                <span className="font-amble text-xs text-orange-600">
                  {photo1Preview && photo2Preview ? '✅ ¡Cofre completo!' : '⚡ Sube ambas fotos'}
                </span>
              </div>
            </div>
          </div>

          {/* Compile Button */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-yellow-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] p-4 sm:p-6">
            <Button
              onClick={handleCompile}
              disabled={isCompiling}
              aria-label="Compilar nivel y generar invitación de cumpleaños"
              className="w-full font-milky text-white text-lg sm:text-xl h-auto sm:h-16 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 border-0 shadow-[0_8px_0_#2E8B57] transition-all duration-200 hover:from-green-600 hover:to-emerald-700 hover:shadow-[0_10px_0_#2E8B57] hover:-translate-y-1 active:translate-y-2 active:shadow-[0_4px_0_#2E8B57] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isCompiling ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="animate-spin">⚙️</span>
                  Compilando Nivel...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  🎮 ¡Compilar Nivel y Generar Invitación! <CheckCircle className="w-6 h-6" />
                </span>
              )}
            </Button>
            <p className="font-amble text-xs text-gray-500 text-center mt-3">
              Al compilar, se guardará tu configuración y se generará la invitación web
            </p>
          </div>
        </div>

        {/* Right Column: Live Preview */}
        <div className="lg:sticky lg:top-6 lg:self-start space-y-4">
          {/* Preview Header */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-purple-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] p-4 sm:p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl sm:text-5xl motion-safe:animate-subtle-float" role="img" aria-label="Oso científico de Super Bear Adventure">🐻‍❄️</span>
              <div>
                <h3 className="font-milky text-xl sm:text-2xl text-purple-800">Vista Previa en Vivo</h3>
                <p className="font-amble text-xs sm:text-sm text-purple-600">Así se verá tu invitación</p>
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-3">
              <p className="font-amble text-xs text-purple-700">
                💡 <strong>Tip:</strong> Los cambios se reflejan aquí en tiempo real mientras editas
              </p>
            </div>
          </div>

          {/* Phone Preview Frame */}
          <div className="bg-gray-800 p-3 rounded-2xl border-4 border-black shadow-2xl">
            <div className="bg-black rounded-xl overflow-hidden">
              {/* Phone Status Bar */}
              <div className="bg-black px-4 py-2 flex items-center justify-between">
                <span className="text-white text-xs font-mono">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-gray-900 overflow-y-auto max-h-[calc(100vh-250px)]">

                {/* PresentationScreen Preview */}
                <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/mundos/bear_village/Hubbearvillage.webp')" }}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative bg-white border-4 border-[hsl(var(--foreground))] rounded-2xl p-4 pt-12 shadow-[4px_4px_0px_hsl(var(--foreground))] w-full max-w-[250px]">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 motion-safe:animate-float">
                        <Image src="/facu_bear_sin_fondo.png" alt="Facu Bear" width={80} height={80} className="drop-shadow-lg" />
                      </div>
                      <h2 className="font-milky text-base text-center text-[hsl(var(--foreground))] mb-1">¡Nivel 9 Desbloqueado!</h2>
                      <p className="font-body text-[10px] text-[#333] text-center h-16 overflow-y-auto leading-tight">{bio}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-4 bg-gradient-to-b from-gray-900 to-transparent"></div>

                {/* BioBookScreen Preview */}
                <div className="relative w-full min-h-[350px] bg-cover bg-center p-3" style={{ backgroundImage: "url('/mundos/bear_village/Gianthouseentrancearea.webp')" }}>
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
                  <div className="relative z-10 text-center w-full">
                    <h2 className="font-milky text-lg text-white mb-3" style={{ textShadow: '2px 2px hsl(var(--teddy-brown))' }}>
                      🎒 Inventario de Facu
                    </h2>

                    {/* Inventory Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4 max-w-[250px] mx-auto">
                      {inventoryItems.map((item, index) => (
                        <div key={index} className="bg-white/10 border-2 border-golden-coin rounded-lg flex flex-col items-center justify-center p-2 aspect-square">
                          <span className="text-xl sm:text-2xl">{item.icon}</span>
                          <p className="font-body text-white font-bold text-[10px] mt-1 text-center leading-tight">{item.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Photos Preview */}
                    <div className="flex items-center justify-center gap-3">
                      {photo1Preview && (
                        <div className="bg-white p-1.5 pb-4 shadow-lg border-2 border-gray-300 relative w-[80px]">
                          <Image src={photo1Preview} alt="Recuerdo 1" width={80} height={80} className="w-full object-cover aspect-square" />
                          <p className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-milky text-[8px] text-teddy-brown whitespace-nowrap">RECUERDO 1</p>
                        </div>
                      )}
                      {photo2Preview && (
                        <div className="bg-white p-1.5 pb-4 shadow-lg border-2 border-gray-300 relative w-[80px]">
                          <Image src={photo2Preview} alt="Recuerdo 2" width={80} height={80} className="w-full object-cover aspect-square" />
                          <p className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-milky text-[8px] text-teddy-brown whitespace-nowrap">RECUERDO 2</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-yellow-400 shadow-[0_8px_0_#8B4513] p-4">
            <h4 className="font-milky text-base text-yellow-800 mb-3">📊 Estado del Perfil</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-amble text-xs text-gray-600">📝 Mensaje</span>
                {bio.length > 20 ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-amble text-xs text-gray-600">🎒 Inventario</span>
                {likes.length >= 3 ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-amble text-xs text-gray-600">📸 Fotos</span>
                {photo1Preview && photo2Preview ? <CheckCircle size={16} className="text-green-500" /> : <span className="text-yellow-500 text-xs">⚡</span>}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-yellow-200">
              <div className="flex items-center justify-between">
                <span className="font-amble text-xs text-gray-500">Progreso total</span>
                <span className="font-arcade text-xs text-yellow-600">
                  {([bio.length > 20, likes.length >= 3, photo1Preview && photo2Preview].filter(Boolean).length / 3 * 100).toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-2 mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 rounded-full"
                  style={{ width: `${([bio.length > 20, likes.length >= 3, photo1Preview && photo2Preview].filter(Boolean).length / 3 * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-8 pb-8">
        <p className="font-amble text-xs sm:text-sm text-purple-300 italic">
          💡 Consejo: Completa todas las secciones para que la invitación sea ¡INCREÍBLE!
        </p>
      </div>
    </div>
  );
}


```
