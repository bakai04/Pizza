import React, { useState } from 'react'
function Categories({items}) {
  const [activeItem, setActiveItem]=useState(null);
  const onSelectItem=(index)=>{
    setActiveItem(index)
  }
  return (
     <div className="categories">
      <ul>
        <li className={(null===activeItem)? "active": ""}  onClick={()=>setActiveItem(null)}>Все</li>
        {items && items.map((name, index)=>(
          <li className={(index===activeItem)? "active": ""} key={`${name}"_"${index}`} onClick={()=>onSelectItem(index)}>{name}</li>
        ))}
      </ul>
</div>
  )
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