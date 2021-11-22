import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-inter font-semibold text-xl py-4 cursor-pointer dark:text-white">
        Hrishikesh Pathak
      </h1>
      <nav>
        <NavElement path="/blog" text="Blog" />
        <NavElement path="/resume" text="Resume" />
        <NavElement path="/about" text="About" />
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
