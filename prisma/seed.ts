// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function main() {
  const approaches = [
    { slug: "tcc", label: "Terapia Cognitivo-Conductual" },
    { slug: "psicoanalisis", label: "Psicoanálisis" },
    { slug: "humanista", label: "Humanista" },
    { slug: "sistemica", label: "Sistémica" },
    { slug: "gestalt", label: "Gestalt" },
    { slug: "constructivista", label: "Constructivista" },
  ];

  const specialties = [
    { slug: "ansiedad", label: "Ansiedad" },
    { slug: "depresion", label: "Depresión" },
    { slug: "duelo", label: "Duelo" },
    { slug: "pareja", label: "Pareja" },
    { slug: "infanto-juvenil", label: "Infanto-Juvenil" },
    { slug: "tlp", label: "Trastorno Límite de la Personalidad" },
    { slug: "toc", label: "Trastorno Obsesivo-Compulsivo" },
    { slug: "trauma", label: "Trauma" },
    { slug: "adicciones", label: "Adicciones" },
    { slug: "sexualidad", label: "Sexualidad" },
  ];

  // SQLite no soporta skipDuplicates en createMany → usamos upsert por elemento
  for (const a of approaches) {
    await db.approach.upsert({
      where: { slug: a.slug },
      update: { label: a.label },
      create: a,
    });
  }

  for (const s of specialties) {
    await db.specialty.upsert({
      where: { slug: s.slug },
      update: { label: s.label },
      create: s,
    });
  }
}

main()
  .then(async () => {
    await db.$disconnect();
    console.log("✔ Seed OK");
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });