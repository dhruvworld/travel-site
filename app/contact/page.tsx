export default function ContactPage() {
  return (
    <section className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded h-32" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
}
