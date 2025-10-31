export default function NuevoTerapeuta() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h2 className="text-2xl font-medium">Registrar perfil</h2>
      <form method="post" action="/api/therapists" className="mt-6 space-y-3">
        <input name="fullName" placeholder="Nombre completo" className="w-full border rounded px-3 py-2" />
        <input name="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input name="licenseNumber" placeholder="Cédula" className="w-full border rounded px-3 py-2" />
        <select name="modality" className="w-full border rounded px-3 py-2">
          <option value="ONLINE">En línea</option>
          <option value="IN_PERSON">Presencial</option>
          <option value="HYBRID">Híbrido</option>
        </select>
        <button className="border rounded px-4 py-2">Enviar</button>
      </form>
      <p className="mt-3 text-sm text-gray-500">* Luego pasamos a server actions + validación con zod.</p>
    </main>
  );
}
