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
  padding: 50px 36px;

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
  margin-top: 20px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 342px;
  height: 101px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  margin-top: 20px;

  .completOrder {
    display: flex;
    flex-direction: column;
    gap: 29px;
    padding: 27px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    margin-right: 20px;
    cursor: pointer;
  }
`;
