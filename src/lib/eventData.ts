export interface MissionDetails {
  festejado: string;
  lugar: string;
  direccion: string;
  fecha: string;
  horario: string;
  contacto: {
    email: string;
    instagram: string;
  };
  nota: string;
}

export const missionData: MissionDetails = {
  festejado: "Facu",
  lugar: "KBOOM",
  direccion: "Av. Italia 3421",
  fecha: "Domingo 24 de mayo",
  horario: "18:30 a 21:00 hs",
  contacto: {
    email: "eventos@kboom.uy",
    instagram: "@kboom.uy",
  },
  nota: "Llevar medias y ropa cómoda para la pista de patín, escaladas, ninja warrior y crazy carts.",
};
