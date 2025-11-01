import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-14 space-y-12">
      {/* HERO estilo Tinder */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Desliza hacia tu <span className="text-primary">terapeuta ideal</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Encuentra match con el profesional correcto desde el primer intento.
          Filtros por especialidad, modalidad, horarios y más.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/buscar" className="inline-flex items-center rounded-full px-6 py-3 bg-primary text-primary-foreground font-medium">
            Buscar terapeuta
          </Link>
          <Link href="/terapeuta/nuevo" className="inline-flex items-center rounded-full px-6 py-3 border font-medium">
            Registrar perfil
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full border px-2 py-1">Monterrey</span>
          <span className="rounded-full border px-2 py-1">En línea</span>
          <span className="rounded-full border px-2 py-1">Ansiedad</span>
        </div>
      </section>

      {/* Confianza tipo Doctoralia */}
      <TrustStrip />

      {/* CTA profesional */}
      <section className="rounded-2xl border p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold">¿Eres profesional de la salud mental?</h3>
        <p className="text-muted-foreground">Conecta con pacientes, gestiona tu presencia y recibe contactos cualificados.</p>
        </div>
        <Link href="/terapeuta/nuevo" className="inline-flex items-center rounded-full px-6 py-3 bg-primary text-primary-foreground font-medium">
          Crear mi perfil
        </Link>
      </section>
    </main>
  );
}