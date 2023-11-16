import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#4ad64a] sm:text-xl font-mono rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
