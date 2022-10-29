import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Embalagem from "../../Assets/embalagem.svg";
import Trash from "../../Assets/lixeira.svg";

import { Conteiner, Image, ConteinerItens, H1, Button, Order } from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }

    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Conteiner>
      <Image alt="Logo" src={Embalagem}></Image>
      <H1>{`Pedidos`}</H1>
      <ConteinerItens>
        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className="completOrder">
                <p>{order.order}</p>
                <p>
                  <b>{order.name}</b>
                </p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="lixeira" src={Trash}></img>
              </button>
            </Order>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ConteinerItens>
    </Conteiner>
  );
}

export default Orders;
