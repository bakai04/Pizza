import React from 'react';
import PropTypes from "prop-types";
function Categories({activeCategory, items, onClickCategory}) {
  return (
     <div className="categories">
      <ul>
        <li className={(null===activeCategory)? "active": ""}  onClick={()=>onClickCategory(null)}>Все</li>
        {items && items.map((name, index)=>(
          <li className={(index===activeCategory)? "active": ""} key={`${name}"_"${index}`} onClick={()=>onClickCategory(index)}>{name}</li>
        ))}
      </ul>
</div>
  )
}
Categories.propTypes={
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func
};
Categories.defaultProps={
  activeCategory: null,
  items: [],
}
export default Categories;



// class Categories extends React.Component {
//   state={
//     activeItem: 0,
//   };
  
//   onSelectItem=(index)=>{
//     this.setState({
//       activeItem: index,
//     });
//   }
//   render() {
//     const {items}=this.props;
//     return (
//       <div className="categories" >
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li onClick={()=>{this.onSelectItem(index)}} className={(this.state.activeItem===index)?"active":""} key={`${name}"_"${index}`}>{name}</li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }