"use client";
import { useState } from "react";

export default function BuscarPage() {
  const [q, setQ] = useState("");

  const onSearch = () => {
    const url = new URL("/api/search", window.location.origin);
    if (q) url.searchParams.set("q", q);
    window.location.href = url.toString();
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="text-2xl font-medium">Buscar terapeuta</h2>
      <div className="mt-4 flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ansiedad, TCC, Monterrey..."
          className="w-full border rounded px-3 py-2"
        />
        <button onClick={onSearch} className="border rounded px-4">Buscar</button>
      </div>
      <p className="mt-3 text-sm text-gray-500">* MVP: luego mostramos tarjetas ordenadas por match_score.</p>
    </main>
  );
}
