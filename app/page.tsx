import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold">Featured Tours</h2>
        <p className="mt-2 text-gray-600">Coming soon...</p>
      </section>
    </div>
  );
}
