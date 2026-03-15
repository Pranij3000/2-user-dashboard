import Link from "next/link";
export default function Error() {
  return (
    <p className="font-outfit text-[24px]">
      Something went wrong. <Link href="/">Go to Dashboard</Link>
    </p>
  );
}
