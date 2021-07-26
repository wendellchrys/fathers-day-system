import styled from "styled-components";

export const Background = styled.div`
  background: #ffffff;
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: auto;
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
  gap: 20px;
  margin-top: 50px;
  @media (max-width: 1179px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  margin-inline: auto;
  width: 50%;
  height: 250px;
  background: #73dcf1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  color: #353535;
  padding-top: 40px;
`;

export const ButtonBlock = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  max-width: 250px;
  height: 55px;
  background: #353535;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: #ffffff;
  }
  &:hover {
    filter: brightness(0.8);
  }
  @media (max-width: 1179px) {
    width: 100%;
    font-size: 14px;
  }
`;
