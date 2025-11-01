import TherapistCard, { TherapistSummary } from "@/components/TherapistCard";
import { prisma } from "@/lib/prisma";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getTherapists(q?: string, modality?: string) {
  const where: any = { isActive: true };
  if (q) {
    where.OR = [
      { fullName: { contains: q, mode: "insensitive" } },
      { city: { contains: q, mode: "insensitive" } },
      { specialties: { some: { label: { contains: q, mode: "insensitive" } } } },
    ];
  }
  if (modality && modality !== "ALL") where.modality = modality;
  const rows = await prisma.therapist.findMany({
    where,
    include: { specialties: { select: { label: true } } },
    orderBy: { createdAt: "desc" },
    take: 24,
  });
  return rows as unknown as TherapistSummary[];
}

export default async function Buscar({ searchParams }: { searchParams: { q?: string; m?: string } }) {
  const q = searchParams?.q ?? "";
  const m = searchParams?.m ?? "ALL";
  const therapists = await getTherapists(q, m);

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <form className="flex-1 flex gap-2" action="/buscar">
          <Input name="q" defaultValue={q} placeholder="Busca por nombre, ciudad o especialidad…" />
          <Select name="m" defaultValue={m}>
            <SelectTrigger className="w-40"><SelectValue placeholder="Modalidad" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todas</SelectItem>
              <SelectItem value="ONLINE">En línea</SelectItem>
              <SelectItem value="IN_PERSON">Presencial</SelectItem>
              <SelectItem value="HYBRID">Híbrida</SelectItem>
            </SelectContent>
          </Select>
          <button className="rounded-md px-4 py-2 bg-primary text-primary-foreground font-medium">Buscar</button>
        </form>
        <Link href="/terapeuta/nuevo" className="text-sm underline">¿Eres terapeuta? Regístrate</Link>
      </div>

      {therapists.length === 0 ? (
        <p className="text-muted-foreground">No encontramos resultados. Prueba con “ansiedad”, “Monterrey” o “en línea”.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map(t => <TherapistCard key={t.id} t={t} />)}
        </div>
      )}
    </main>
  );
}