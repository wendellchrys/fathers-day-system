import * as S from "./styled";

import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

import logo from "../../assets/images/logo.png";

function CreateClientPage() {
  return (
    <div>
      <S.Header>
        <S.Logo src={logo} />
        <Menu />
      </S.Header>
      <S.Background>
        <S.Container>
          <h1>Cadastro de Cliente</h1>
        </S.Container>
      </S.Background>
      <Footer />
    </div>
  );
}

export default CreateClientPage;
