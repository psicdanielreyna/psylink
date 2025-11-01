import { CheckCircle2 } from "lucide-react";

const items = [
  { t: "Tus datos son tuyos", d: "Nunca vendemos tu información." },
  { t: "Protección y cifrado", d: "Buenas prácticas de seguridad por defecto." },
  { t: "Control total", d: "Tú decides qué compartes y con quién." },
];

export default function TrustStrip() {
  return (
    <section className="rounded-2xl border bg-muted/30 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.t} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">{it.t}</p>
              <p className="text-sm text-muted-foreground">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}