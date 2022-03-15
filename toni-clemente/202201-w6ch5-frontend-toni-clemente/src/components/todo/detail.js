import { useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();
  return (
    <>
      <h2>Página de detalle</h2>
      <p>Robot {id}</p>
    </>
  );
}
