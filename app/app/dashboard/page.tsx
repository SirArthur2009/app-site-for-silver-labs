export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl space-y-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Cloud Peak Silver Labradors
          </h1>
          <p className="text-gray-600 mt-2">
            Client Portal
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            Your Puppy Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500">Waitlist Position</p>
              <p className="text-xl font-semibold">#3</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500">Status</p>
              <p className="text-xl font-semibold">Deposit Received</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-gray-500">Litter</p>
              <p className="text-xl font-semibold">Stella x Landry</p>
            </div>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            Choose Your Puppy
          </button>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Process Progress</h3>

          <div className="flex justify-between text-xs text-gray-600">
            <span>Apply</span>
            <span>Deposit</span>
            <span>Waitlist</span>
            <span>Pick Puppy</span>
            <span>Pickup</span>
          </div>

          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-2/5 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-3">Puppy Updates</h3>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Week 4 photos uploaded</li>
            <li>• Puppies beginning social play</li>
            <li>• New litter video added</li>
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl">
            Contact
          </button>
          <button className="flex-1 bg-white border py-3 rounded-xl">
            Documents
          </button>
        </div>

      </div>
    </main>
  );
}
