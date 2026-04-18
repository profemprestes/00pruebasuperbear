# Detalle de Diseño y Textos: /src/app/01-home/page.tsx

## Diseño del Cuerpo del Componente

El componente utiliza las siguientes clases y estilos:

- `{`flex items-center gap-2 bg-white/90 backdrop-blur-sm border-3 ${colorClass} rounded-xl px-3 py-2 shadow-[3px_3px_0px_#63340b] hover:shadow-[5px_5px_0px_#63340b] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#63340b] transition-all`}`
- `{`w-4 h-4 ${colorClass.includes('golden') ? 'text-golden-coin' : 'text-teddy-brown'}`}`
- `font-amble text-xs sm:text-sm text-teddy-brown font-semibold hidden sm:inline`
- `min-h-screen flex items-center justify-center bg-sky-blue`
- `text-center`
- `animate-spin w-12 h-12 border-4 border-golden-coin border-t-transparent rounded-full mx-auto mb-4`
- `font-milky text-xl text-teddy-brown`
- `min-h-screen overflow-hidden relative`
- `fixed top-0 left-0 w-screen h-screen object-cover z-[-1] motion-safe:animate-in fade-in-0 duration-1000 brightness-[.85] saturato-[1.2]`
- `fixed top-4 left-4 z-50 flex gap-2`
- `{cn(
      "absolute inset-0 z-10",
      !NO_NAVIGATION_SCREENS.includes(currentScreen) && "motion-safe:animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out"
    )}`

## Textos del Componente

A continuación se detallan los textos optimizados para el componente:

- **<span>**: {label} -> ("Volver" o "Reiniciar partida")
- **<p>**: Sincronizando mundos... Cargando Nivel 9 de Facu.
- **<div>**: {/_ Video de fondo - optimized with preload hints _/} {/_ ─── NAVIGATION CONTROLS (top-left) ─────────────────── _/} {/_ ─── SCREEN CONTENT ─────────────────────────────────── _/}
- **<AnimatePresence>**: {showNavControls && !NO*NAVIGATION_SCREENS.includes(currentScreen) && ( <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="fixed top-4 left-4 z-50 flex gap-2" > {/* Back button - memoized component _/} <NavButton onClick={goBack} icon={ArrowLeft} label="Volver" colorClass="border-teddy-brown" ariaLabel="Retroceder a la zona anterior" /> {/_ Restart button - memoized component \_/} <NavButton onClick={handleRestart} icon={RotateCcw} label="Reiniciar partida" colorClass="border-golden-coin" ariaLabel="Empezar la aventura de Facu desde cero" /> </motion.div> )}
- **<motion.div>**: {/_ Back button - memoized component _/} {/_ Restart button - memoized component _/}
- **<div>**: {renderScreen()}
