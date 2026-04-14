import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gran Facu Aventura - Misión',
  description: '¡Únete a la aventura épica de Facu!',
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
