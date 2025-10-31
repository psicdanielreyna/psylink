import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const form = await req.formData();
  const fullName = String(form.get("fullName") || "");
  const email = String(form.get("email") || "");
  const licenseNumber = String(form.get("licenseNumber") || "");
  const modality = String(form.get("modality") || "ONLINE");

  if (!fullName || !email || !licenseNumber) {
    return NextResponse.json({ ok: false, error: "Faltan campos" }, { status: 400 });
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, name: fullName },
  });

  const t = await prisma.therapist.create({
    data: {
      userId: user.id,
      fullName,
      licenseNumber,
      modality: modality as any,
      languages: "es",
    },
  });

  return NextResponse.json({ ok: true, therapistId: t.id, view: `/terapeuta/${t.id}` });
}
