const initialState={
    items:{},
    totalPrice: 0,
    itemsCount: 0,
}
const Cart=(state=initialState, action)=>{
    switch(action.type){
        case('ADD_TO_CART'):
            const newItems= {
                ...state.items,
                [action.payload.id]:
                    !state.items[action.payload.id]? [action.payload]:[...state.items[action.payload.id],action.payload]
            }
            const allPizzas=[].concat.apply([], Object.values(newItems));
            return{
                ...state,
                items:newItems,
                itemsCount:allPizzas.length,
                totalPrice:allPizzas.reduce((sum, obj)=>sum+obj.price, 0)
            }
        default:
            return state;
    }

}
export default Cart;