import style from "./editContact.module.css";
export function EditContact({ contact, editContact, token, refreshSSProps }) {
  return (
    <form
      className={style.form}
      onSubmit={(e) =>
        editContact(e, contact.attributes.url, token).then(() =>
          refreshSSProps()
        )
      }
    >
      <label className={style.title} htmlFor="name">
        New Name
      </label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Edit</button>
    </form>
  );
}
