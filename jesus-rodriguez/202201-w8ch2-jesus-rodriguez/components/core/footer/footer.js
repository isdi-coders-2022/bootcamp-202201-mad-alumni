import style from "./footer.module.css";
import Link from "next/link";
export function Footer() {
  return (
    <footer className={style.container}>
      <p>
        © Copyright 2022 salesforce.com, inc. Reservados todos los derechos. Las
        distintas marcas comerciales pertenecen a sus respectivos propietarios
      </p>
      <div className={style.try}>
        <Link href="https://www.salesforce.com/es/form/signup/freetrial-sales-pe/?d=70130000000EqoPs">
          <a>
            {" "}
            <button className={style.trybtn}>Tryal 30 Days</button>
          </a>
        </Link>
      </div>
    </footer>
  );
}
