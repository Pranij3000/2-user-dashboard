import Link from "next/link";
export default function Home() {
  return (
    <section className="user-dashboard w-screen h-screen flex items-center justify-center">
      <Link
        href="/users"
        className="text-[32px]"
      >
        Go to Dashboard
      </Link>
    </section>
  );
}
