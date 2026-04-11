"use client";

import { MissionSection } from "./mission-section";
import { Button } from "./ui/button";
import { useRewards } from "@/hooks/use-rewards";
import { MapPin, Calendar, Clock } from "lucide-react";
import { missionData } from "@/lib/eventData";
import { useIsDesktop } from "@/hooks/use-media-query";

type MapSectionProps = {
  onNext: () => void;
};

export function MapSection({ onNext }: MapSectionProps) {
  const { goToStep, currentStepIndex } = useRewards();
  const isDesktop = useIsDesktop();

  return (
    <MissionSection stepId="map" bgImage="/ciudad.webp">
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
        <h2 className="font-milky text-2xl sm:text-3xl text-teddy-brown mb-6">
          🗺️ Coordenadas de la Misión
        </h2>

        {/* Map placeholder with event info */}
        <div className="space-y-4">
          {/* Location card */}
          <div
            className="flex items-start gap-4 p-4 rounded-xl text-left"
            style={{
              background: "rgba(135,206,235,0.2)",
              border: "2px solid #87CEEB",
            }}
          >
            <MapPin className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
            <div>
              <p className="font-amble font-bold text-teddy-brown text-sm uppercase tracking-wider">
                Lugar
              </p>
              <p className="font-calibri text-base text-voxel-text">
                {missionData.lugar}
              </p>
              <p className="font-calibri text-sm text-gray-600">
                {missionData.direccion}
              </p>
            </div>
          </div>

          {/* Date card */}
          <div
            className="flex items-start gap-4 p-4 rounded-xl text-left"
            style={{
              background: "rgba(124,252,0,0.15)",
              border: "2px solid #7CFC00",
            }}
          >
            <Calendar className="w-6 h-6 text-grass-green flex-shrink-0 mt-1" />
            <div>
              <p className="font-amble font-bold text-teddy-brown text-sm uppercase tracking-wider">
                Fecha
              </p>
              <p className="font-calibri text-base text-voxel-text">
                {missionData.fecha}
              </p>
            </div>
          </div>

          {/* Time card */}
          <div
            className="flex items-start gap-4 p-4 rounded-xl text-left"
            style={{
              background: "rgba(255,215,0,0.15)",
              border: "2px solid #FFD700",
            }}
          >
            <Clock className="w-6 h-6 text-golden-coin flex-shrink-0 mt-1" />
            <div>
              <p className="font-amble font-bold text-teddy-brown text-sm uppercase tracking-wider">
                Horario
              </p>
              <p className="font-calibri text-base text-voxel-text">
                {missionData.horario}
              </p>
            </div>
          </div>

          {/* Equipment note */}
          <div
            className="p-4 rounded-xl text-left"
            style={{
              background: "rgba(255,165,0,0.15)",
              border: "2px dashed #FFA500",
            }}
          >
            <p className="font-amble font-bold text-teddy-brown text-sm uppercase tracking-wider mb-1">
              🎒 Equipamiento Requerido
            </p>
            <p className="font-calibri text-sm text-voxel-text">
              {missionData.nota}
            </p>
          </div>
        </div>

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
          Continuar al Cofre 📦 →
        </Button>
      </div>
    </MissionSection>
  );
}
