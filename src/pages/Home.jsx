import React from 'react'
import { useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaItem } from "../components/index";
function Home() {
  const {items}=useSelector(({pizzas, filters})=>{
    return{
      items: pizzas.items,
      filtersBy: filters.filtersBy
    }
  });
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]} />
        <SortPopup items={[{name:"популярности", type: "popular"}, {name:"цене", type:"price"}, {name:"алфавиту", type:"alphabet"}]} />
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