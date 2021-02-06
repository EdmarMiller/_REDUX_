import Produtos from './api/Produtos';

const initialState = [...Produtos];

export default function produtos(state = initialState, action) {
  return state;
}
