import react , {Component} from 'react';
import './addItem.css'

class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            name : "",
            language : ""
        }
    }



    handelChanges = (e) => {
     this.setState({
         [e.target.id] : e.target.value
     });
    }

    submitForm = (e) =>{
    e.preventDefault();
    if(this.state.name && this.state.language){
        console.log(this.state)
        this.props.addItem(this.state);
    }else{
        return false
    }
    this.setState({
         name : "",
         language : ""
     });
    }

    render(){
        return(
           <form onSubmit={this.submitForm}>
               <input type="text" value={this.state.name} placeholder="Enter Name..." id="name" onChange={this.handelChanges} />
               <input type="text" value={this.state.language} placeholder="Enter language..." id="language" onChange={this.handelChanges}/>
               <button className="add-btn">action</button>
           </form>
        )
    }
}

export default AddItem