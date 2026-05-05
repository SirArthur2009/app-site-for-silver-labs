"use client";

import Image from "next/image";

type PuppyStatus = "Available" | "Reserved";

type Puppy = {
  id: number;
  name: string;
  status: PuppyStatus;
  img: string;
};

const user = {
  id: 1,
  name: "Levi Garrett",
  waitlistPosition: 3,
};

const currentSelectionPosition = 3;

const puppies: Puppy[] = [
  {
    id: 1,
    name: "Silver Male",
    status: "Available",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
  },
  {
    id: 2,
    name: "Charcoal Female",
    status: "Reserved",
    img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
  },
  {
    id: 3,
    name: "Silver Female",
    status: "Available",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
  },
];

export default function Puppies() {
  const isUsersTurn = user.waitlistPosition === currentSelectionPosition;

  function handleReserve(puppyId: number) {
    const puppy = puppies.find((currentPuppy) => currentPuppy.id === puppyId);

    if (!isUsersTurn) {
      alert(
        `It is not your turn yet. Current position: #${currentSelectionPosition}`
      );
      return;
    }

    if (!puppy || puppy.status !== "Available") {
      alert("This puppy is not available for reservation.");
      return;
    }

    alert(`Success! You reserved ${puppy.name}.`);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Available Puppies</h1>
        <p className="mt-1 text-gray-600">
          View current availability and reserve your puppy.
        </p>

        {!isUsersTurn && (
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
            It is not your turn yet. Current position: #
            {currentSelectionPosition}
          </div>
        )}

        <section className="mt-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <p className="text-gray-500">Your Waitlist Position</p>
              <p className="mt-1 text-xl font-semibold">
                #{user.waitlistPosition}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Current Selection Position</p>
              <p className="mt-1 text-xl font-semibold">
                #{currentSelectionPosition}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {puppies.map((puppy) => {
            const isAvailable = puppy.status === "Available";
            const canReserve = isAvailable && isUsersTurn;
            const buttonText = !isAvailable
              ? "Not Available"
              : isUsersTurn
              ? "Reserve Puppy"
              : "Not Your Turn Yet";

            return (
              <div
                key={puppy.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition hover:shadow-lg"
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={puppy.img}
                    alt={puppy.name}
                    width={640}
                    height={384}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-semibold">{puppy.name}</h2>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        isAvailable
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {puppy.status}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleReserve(puppy.id)}
                    className={`mt-4 w-full rounded-lg px-4 py-2 font-medium transition ${
                      canReserve
                        ? "bg-black text-white hover:bg-gray-800"
                        : "cursor-not-allowed bg-gray-200 text-gray-500"
                    }`}
                    disabled={!canReserve}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
