export default function Hero() {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl font-bold">Explore the World with Us</h1>
        <p className="mt-2 text-lg">Book unforgettable tours, hotels, and experiences.</p>
      </div>
    </section>
  );
}
