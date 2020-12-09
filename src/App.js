import logo from './logo.svg';
import './App.css';
import ListItem from './Components/list-item/listItem'
import AddItem from './Components/add-Item/addItem'
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users : [
        {id:1,name : "Bedo",language:"javaScript"},
        {id:2,name : "alaa",language:"php"},
        {id:3,name : "ahmed",language:"react"}
      ]
    }
  }

  deleteItem = (id) => {
  let result = this.state.users.filter(res => {
    return res.id !== id;
  })
   this.setState({users : result})
  }

  addItem = (item) =>{
    let items = this.state.users;
    item.id = items.length + 1
   items.push(item)
   this.setState({users : items})
  }

  render(){
    return (
      <div className="Container">
        <ListItem items = {this.state.users} deleteItem = {this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
