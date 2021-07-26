import { Link } from "react-router-dom";

import { RiUserAddFill, RiPriceTag3Fill } from "react-icons/ri";

import * as S from "./styled";

export function Blocks() {
  return (
    <S.Background>
      <S.Container>
        <S.Block>
          <S.Title>Cadastro de Produto</S.Title>
          <RiPriceTag3Fill color="#353535" size="100px" />
          <S.ButtonBlock>
            <Link to="/produto">Cadastrar Produto</Link>
          </S.ButtonBlock>
        </S.Block>
        sdsd
        <S.Block>
          <S.Title>Cadastro de Cliente</S.Title>
          <RiUserAddFill color="#353535" size="100px" />
          <S.ButtonBlock>
            <Link to="/cliente">Cadastrar Cliente</Link>
          </S.ButtonBlock>
        </S.Block>
      </S.Container>
    </S.Background>
  );
}
