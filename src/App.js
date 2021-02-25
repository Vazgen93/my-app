import { Component } from "react";
import "./app.scss";

class App extends Component{
  constructor(){
    super()
    this.state = {
      myGreeting:'My name is ...',
      persons:[{name:'Vazgen'},{name:'Armen'},{name:'Artak'}]
    }
  }
  handleClick = () => {
      console.log('Button is clicked')
      this.setState({myGreeting:'My name is Vazgen'})
  }

  render(){
    return(
      <div className="app">
        <h1>{this.state.myGreeting}</h1>
        <button onClick = {this.handleClick}>Change state content</button>
        {
          this.state.persons.map((person,idx)=>(
             <div key={idx}>
               <h2>{person.name} </h2>
             </div>
            
          ))
        }
      </div>
    )
  }
}

// const App = () => {
//   const myGreeting = 'Hello World !!!';

//   return <div className="app">
//     <h1>{myGreeting}</h1>
//   </div>;
// };

export default App;
