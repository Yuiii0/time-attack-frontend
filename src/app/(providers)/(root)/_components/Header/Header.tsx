import Link from "next/link";
import HeaderMenus from "./_components/HeaderMenus/HeaderMenus";

function Header() {
  return (
    <header className="flex h-16  bg-white sticky top-0 border-gray-200 border-b items-center p-8 gap-8  z-50">
      <Link href="/">
        <strong className="text-xl">발랑</strong>
      </Link>
      <Link href="/brands" className="text-sm font-medium">
        BRANDS
      </Link>
      <HeaderMenus />
    </header>
  );
}

export default Header;
