import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ShoppingCar() {
  const dispatch = useDispatch();

  const car = useSelector((state) =>
    state.car.filter((item) => item.qtd > 0)
  );

  const totalQtd = useSelector((state) =>
    state.car.reduce((acc, cur) => acc + cur.qtd, 0)
  );

  const totalpreco = useSelector((state) =>
    state.car.reduce((acc, cur) => acc + cur.preco * cur.qtd, 0)
  );

  return (
    <div style={panelStyle}>
      <h2>
        CARRINHO ({totalQtd})
        <button onClick={() => dispatch({ type: 'CLEAR_CAR' })}>
          LIMPAR CARRINHO
        </button>
      </h2>

      <table>
        <tbody>
          {car.map((item) => (
            <tr key={item.id}>
              <td style={{ width: '170px' }}>{item.nome}</td>
              <td style={{ width: '90px' }}>
                $ {(item.preco * item.qtd).toFixed(2)}
              </td>
              <td style={{ width: '80px', textAlign: 'center' }}>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CAR', id: item.id })
                  }
                >
                  -
                </button>

                {item.qtd}

                <button
                  onClick={() => dispatch({ type: 'ADD_TO_CAR', id: item.id })}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Total: $ {totalpreco.toFixed(2)}</h4>
    </div>
  );
}

const panelStyle = {
  height: '100%',
  width: '30vw',
  padding: '10px',
  boxShadow: '5px 5px 10px #817a7a'
};
