import React from 'react'



class Categories extends React.Component {
  state={
    activeItem: 0,
  };
  
  onSelectItem=(index)=>{
    this.setState({
      activeItem: index,
    });
  }
  render() {
    const {items}=this.props;
    return (
      <div className="categories" >
        <ul>
          <li>Все</li>
          {items.map((name, index) => (
            <li onClick={()=>{this.onSelectItem(index)}} className={(this.state.activeItem===index)?"active":""} key={`${name}"_"${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
// function Categories({items}) {
//   return (
//      <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index)=>(
//           <li key={`${name}"_"${index}`}>{name}</li>
//         ))}
//       </ul>
// </div>
//   )
// }

export default Categories;
