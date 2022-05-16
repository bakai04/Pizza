import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaItem, LoadingBlock } from "../components/index";
import { addPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
function Home() {
  const Iscategory=["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const SortItem=[
    {name:"популярности", type: "rating", order: "desc"},
    {name:"цене", type:"price", order: "desc"},
    {name:"алфавиту", type:"name", order: "asc"}];
  const dispatch=useDispatch();
  
  const onAddPizza=(obj)=>{
    dispatch(addPizzaToCart(obj))
  }

  const {items}=useSelector(({pizzas})=>{
    return{
      items: pizzas.items,
    }
  });
  const cartItems=useSelector(({Cart})=>Cart.items);


  const onClickItem=useCallback((index)=>{
    dispatch(setCategory(index));
  },[])
  
  const onSelectSort=(type)=>{
    dispatch(setSortBy(type));
  }


  const {isLoaded}=useSelector(({pizzas})=>{
    return{
      isLoaded: pizzas.isLoaded,
    }
  });

  const {category, filtersBy}=useSelector(({filters})=>filters);

  useEffect(()=>{
    dispatch(fetchPizzas(category, filtersBy))
  },[category, filtersBy ])

  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          activeCategory={category}
          onClickCategory={onClickItem}      
          items={Iscategory} />
        <SortPopup items={SortItem} activeSortPopup={filtersBy.type} onSelectSort={onSelectSort}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded? items.map(item => (
          <PizzaItem
            key={item.id}
            {...item}
            onAddPizza={onAddPizza}
            pizzaCount={cartItems[item.id] && cartItems[item.id].length}
          />
        )) : Array(12).fill(0).map((_, index)=><LoadingBlock key={index}/>)}
      </div>
    </div>
  )
}

export default Home