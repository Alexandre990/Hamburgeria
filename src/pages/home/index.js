import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Burger from "../../Assets/burger.svg";

import {
  Conteiner,
  Image,
  ConteinerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: inputOrder.current.value,
        name: inputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);

    history.push("/pedidos");
  }

  return (
    <Conteiner>
      <Image alt="Logo" src={Burger}></Image>
      <H1>{`Faça seu pedido!`}</H1>
      <ConteinerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ConteinerItens>
    </Conteiner>
  );
}

export default App;
