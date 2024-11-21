export default function Home() {
  return (
    <div className="h-screen flex font-quicksand">
      {/* Metade branca */}
      <div className="w-1/2 bg-white flex items-center justify-end">
        <h1 className="text-black text-9xl font-semibold">minim</h1>
      </div>
      {/* Metade preta */}
      <div className="w-1/2 bg-black flex items-center justify-start">
        <h1 className="text-white text-9xl font-semibold">alismo</h1>
      </div>
    </div>
  );
}
