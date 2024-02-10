import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component{
    render() {
            const { onReset, counters, onDelete, onIncrement,onDecrement } = this.props;
        console.log("Counters component is rendered");
        return (
               
            <div>
                {/*Change "this.state.handleReset" to "this.props.onReset"
                <button onClick={this.props.onReset } className="btn btn-primary btn-sm m-2">Reset</button> 
                replacing the below line to destructure*/}
                <button onClick={onReset } className="btn btn-primary btn-sm m-2">Reset</button>
                {/*{this.props.counters.map(counter =>
                    Destructuring "this.props.counters"*/}
                {counters.map(counter => 
                    <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter} />
                    //*<Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter} />
                //Destructuring "this.props"*/ 
                     //change "this.state.handleDelete" to "this.props.onDelete", "this.state.handleIncrement" to "this.props.onIncrement"
                )}
                {/*<Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />//render in the Counter component from current Counters component
                    //The below code will handle all the attributes in the array rather than just ID & Value
                //<Counter/> is the imported Counters component*/}
            </div>);
    }
}