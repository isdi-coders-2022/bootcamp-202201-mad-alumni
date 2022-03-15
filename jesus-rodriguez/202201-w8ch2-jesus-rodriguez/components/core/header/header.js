import style from "./header.module.css";
import Image from "next/image";
import { Menu } from "../menu/menu";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Salesforce</h1>
        <Image
          className={style.logo}
          src="/logo.png"
          alt="Salesforce logo"
          width="100"
          height="70"
        />
        <Menu></Menu>
      </header>
    </>
  );
}
