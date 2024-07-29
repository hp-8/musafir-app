import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";
import LogoImg from "@/public/musafir-logo.svg";
import UserIconImg from "@/public/user.svg";
import MenuIconImg from "@/public/menu.svg";

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={LogoImg} alt="logo" width={78} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer 
              pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon={UserIconImg}
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={MenuIconImg}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
