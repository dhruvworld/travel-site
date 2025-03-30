export default function TourCard({ tour }: { tour: { title: string; description: string; image: string } }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
      <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{tour.title}</h2>
        <p className="text-gray-600 mt-2">{tour.description}</p>
      </div>
    </div>
  );
}
