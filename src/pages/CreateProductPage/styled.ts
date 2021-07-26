import styled from "styled-components";

export const Header = styled.header`
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: 115px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const Background = styled.div`
  background: #ccc;
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: auto;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-image: none;
    background: #73dcf1;
    min-height: 350px;
  }
  @media (max-width: 576px) {
    min-height: 300px;
  }
`;

export const Container = styled.div`
  margin-inline: auto;
  text-align: center;
  width: 1180px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1179px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 20px;
  text-align: center;
  color: #353535;
  padding-bottom: 15px;

  @media (max-width: 1179px) {
    width: 100%;
  }
`;

export const Col = styled.div`
  width: 100%;
  max-width: 300px;

  @media (max-width: 1179px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #8b8b8b;
  width: 100%;
  height: 45px;
  background: #fdfdfd;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  @media (max-width: 1179px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #8b8b8b;
  width: 100%;
  height: 120px;
  background: #fdfdfd;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  @media (max-width: 1179px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const Button = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 45px;
  background: #192551;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
  @media (max-width: 1179px) {
    width: 100%;
    font-size: 18px;
  }
`;
