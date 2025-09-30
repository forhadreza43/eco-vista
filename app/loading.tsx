import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      <Image
        src="/network.gif"
        alt="Loading..."
        height={500}
        width={500}
        className="border rounded-md my-4"
        unoptimized
      />
      <p className="text-4xl text-center">Detecting Location...</p>
    </div>
  );
}
