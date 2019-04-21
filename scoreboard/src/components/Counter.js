import React from "react";

const Counter = (props) =>  {


  // incrementScore = () => {
  //   this.setState( prevState => ({
  //     score: prevState.score + 1
  //   }));
  // }
  //
  // decrementScore = () => {
  //   this.setState( prevState => ({
  //     score: prevState.score - 1
  //   }));
  // }

    return (
      <div className="counter">
        <button className="counter-action decrement" > - </button>
        <span className="counter-score">{ props.score }</span>
        <button className="counter-action increment" > + </button>
      </div>
    );

}

export default Counter;

// another way to export a class
// export default class Counter extends Component {
//   render() { ... }
// }


// another way to export a function
// export const Counter = () => {
//   return ( ... );
// }
