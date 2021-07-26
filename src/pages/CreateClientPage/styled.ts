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
