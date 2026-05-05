export default function Puppies() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">🐶 Available Puppies</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="font-semibold">Silver Male</p>
          <p className="text-sm text-gray-600">Available</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="font-semibold">Charcoal Female</p>
          <p className="text-sm text-gray-600">Reserved</p>
        </div>
      </div>
    </main>
  );
}