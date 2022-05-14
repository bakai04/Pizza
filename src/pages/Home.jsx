import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaItem } from "../components/index";
import { setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";

function Home() {
  const category=["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const SortItem=[{name:"популярности", type: "popular"}, {name:"цене", type:"price"}, {name:"алфавиту", type:"alphabet"}];
  const dispatch=useDispatch();

  const {items}=useSelector(({pizzas})=>{
    return{
      items: pizzas.items,
    }
  });

  useEffect(()=>{
    if(!items.length){
    dispatch(fetchPizzas())
    }
  },[])

  const onClickItem=useCallback((index)=>{
    dispatch(setSortBy(index));
  },[])
  return (
    <div className="container">
      <div className="content__top">
        <Categories 
          onClickItem={onClickItem}      
          items={category} />
        <SortPopup items={SortItem} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => (
          <PizzaItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Home