import React, { Component } from 'react';

export default class Counter extends Component{
    //Removing the local state to implement Controlled component where the data is received thru "this.props"
    // state = {
    //     //value: this.props.value
    //     value:this.props.counter.value//changed as the id & value are no more called separately
    //     //tags: ['tag1', 'tag2', 'tag3'],
    // };
    // styles = {
    //     fontSize: 15,
    //     fontWeight: 'bold'
    // };
    /*constructor() {
        super();//reference is made for parent {component} in the constructor
       this.handleIncrement= this.handleIncrement.bind(this);
    }*/

    //removing this handleIncrement method, since it receives data from "state" but it became stateless now
    /*handleIncrement = product => {//with arrow function, binding "this" thru constructor is not required
        //console.log("Increment button clicked",this);
        /*this can be referenced in render() but not here
        it will be refering to window & with the strict mode, it will display Undefined */
        //console.log(product);
        //this.setState({ value: this.state.value + 1 });//setState is a function of "Component module"
        
    //};
    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // }
   
//    renderTags(){
//        if (this.state.tags.length === 0) return <p>There are no tags to display</p>;
//        return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
//         }
      componentDidUpdate(prevProps, prevState){
            console.log("Previous Property: ", prevProps);
            console.log("Previous State: ", prevState);
          if (prevProps.counter.value !== this.props.counter.value) {
              console.log("This is where AJAX call is performed to server to get the data");
          }
      }
    componentWillUnmount() {
        console.log("Counter Component is removed");
    }
    render() {
      
        console.log("Counter component is rendered");
        return (
           //displays the properties of counter component but not ID since it is a unique identifier

            //console.log("props", this.props);

            <div className="row">{/*Bootstap class for GRID implementation */}
                <div className="col-1">{/*Bootstap class for small column */}
                    <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                        {/*<button onClick={this.handleIncrement} className={this.getButtonClass()}>Increment</button>*/}
                        {/*Commenting this, since "this.handleIncrement" is no more part of this component so renaming*/}
                    <button onClick={()=>this.props.onIncrement(this.props.counter)} className={this.getButtonClass()}>Increment</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getButtonClass()}
                        disabled={(this.props.counter.value)===0? 'disabled' : ""}>Decrement</button>
                
                
                
            {/* {this.state.tags.length === 0 && "Please add Tags"}
            {this.renderTags()} 
                <button onClick={()=> this.props.onDelete(this.props)} className="btn btn-danger btn-sm btn-m2">Delete</button>
                commented as value & ID are called via counter*/}
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            </div>
    );
    }
    formatCount() {
        //const { value } = this.state;//destructuring-this.value=this.state.value
        //commenting  this since  state is removed
        const { value } = this.props.counter;
        return (value === 0) ? 'zero' : value;
    }
    getBadgeClass() {
        let classes = "badge badge-";
        return classes += (this.props.counter.value === 0) ? "warning" : "primary";
    }
    getButtonClass() {
        let classes = "btn btn-secondary m-2";
        return classes;
    }
}