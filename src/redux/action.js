import Produtos from './api/Produtos';

const initialState = Produtos.map((item) => ({ ...item, qtd: 0 }));

export default function car(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CAR':
      return state.map((item) => {
        item.id === action.id && item.qtd++;
        return item;
      });

    case 'REMOVE_FROM_CAR':
      return state.map((item) => {
        item.id === action.id && item.qtd--;
        return item;
      });

    case 'CLEAR_CAR':
      return state.map((item) => {
        item.qtd = 0;
        return item;
      });

    default:
      return state;
  }
}
