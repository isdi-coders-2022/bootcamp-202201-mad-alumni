import { useRouter } from "next/router";
import { Footer } from "../components/core/footer/footer";
import { Header } from "../components/core/header/header";
import style from "../styles/Home.module.css";
import React from "react";
import {
  createContact,
  deleteContact,
  editContact,
  getAllContacts,
  getToken,
} from "../services/api-connection";
import { CreateContacts } from "../components/createContacts/createContacts";
import { Contact } from "../components/contacts/contact";
import Head from "next/head";

const Page = ({ data, token }) => {
  const router = useRouter();

  const refreshSSProps = () => {
    router.replace(router.asPath);
  };

  return (
    <div>
      <Head>
        <title>Salesforce Challenge - Jesus Rodriguez</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>

      <h2 className={style.NewUser}> New User</h2>
      <div className={style.containerCreate}>
        <CreateContacts
          refreshSSProps={refreshSSProps}
          createContact={createContact}
          token={token}
        ></CreateContacts>
      </div>
      <div className={style.containerContact}>
        {data &&
          data.records &&
          data.records.map((contact, i) => {
            return (
              <Contact
                key={i}
                contact={contact}
                deleteContact={deleteContact}
                token={token}
                editContact={editContact}
                refreshSSProps={refreshSSProps}
              ></Contact>
            );
          })}
      </div>
      <Footer></Footer>
    </div>
  );
};

// Método para que me devuelva los datos de la API:

export const getServerSideProps = async () => {
  const token = await getToken();
  const data = await getAllContacts();

  return { props: { data, token } };
};

export default Page;
