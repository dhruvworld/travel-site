import TourCard from '../../components/TourCard';

const tours = [
  {
    id: 1,
    title: "Himalayan Adventure",
    description: "Explore the majestic Himalayas with guided treks and cozy stays.",
    image: "/tours/himalayas.jpg",
  },
  {
    id: 2,
    title: "Beach Bliss in Goa",
    description: "Relax on pristine beaches and enjoy the vibrant nightlife of Goa.",
    image: "/tours/goa.jpg",
  },
  {
    id: 3,
    title: "Royal Rajasthan",
    description: "Experience the grandeur of forts, palaces, and desert safaris.",
    image: "/tours/rajasthan.jpg",
  }
];

export default function ToursPage() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore Our Tours</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
