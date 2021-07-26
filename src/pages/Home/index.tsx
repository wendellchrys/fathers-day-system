import * as S from "./styled";

import logo from "../../assets/images/logo.png";

import { Footer } from "../../components/Footer";
import { Blocks } from "../../components/Blocks";

function Home() {
  return (
    <div>
      <S.Header>
        <S.Logo src={logo} />
      </S.Header>
      <Blocks />
      <Footer />
    </div>
  );
}

export default Home;
