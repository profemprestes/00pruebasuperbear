'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Star, Trophy, Shield, Zap, Heart, Target, Gift } from 'lucide-react';

export default function ProfileGuidePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const totalSteps = 5;

  const handleNext = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToConfig = () => {
    setCompletedSteps(prev => new Set([...prev, currentStep]));
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
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

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/20 border-2 border-yellow-400 mb-4">
            <Star className="w-5 h-5 text-yellow-400 motion-safe:animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-milky text-yellow-400 text-sm sm:text-base tracking-wider">GUÍA DE CONFIGURACIÓN DE HÉROE</span>
            <Star className="w-5 h-5 text-yellow-400 motion-safe:animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
          <h1 className="font-milky text-3xl sm:text-4xl md:text-5xl text-white mb-2" style={{ textShadow: '3px 3px 0 #8B4513' }}>
            🐻 ¡Bienvenido, Facu! 🎮
          </h1>
          <p className="font-amble text-base sm:text-lg text-purple-200">
            Nivel 9 Desbloqueado — Es hora de personalizar tu personaje
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border-2 border-white/20">
          <div className="flex items-center justify-between mb-2">
            <span className="font-amble text-xs sm:text-sm text-purple-200">Progreso de Configuración</span>
            <span className="font-arcade text-xs sm:text-sm text-yellow-400">
              {completedSteps.size}/{totalSteps} Pasos
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(completedSteps.size / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {[0, 1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                  completedSteps.has(step)
                    ? 'bg-green-500 text-white scale-110'
                    : currentStep === step
                    ? 'bg-yellow-400 text-brown-800 scale-125 ring-4 ring-yellow-400/50'
                    : 'bg-white/20 text-white/50'
                }`}
              >
                {completedSteps.has(step) ? <CheckCircle size={14} className="sm:w-5 sm:h-5" /> : step + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content Card */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border-4 border-yellow-400 shadow-[0_8px_0_#8B4513,0_12px_30px_rgba(0,0,0,0.3)] overflow-hidden">
          {/* Step Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-4xl shadow-lg">
                {currentStep === 0 && '🎯'}
                {currentStep === 1 && '⚡'}
                {currentStep === 2 && '🎒'}
                {currentStep === 3 && '🏆'}
                {currentStep === 4 && '🎁'}
              </div>
              <div>
                <p className="font-arcade text-xs sm:text-sm text-white/80 uppercase tracking-wider">
                  Paso {currentStep + 1} de {totalSteps}
                </p>
                <h2 className="font-milky text-xl sm:text-2xl md:text-3xl text-white" style={{ textShadow: '2px 2px 0 #8B4513' }}>
                  {currentStep === 0 && '¡Conoce tu Misión, Héroe!'}
                  {currentStep === 1 && 'Configura tu Super Poder'}
                  {currentStep === 2 && 'Llena tu Inventario Épico'}
                  {currentStep === 3 && '¡Es hora de la Aventura!'}
                  {currentStep === 4 && '¡Recompensa Desbloqueada!'}
                </h2>
              </div>
            </div>
          </div>

          {/* Step Body */}
          <div className="p-4 sm:p-8">
            {/* STEP 0: Intro */}
            {currentStep === 0 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-milky text-lg sm:text-xl text-blue-800 mb-2">¿Por qué es importante tu perfil?</h3>
                      <p className="font-amble text-sm sm:text-base text-blue-700 leading-relaxed">
                        ¡Atención, <strong>Facu</strong>! Estás a punto de llegar al <strong>Nivel 9</strong> 🎉 y eso es ÉPICO. 
                        Pero antes de empezar esta nueva aventura, tus <strong>aliados</strong> (sí, tus amigos y familia que vendrán a la fiesta) 
                        necesitan saber <strong>cómo ayudarte</strong> en la misión.
                      </p>
                    </div>
                  </div>
                  <p className="font-amble text-sm sm:text-base text-blue-700 leading-relaxed ml-9">
                    Cuando completes tu perfil, cada invitado sabrá exactamente <strong>qué te gusta</strong>, 
                    <strong> qué te hace fuerte</strong> y <strong>cómo hacer que esta fiesta sea LEGENDARIA</strong>. 
                    ¡Es como preparar tu equipo antes de un boss fight! 🐉
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 text-center">
                    <div className="text-3xl sm:text-4xl mb-2">👥</div>
                    <p className="font-amble text-xs sm:text-sm text-green-700 font-bold">Tus aliados sabrán cómo ayudarte</p>
                  </div>
                  <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4 text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🎮</div>
                    <p className="font-amble text-xs sm:text-sm text-purple-700 font-bold">La fiesta será personalizada para TI</p>
                  </div>
                  <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-4 text-center">
                    <div className="text-3xl sm:text-4xl mb-2">🏆</div>
                    <p className="font-amble text-xs sm:text-sm text-orange-700 font-bold">Desbloquearás recompensas especiales</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: Super Power */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-milky text-lg sm:text-xl text-yellow-800 mb-2">Paso 1: Define tu Super Poder ⚡</h3>
                      <p className="font-amble text-sm sm:text-base text-yellow-700 leading-relaxed">
                        Facu, tienes <strong>9 años</strong> de experiencia en este juego y eso te da poderes únicos. 
                        Tu <strong>"Super Poder"</strong> es esa cosa que te hace especial, lo que te hace BRILLAR.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-milky text-base sm:text-lg text-gray-800 mb-3">💡 Ejemplos de Super Poderes:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-2xl">🏀</span>
                      <div>
                        <p className="font-amble text-sm text-gray-700"><strong>"Tiro Libre Perfecto"</strong> — Eres increíble en el básquet</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-2xl">🥋</span>
                      <div>
                        <p className="font-amble text-sm text-gray-700"><strong>"Patada Dragón"</strong> — Dominas el Taekwondo como un campeón</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <span className="text-2xl">🎮</span>
                      <div>
                        <p className="font-amble text-sm text-gray-700"><strong>"Modo Aventura Activado"</strong> — Siempre encuentras el camino en los juegos</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-amble text-xs sm:text-sm text-gray-500 mt-4 italic">
                    💬 <strong>Tu misión:</strong> Piensa qué es lo que MEJOR haces y escribe eso como tu Super Poder. ¡Sé creativo!
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2: Inventory */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-milky text-lg sm:text-xl text-green-800 mb-2">Paso 2: Llena tu Inventario Épico 🎒</h3>
                      <p className="font-amble text-sm sm:text-base text-green-700 leading-relaxed">
                        Todo gran héroe tiene un inventario con sus <strong>cosas favoritas</strong>. 
                        Estas son las cosas que te dan <strong>poderes especiales</strong> y te hacen feliz.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-milky text-base sm:text-lg text-gray-800 mb-3">📦 ¿Qué va en tu inventario?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                      <div className="text-2xl mb-2">🏀</div>
                      <p className="font-amble text-sm text-orange-800 font-bold mb-1">Deportes</p>
                      <p className="font-amble text-xs text-orange-600">Básquet, Taekwondo, lo que te haga mover</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="text-2xl mb-2">🎮</div>
                      <p className="font-amble text-sm text-blue-800 font-bold mb-1">Videojuegos</p>
                      <p className="font-amble text-xs text-blue-600">Super Bear Adventure, tus favoritos</p>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                      <div className="text-2xl mb-2">🎨</div>
                      <p className="font-amble text-sm text-purple-800 font-bold mb-1">Creatividad</p>
                      <p className="font-amble text-xs text-purple-600">Dibujar, crear, inventar cosas nuevas</p>
                    </div>
                    <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-4">
                      <div className="text-2xl mb-2">🍕</div>
                      <p className="font-amble text-sm text-pink-800 font-bold mb-1">Comida Fav</p>
                      <p className="font-amble text-xs text-pink-600">Pizza, helado, lo que te da energía</p>
                    </div>
                  </div>
                  <p className="font-amble text-xs sm:text-sm text-gray-500 mt-4 italic">
                    💬 <strong>Tu misión:</strong> Agrega todas las cosas que te gustan. Cuantas más agregues, ¡más épico será tu inventario!
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: The Adventure */}
            {currentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-milky text-lg sm:text-xl text-purple-800 mb-2">Paso 3: ¡La Gran Aventura te Espera! 🗺️</h3>
                      <p className="font-amble text-sm sm:text-base text-purple-700 leading-relaxed">
                        ¡Casi listo, Facu! Con tu perfil completo, tus aliados podrán <strong>entender cómo es tu mundo</strong> 
                        y prepararse para la <strong>mejor fiesta de cumpleaños</strong> que hayan visto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-milky text-base sm:text-lg text-gray-800 mb-4">🎯 Lo que pasará cuando completes todo:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="font-amble text-sm text-green-700">
                        <strong>Se generará tu invitación web</strong> — Una página increíble que podrás compartir con todos
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="font-amble text-sm text-blue-700">
                        <strong>Tus amigos verán quién eres</strong> — Sabrán qué te gusta y cómo hacerte feliz
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="font-amble text-sm text-yellow-700">
                        <strong>La fiesta será personalizada</strong> — Todo estará pensado para TI, el héroe del Nivel 9
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <p className="font-amble text-sm text-purple-700">
                        <strong>¡Será ÉPICO!</strong> — Una aventura que todos recordarán siempre
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-xl p-4 sm:p-6 text-center">
                  <p className="font-milky text-lg sm:text-xl text-yellow-800 mb-2">
                    🐻 Recuerda, Facu:
                  </p>
                  <p className="font-amble text-sm sm:text-base text-yellow-700 leading-relaxed">
                    Tienes <strong>9 años</strong> y eso significa que eres un <strong>aventurero experimentado</strong>. 
                    Cada cosa que agregues a tu perfil hará que esta fiesta sea <strong>más increíble</strong>. 
                    ¡Así que ponle todas tus cosas favoritas y que empiece la aventura!
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: Reward */}
            {currentStep === 4 && (
              <div className="space-y-4 sm:space-y-6 text-center">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-400 rounded-2xl p-6 sm:p-8">
                  <div className="text-5xl sm:text-6xl mb-4 motion-safe:animate-bounce">🎁</div>
                  <h3 className="font-milky text-2xl sm:text-3xl text-yellow-800 mb-3">
                    ¡RECOMPENSA DESBLOQUEADA!
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 rounded-full mb-4">
                    <Trophy className="w-5 h-5 text-yellow-800" />
                    <span className="font-arcade text-sm sm:text-base text-yellow-900">LOGRO: CONFIGURADOR EXPERTO</span>
                  </div>
                  <p className="font-amble text-base sm:text-lg text-yellow-700 leading-relaxed max-w-lg mx-auto">
                    ¡Increíble, Facu! Has completado tu <strong>Guía de Configuración de Héroe</strong>. 
                    Ahora sabes exactamente cómo preparar tu perfil para que la fiesta sea <strong>LEGENDARIA</strong>.
                  </p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6">
                  <h4 className="font-milky text-lg sm:text-xl text-gray-800 mb-4">🎉 Tu Recompensa Especial:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="text-3xl mb-2">✨</div>
                      <p className="font-amble text-sm text-blue-800 font-bold">Skin Exclusiva</p>
                      <p className="font-amble text-xs text-blue-600">Desbloqueas un diseño especial para tu invitación</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                      <div className="text-3xl mb-2">🏆</div>
                      <p className="font-amble text-sm text-green-800 font-bold">Título de Honor</p>
                      <p className="font-amble text-xs text-green-600">"Maestro del Nivel 9" aparecerá en tu perfil</p>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                      <div className="text-3xl mb-2">🎮</div>
                      <p className="font-amble text-sm text-purple-800 font-bold">Modo Aventura</p>
                      <p className="font-amble text-xs text-purple-600">Tu invitación tendrá un juego secreto oculto</p>
                    </div>
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                      <div className="text-3xl mb-2">🐻</div>
                      <p className="font-amble text-sm text-orange-800 font-bold">Sorpresas Bear</p>
                      <p className="font-amble text-xs text-orange-600">Tus amigos encontrarán secretos de Super Bear Adventure</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl p-4 sm:p-6">
                  <p className="font-milky text-base sm:text-lg text-green-800 mb-2">
                    🚀 ¡Estás listo, Héroe!
                  </p>
                  <p className="font-amble text-sm sm:text-base text-green-700 leading-relaxed">
                    Ahora haz clic en el botón de abajo para ir al <strong>Panel de Configuración</strong> y 
                    <strong> completar tu perfil real</strong>. ¡Que empiece la aventura!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Step Footer - Navigation */}
          <div className="bg-gray-50 border-t-2 border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <Button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="font-amble text-sm sm:text-base px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                ← Anterior
              </Button>

              <div className="flex items-center gap-2 text-sm text-gray-500 font-amble">
                <span>Paso {currentStep + 1} de {totalSteps}</span>
                {currentStep === 4 && (
                  <span className="text-green-600 font-bold">¡Completo! ✅</span>
                )}
              </div>

              {currentStep < totalSteps - 1 ? (
                <Button
                  onClick={handleNext}
                  className="font-amble text-sm sm:text-base px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all shadow-[0_4px_0_#8B4513] hover:shadow-[0_6px_0_#8B4513] active:translate-y-0.5 active:shadow-[0_2px_0_#8B4513]"
                >
                  Siguiente <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleGoToConfig}
                  className="font-milky text-base sm:text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all shadow-[0_6px_0_#2E8B57] hover:shadow-[0_8px_0_#2E8B57] active:translate-y-1 active:shadow-[0_3px_0_#2E8B57]"
                >
                  🎮 ¡Ir al Panel de Configuración! <Gift className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Tip */}
        <div className="text-center mt-6">
          <p className="font-amble text-xs sm:text-sm text-purple-300 italic">
            💡 Tip: Completa tu perfil con todo lo que te gusta para que la fiesta sea ¡INCREÍBLE!
          </p>
        </div>
      </div>
    </div>
  );
}
