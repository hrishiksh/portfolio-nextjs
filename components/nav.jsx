import Link from "next/link";
import { useRouter } from "next/router";

const Nav = ({ width }) => {
  return (
    <header className={`flex items-center justify-between ${width}`}>
      <h1 className="font-inter font-semibold text-base sm:text-xl py-4 cursor-pointer dark:text-white ">
        <Link href="/">
          <a>Hrishikesh Pathak</a>
        </Link>
      </h1>
      <nav>
        <NavElement path="/blog" text="Blog" />
        <NavElement path="/project" text="Project" />
        {/* <NavElement path="/about" text="About" /> */}
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
