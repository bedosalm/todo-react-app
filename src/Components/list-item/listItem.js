import React from 'react';
import './listItem.css'

const ListItem = (props) => {
    const {items , deleteItem} = props;
    let length = items.length;
    let listItem = length ? items.map(item=> {
        return(
            <div className="list" key={item.id}>
              <span>{item.name}</span>
              <span>{item.language}</span>
              <button className="del-btn" onClick={() => deleteItem(item.id)}>delete</button>
            </div>
        )
    }) : (
        <div className="no-tasks">no taks to show</div>
    )
  return (
  <div  className="List-Content">{listItem}</div>
  )
}

export default ListItem