import style from "./createContacts.module.css";
export function CreateContacts({ refreshSSProps, createContact, token }) {
  return (
    <>
      <form
        className={style.form}
        onSubmit={(e) => createContact(e, token).then(() => refreshSSProps())}
      >
        <label className={style.title} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required />
        <label className={style.title} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <label className={style.title} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          autoComplete="phone"
          required
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
