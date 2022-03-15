import style from "./deleteContact.module.css";

export function DeleteContact({
  deleteContact,
  refreshSSProps,
  token,
  contact,
}) {
  return (
    <div className={style.containerDelete}>
      <button
        className={style.btn}
        onClick={() =>
          deleteContact(contact.attributes.url, token).then(() =>
            refreshSSProps()
          )
        }
      >
        Borrar
      </button>
    </div>
  );
}
