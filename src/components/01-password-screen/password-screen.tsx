'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

type PasswordScreenProps = {
  onCorrectPassword: () => void;
};

const CORRECT_PASSWORD = "2026";

export function PasswordScreen({ onCorrectPassword }: PasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setError(false);
      onCorrectPassword();
    } else {
      setError(true);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-sm text-center motion-safe:animate-in fade-in-0 slide-in-from-bottom-4 duration-500 ease-out">
        <Shield className="mx-auto h-16 w-16 text-golden-coin mb-6" />
        <h1 className="font-milky text-3xl sm:text-4xl mb-4 text-white">Acceso Privado</h1>
        <p className="font-body text-sm sm:text-base mb-8 text-gray-300">
          Esta es una invitación privada. Por favor, ingresa la contraseña.
        </p>
        <div className="flex flex-col gap-4">
          <Input
            type="password"
            placeholder="Contraseña" aria-label="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            onKeyPress={handleKeyPress}
            className={`border-4 h-14 text-base sm:text-lg text-center font-milky rounded-lg bg-gray-800 text-white placeholder-gray-500 ${error ? 'border-red-500' : 'border-teddy-brown'
              }`}
          />
          <Button
            onClick={handleSubmit}
            className="bg-golden-coin text-teddy-brown font-milky text-xl sm:text-2xl h-14 px-6 border-2 border-amber-600 shadow-[0_6px_0_#b8860b] hover:shadow-[0_8px_0_#b8860b] hover:-translate-y-0.5 hover:bg-amber-400 active:translate-y-1 active:shadow-[0_0_0_transparent] transition-all"
          >
            Entrar
          </Button>
          {error && (
            <p className="text-red-500 font-bold mt-2 motion-safe:animate-in fade-in-0">Contraseña incorrecta. Intenta de nuevo.</p>
          )}
        </div>
      </div>
    </div>
  );
}
