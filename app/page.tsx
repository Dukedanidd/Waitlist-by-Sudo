import BackgroundEden from "@/components/BackgroundEden";
import FormCard from "@/components/FormCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen grid place-items-center p-3 sm:p-6">
        <BackgroundEden />
        <FormCard />
      </main>
    </>
  );
}
