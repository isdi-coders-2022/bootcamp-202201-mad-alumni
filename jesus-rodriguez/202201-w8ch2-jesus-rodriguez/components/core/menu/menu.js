import menu from "./menu.module.css";
import Link from "next/link";

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/", label: "Contact" },
];
export function Menu() {
  return (
    <nav>
      <ul className={menu.ul}>
        {menuItems.map((item, i) => (
          <li key={i} className={menu.li}>
            <Link href="">
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
