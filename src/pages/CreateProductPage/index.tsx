import { useCallback, useState } from "react";

import * as S from "./styled";

import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";

import logo from "../../assets/images/logo.png";

type productProps = {
  name: string;
  price: string;
  priceOffer: string;
  description: string;
};

function CreateProductPage() {
  const listProducts: any[] = [];

  const [products, setProducts] = useState(listProducts);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceOffer, setPriceOffer] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    if (name && price && priceOffer && description) {
      if (!products) {
        setProducts([
          {
            name: name,
            price: price,
            priceOffer: priceOffer,
            description: description,
          },
        ]);
      } else {
        setProducts([
          ...products,
          {
            name: name,
            price: price,
            priceOffer: priceOffer,
            description: description,
          },
        ]);
      }

      alert("Produto Cadastrado!");
      console.log(name);
      console.log(price);
      console.log(priceOffer);
      console.log(description);
      console.log(products);
    }
    setName("");
    setPrice("");
    setPriceOffer("");
    setDescription("");
  }

  return (
    <div>
      <S.Header>
        <S.Logo src={logo} />
        <Menu />
      </S.Header>
      <S.Background>
        <S.Container>
          <S.Title>Cadastro de Produtos</S.Title>
          <S.Col>
            <S.Input
              placeholder="Nome"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <S.Input
              placeholder="Preço"
              type="text"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <S.Input
              placeholder="Preço em Oferta"
              type="text"
              required
              onChange={(e) => setPriceOffer(e.target.value)}
              value={priceOffer}
            />
            <S.TextArea
              placeholder="Descrição"
              rows={5}
              cols={5}
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </S.Col>
          <S.Col>
            <S.Button type="submit" onClick={(e) => handleSubmit(e)}>
              Cadastrar
            </S.Button>
          </S.Col>
        </S.Container>
      </S.Background>
      <Footer />
    </div>
  );
}

export default CreateProductPage;
