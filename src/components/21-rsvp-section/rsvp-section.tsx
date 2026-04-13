"use client";

import { motion } from "framer-motion";
import { MissionSection } from "@/components/18-mission-section";
import { useIsDesktop } from "@/hooks/use-media-query";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { useState } from "react";

type RSVPSectionProps = {
  onNext: () => void;
  onComplete?: () => void;
};

export function RSVPSection({ onNext, onComplete }: RSVPSectionProps) {
  const isDesktop = useIsDesktop();
  const [confirmed, setConfirmed] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const handleConfirm = () => {
    setConfirmed(true);
    onComplete?.();
    setTimeout(() => onNext(), 800);
  };

  return (
    <MissionSection stepId="rsvp" bgImage="/mundos/bear_village/Spawnpoint.webp">
      <div
        className={`rounded-2xl p-6 sm:p-8 text-center ${
          isDesktop ? "max-w-3xl mx-auto" : "w-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #fffde7 0%, #fff8e1 100%)",
          border: "6px solid #FFD700",
          boxShadow: "0 10px 30px rgba(255,215,0,0.3), 6px 6px 0 #b8860b",
        }}
      >
        <h2 className="font-milky text-2xl sm:text-3xl text-teddy-brown mb-2">
          ✉️ RSVP - Confirmar Asistencia
        </h2>
        <p className="font-amble text-sm text-voxel-text mb-6">
          ¡Confirmá tu presencia en la misión para ganar 50 monedas!
        </p>

        {/* RSVP Form */}
        {!confirmed ? (
          <div className="space-y-4 text-left">
            {/* Name input */}
            <div>
              <label className="font-amble font-bold text-xs text-teddy-brown uppercase tracking-wider block mb-1">
                Tu Nombre
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Nombre del jugador..."
                className="w-full px-4 py-3 rounded-xl font-calibri text-base"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "2px solid #87CEEB",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </div>

            {/* Guest count */}
            <div>
              <label className="font-amble font-bold text-xs text-teddy-brown uppercase tracking-wider block mb-1">
                Cantidad de Invitados
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  aria-label="Reducir cantidad de invitados"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white active:translate-y-1 active:shadow-[0_0_0_transparent]"
                  style={{
                    background: "#FFD700",
                    border: "2px solid #8B4513",
                    boxShadow: "0 3px 0 #63340b",
                  }}
                >
                  −
                </button>
                <span
                  className="flex-1 text-center py-3 rounded-xl font-arcade text-2xl text-teddy-brown"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "2px solid #FFD700",
                  }}
                >
                  {guestCount}
                </span>
                <button
                  onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                  aria-label="Aumentar cantidad de invitados"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white active:translate-y-1 active:shadow-[0_0_0_transparent]"
                  style={{
                    background: "#FFD700",
                    border: "2px solid #8B4513",
                    boxShadow: "0 3px 0 #63340b",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px"
              style={{ background: "linear-gradient(90deg, transparent, #FFD700, transparent)" }}
            />

            {/* Contact info */}
            <div className="space-y-2">
              <p className="font-amble font-bold text-xs text-teddy-brown uppercase tracking-wider">
                Contacto del Evento
              </p>

              <div className="flex items-center gap-2 text-sm text-voxel-text">
                <Mail className="w-4 h-4 text-sky-blue flex-shrink-0" />
                <span className="font-calibri">eventos@kboom.uy</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-voxel-text">
                <Instagram className="w-4 h-4 text-pink-500 flex-shrink-0" />
                <span className="font-calibri">@kboom.uy</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-voxel-text">
                <MapPin className="w-4 h-4 text-grass-green flex-shrink-0" />
                <span className="font-calibri">Av. Italia 3421, KBOOM</span>
              </div>
            </div>

            {/* Confirm button */}
            <div className="pb-[max(2rem,var(--safe-bottom))]">
              <button
                onClick={handleConfirm}
                aria-label="Confirmar asistencia al evento"
                className="w-full font-milky text-base sm:text-lg h-auto py-3 sm:py-4 px-4 sm:px-6 text-white transition-all duration-150 active:translate-y-1 active:shadow-[0_0_0_transparent] whitespace-normal leading-tight"
                style={{
                  background: "linear-gradient(180deg, #7CFC00 0%, #5DBB00 100%)",
                  border: "3px solid #2E8B57",
                  boxShadow: "0 6px 0 #2E8B57",
                }}



              >
                <span className="text-sm sm:text-base">✓ ¡Confirmar Asistencia!</span>
              </button>
            </div>
          </div>
        ) : (
          /* Confirmed state */
          <div
            className="py-8 rounded-xl"
            style={{
              background: "rgba(124,252,0,0.15)",
              border: "3px solid #7CFC00",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <p className="font-milky text-xl text-teddy-brown">
              ¡Asistencia Confirmada!
            </p>
            {guestName && (
              <p className="font-calibri text-sm text-voxel-text mt-2">
                Jugador: {guestName} ({guestCount} {guestCount === 1 ? "invitado" : "invitados"})
              </p>
            )}
            <p className="font-arcade text-golden-coin text-sm mt-3">
              🪙 +50 monedas ganadas
            </p>
          </div>
        )}
      </div>
    </MissionSection>
  );
}
