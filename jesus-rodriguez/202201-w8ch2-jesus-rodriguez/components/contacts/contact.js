import { EditContact } from "../editContact/editContact";
import { DeleteContact } from "../deleteContacts/deleteContacs";
import style from "./contact.module.css";
export function Contact({
  contact,
  deleteContact,
  token,
  editContact,
  refreshSSProps,
}) {
  return (
    <div className={style.div} key={contact.attributes.url}>
      <p className={style.title}>Name</p>
      <p className={style.data}>{contact.Name}</p>
      <p className={style.title}>Email</p>
      <p className={style.data}>{contact.Email}</p>
      <p className={style.title}>Phone</p>
      <p className={style.data}>{contact.Phone}</p>

      <EditContact
        contact={contact}
        editContact={editContact}
        token={token}
        refreshSSProps={refreshSSProps}
      ></EditContact>
      <DeleteContact
        contact={contact}
        token={token}
        refreshSSProps={refreshSSProps}
        deleteContact={deleteContact}
      ></DeleteContact>
    </div>
  );
}
