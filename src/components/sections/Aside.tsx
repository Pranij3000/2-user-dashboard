import Link from "next/link";
import { Links } from "../data/Links";

export default function Aside() {
  return (
    <>
      <aside className="p-2 h-full">
        <div className="aside-wrapper bg-white p-5 rounded-[32px] h-full">
          <strong className="text-[24px]">Links</strong>
          <ul className="mt-7">
            {Links.map((item, index) => (
              <li
                key={index}
                className="mb-2 pb-2 border-b border-gray-600"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
