import Header from "./../../components/sections/Header";
import Aside from "@/src/components/sections/Aside";

const Links = [
  {
    href: "/",
    title: "Homepage",
  },
  {
    href: "/users",
    title: "User Page",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-6">
          <div className="hidden lg:block col-span-1">
            <Aside />
          </div>
          <div className="col-span-6 lg:col-span-5">{children}</div>
        </div>
      </main>
    </>
  );
}
