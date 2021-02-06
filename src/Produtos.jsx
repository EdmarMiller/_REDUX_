import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Produtos() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos);

  return (
    <div style={container}>
      <h2>Produtos</h2>

      <div style={cardsDivStyle}>
        {produtos.map((item) => (
          <div key={item.id} style={cardStyle}>
            <p>{item.nome}</p>
            <p>{item.descricao}</p>
            <p>${item.preco.toFixed(2)}</p>
            <p>${item.precoFinal.toFixed(2)}</p>
            
            
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CAR', id: item.id })}
            >
              Faça sua encomenda!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const container = {
  height: '100vh',
  width: '30vw',
  background: '#5a0404',
  padding: '10px',
};

const cardStyle = {
  background: '#db6c6c',
  width: '200px',
  height: '150px',
  borderRadius: '45px',
  margin: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  textAlign: 'center',
};

const cardsDivStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};
