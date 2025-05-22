export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl text-fuchsia-600">Home Page</h1>
      <button className="border-5 px-10 py-5 bg-amber-500 text-white hover:bg-amber-900 border-red-500 hover:border-blue-500">
        Click me
      </button>
      <div className="w-full bg-green-300 mb-5 lg:hidden">Under 1024px</div>
      <div className="w-full bg-blue-300 mb-5 lg:block hidden">Over 1024px</div>
      <div className="w-full bg-red-300 mb-5 faiz:hidden ulala">
        Under 320px
      </div>
      <button style={{ backgroundColor: "yellow" }}>Helloow</button>
    </main>
  );
}
