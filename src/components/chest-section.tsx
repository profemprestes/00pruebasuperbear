"use client";

import { useState } from "react";
import { MissionSection } from "./mission-section";
import { Button } from "./ui/button";
import { useIsDesktop } from "@/hooks/use-media-query";
import Image from "next/image";

type ChestSectionProps = {
  onNext: () => void;
  photo1?: string | null;
  photo2?: string | null;
};

export function ChestSection({ onNext, photo1, photo2 }: ChestSectionProps) {
  const isDesktop = useIsDesktop();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MissionSection stepId="chest" bgImage="/ciudad.webp">
      <div
        className={`rounded-2xl p-4 sm:p-6 lg:p-8 text-center ${
          isDesktop ? "max-w-3xl mx-auto" : "w-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)",
          border: "6px solid #FFD700",
          boxShadow: "0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b",
        }}
      >
        <h2 className="font-milky text-xl sm:text-2xl lg:text-3xl text-teddy-brown mb-3 sm:mb-4">
          📦 Cofre de Recuerdos
        </h2>
        <p className="font-amble text-xs sm:text-sm text-voxel-text mb-4 sm:mb-6">
          ¡Abre el cofre para descubrir los recuerdos de Facu!
        </p>

        {/* Chest */}
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir el cofre de recuerdos"
            className="mx-auto flex flex-col items-center gap-4 transition-transform active:scale-95 hover:scale-105"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl flex items-center justify-center text-6xl sm:text-7xl"
              style={{
                background: "linear-gradient(135deg, #8B4513, #A0522D)",
                border: "4px solid #63340b",
                boxShadow: "0 8px 0 #4a280a, inset 0 2px 4px rgba(255,255,255,0.2)",
              }}
            >
              🎁
            </div>
            <span className="font-milky text-lg text-teddy-brown">
              ¡Toca para abrir!
            </span>
          </button>
        ) : (
          <div className="space-y-4">
            {/* Memory carousel */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory pb-4">
              {photo1 && (
                <div
                  className="flex-shrink-0 w-[calc(100vw-4rem)] sm:w-64 h-56 sm:h-64 rounded-xl overflow-hidden snap-center"
                  style={{ border: "4px solid #8B4513" }}
                >
                  <Image
                    src={photo1}
                    alt="Recuerdo 1"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {photo2 && (
                <div
                  className="flex-shrink-0 w-[calc(100vw-4rem)] sm:w-64 h-56 sm:h-64 rounded-xl overflow-hidden snap-center"
                  style={{ border: "4px solid #8B4513" }}
                >
                  <Image
                    src={photo2}
                    alt="Recuerdo 2"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {!photo1 && !photo2 && (
                <div className="flex-shrink-0 w-64 h-64 rounded-xl flex items-center justify-center bg-sky-light">
                  <span className="text-6xl">📸</span>
                </div>
              )}
            </div>

            <p className="font-amble text-sm text-voxel-text">
              ¡Desliza para ver más recuerdos!
            </p>
          </div>
        )}

        {/* CTA Button */}
        <Button
          onClick={onNext}
          className="w-full mt-6 font-milky text-lg sm:text-xl h-auto py-3 px-6 text-white transition-all duration-150"
          style={{
            background: "linear-gradient(180deg, #FFD700 0%, #FFA500 100%)",
            border: "3px solid #8B4513",
            boxShadow: "0 6px 0 #63340b",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(3px)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
        >
          Continuar al RSVP ✉️ →
        </Button>
      </div>
    </MissionSection>
  );
}
