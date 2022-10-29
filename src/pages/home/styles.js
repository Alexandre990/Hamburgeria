import styled from "styled-components";
import background from "../../Assets/fundo.svg";

export const Conteiner = styled.div`
  background: url("${background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ConteinerItens = styled.div`
  padding: 90px 36px;

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
  margin-top: 25px;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 15px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  padding-left: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 42px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 45px;
  background: #d93856;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
