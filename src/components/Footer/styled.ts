import styled from "styled-components";

export const Background = styled.div`
  background: #ffffff;
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Copyright = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #353535;

  @media (max-width: 1179px) {
    font-size: 15px;
    line-height: 15px;
  }
`;
