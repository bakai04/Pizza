import { combineReducers } from 'redux';
import Cart from './cart';
import filters from './filters'
import pizzas from './pizzas'

const rootReducer=combineReducers({
  filters,
  pizzas,
  Cart,
})
export default rootReducer;