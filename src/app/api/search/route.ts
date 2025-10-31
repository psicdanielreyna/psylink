import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  // TODO: usar prisma para buscar por q + filtros y ordenar por match_score
  return NextResponse.json({ query: q, results: [], note: "MVP vacío" });
}
