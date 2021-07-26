import { Link } from "react-router-dom";

import * as S from "./styled";

export function Menu() {
  return (
    <S.Menu>
      <Link to="/">Home</Link>
      <Link to="/produto">Cadastrar Produto</Link>
      <Link to="/cliente">Cadastrar Cliente</Link>
    </S.Menu>
  );
}
