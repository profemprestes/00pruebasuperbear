import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DialogBoxProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function DialogBox({ icon, title, children, className }: DialogBoxProps) {
  return (
    <Card className={cn("bg-card/80 backdrop-blur-sm border-4 border-foreground shadow-3d w-full max-w-sm", className)}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="text-foreground animate-bounce [animation-duration:2s]">{icon}</div>
          <CardTitle className="font-headline text-3xl text-foreground">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-foreground font-body text-lg space-y-2">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
