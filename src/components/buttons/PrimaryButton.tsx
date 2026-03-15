import Link from "next/link";

export default function PrimaryButton({ text, to }: { text: string; to: string }) {
  return (
    <Link
      href={to}
      className="cursor-pointer bg-red-950 text-white px-3 py-1 rounded-2xl hover:bg-red-700 transition-all ease-in-out duration-300"
    >
      {text}
    </Link>
  );
}
