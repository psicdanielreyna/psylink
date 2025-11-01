"use client";

import { ShieldCheck, Lock, SlidersHorizontal } from "lucide-react";

type Item = { title: string; desc: string; icon: React.ElementType };

const ITEMS: Item[] = [
  {
    title: "Tus datos son tuyos",
    desc: "Nunca vendemos tu información.",
    icon: ShieldCheck,
  },
  {
    title: "Protección y cifrado",
    desc: "Buenas prácticas de seguridad por defecto.",
    icon: Lock,
  },
  {
    title: "Control total",
    desc: "Tú decides qué compartes y con quién.",
    icon: SlidersHorizontal,
  },
];

export default function TrustStrip() {
  return (
    <section className="rounded-3xl border bg-muted/40 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-3">
        {ITEMS.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="mt-1 rounded-full border bg-background p-2">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold leading-none">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* mini fila de enlaces de confianza (opcional) */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <a href="/privacidad" className="underline-offset-4 hover:underline">Política de privacidad</a>
        <span className="hidden sm:inline">•</span>
        <a href="/terminos" className="underline-offset-4 hover:underline">Términos y condiciones</a>
        <span className="hidden sm:inline">•</span>
        <a href="/seguridad" className="underline-offset-4 hover:underline">Prácticas de seguridad</a>
      </div>
    </section>
  );
}