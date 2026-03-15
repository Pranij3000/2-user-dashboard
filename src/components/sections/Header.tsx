import Image from "next/image";
export default function Header() {
  return (
    <header className="py-3 border-b-2 border-main-grey">
      <div className="container mx-auto px-5">
        <div className="header-wrapper flex items-center gap-10">
          <Image
            src="/images/menu-icon.svg"
            alt=""
            width={32}
            height={32}
          />
          <span className="text-[20px] text-primary">Dashboard</span>
        </div>
      </div>
    </header>
  );
}
