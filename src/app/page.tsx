import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <div className="bg-gradient-to-r from-cyan-100 via-cyan-50 to-transparent mt-0 p-4 h-[500px] md:h-[700px]">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
    </main>
  );
}
