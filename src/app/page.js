import Timer from "@/components/timer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="">
        <Timer duration={60}></Timer>
        <Timer duration={30}></Timer>
      </div>
      <div></div>
    </main>
  );
}
