export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">PsyLink</h1>
      <p className="mt-2 text-gray-600">
        Encuentra el terapeuta correcto desde el primer intento.
      </p>
      <div className="mt-6">
        <a href="/buscar" className="underline">Buscar terapeuta</a>{" "}
        · <a href="/terapeuta/nuevo" className="underline">Registrar perfil</a>
      </div>
    </main>
  );
}
