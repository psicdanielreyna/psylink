type Props = { params: { id: string } };
export default function Perfil({ params }: Props) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="text-2xl font-medium">Perfil terapeuta</h2>
      <p className="mt-2 text-gray-600">ID: {params.id}</p>
      <p className="mt-3">Aquí mostraremos nombre, enfoques, especialidades y contacto.</p>
    </main>
  );
}
