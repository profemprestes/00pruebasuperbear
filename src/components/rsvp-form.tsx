"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  playerName: z.string().min(2, { message: "¡El nombre debe tener al menos 2 caracteres!" }),
  confirm: z.boolean().refine(val => val === true, { message: "¡Debes confirmar para completar la misión!" }),
});

type RsvpFormProps = {
  onRsvpSubmit: () => void;
};

export function RsvpForm({ onRsvpSubmit }: RsvpFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playerName: "",
      confirm: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Misión Confirmada:", values);
    onRsvpSubmit();
  }
  
  function onError(errors: any) {
    const firstError = Object.values(errors)[0];
    if (firstError && typeof firstError === 'object' && 'message' in firstError) {
        toast({
            title: "Error en la Misión",
            description: firstError.message as string,
            variant: "destructive",
        })
    }
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in-0">
      <Card className="bg-card/80 backdrop-blur-sm border-4 border-foreground shadow-3d w-full max-w-md m-4 animate-in zoom-in-95">
        <CardHeader>
          <CardTitle className="font-headline text-4xl text-foreground text-center">¡Portal de Confirmación!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
              <FormField
                control={form.control}
                name="playerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-headline text-xl text-foreground">Nombre del Jugador</FormLabel>
                    <FormControl>
                      <Input placeholder="Escribe tu nombre aquí..." {...field} className="border-2 border-foreground bg-white text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm border-foreground/50 bg-white">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-body font-bold text-foreground">¡Confirmo mi asistencia a la misión!</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-headline text-2xl h-auto py-3 border-4 border-foreground shadow-3d hover:shadow-[6px_6px_0px_hsl(var(--foreground))] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                Confirmar Misión
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
