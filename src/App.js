import NavBar from './components/navBar';
import './App.css';
import Counters from './components/counters';
import React,{Component} from 'react';

export default class App extends Component {
   state = {
        counters: [
        { id: 1, value: 4 },
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}]
   };
  constructor(props){
    super(props);
    console.log("Constructor is called", this.props.value);
    // Inorder to use this.props, props arguments should be passed in the constrcutor & also super functions
  }
  componentDidMount(){
  //this is for Ajax call to get the data from the server
    console.log("App-mounted");
  }
    handleDelete=(counterId)=> {
        //console.log("Handle event called from counter component",counterId);
        const counterVar = this.state.counters.filter(counter => counter.id !== counterId);//creating new array without the id which has been deleted
        this.setState({ counters: counterVar });//overriding counters array with countervariable (new array)
        
    }
    handleReset = () => {
        const counterReset = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters: counterReset });
    }
    handleIncrement = counter => {
        console.log(counter);
        const counterIncrement = [...this.state.counters];
        const index = counterIncrement.indexOf(counter);
        counterIncrement[index] = { ...counter }; 
        counterIncrement[index].value++;
        this.setState({ counters: counterIncrement });

    }
   handleDecrement = counter => {
        console.log(counter);
        const counterDecrement = [...this.state.counters];
        const index = counterDecrement.indexOf(counter);
        counterDecrement[index] = { ...counter }; 
        counterDecrement[index].value--;
        this.setState({ counters: counterDecrement });

    }
  render() {
    console.log("App-Render method is called");
    return (
      <React.Fragment>
        <NavBar totalCounters={ this.state.counters.filter(counter=>(counter.value>0)).length} />
          
        <main className='container'>
          <Counters counters={this.state.counters } onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}
