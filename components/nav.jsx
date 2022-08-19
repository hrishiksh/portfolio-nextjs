import Link from "next/link";
import { useRouter } from "next/router";
import PrimaryBtn from "./PrimaryBtn";

const Nav = ({ width }) => {
  return (
    <header className={`flex items-center justify-between ${width}`}>
      <Link href="/">
        <img className="h-20" src="/images/logo.svg" alt="" />
      </Link>
      <nav>
        <NavElement path="/blog" text="Blog" />
        <NavElement path="/project" text="Project" />
        <PrimaryBtn label="Contact me" />
      </nav>
    </header>
  );
};

const NavElement = ({ path, text }) => {
  let router = useRouter();

  return (
    <Link href={path}>
      <a
        className={
          router.pathname == path
            ? "active-nav-element"
            : "inactive-nav-element "
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default Nav;
