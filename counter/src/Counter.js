import React, {Component} from "react";
import { connect } from "react-redux"


class Counter extends Component {
    constructor() {
        super()

        // this.state = {
        //     counter: 0
        // }
    
    }
    


    render() {
        let layout = {
            marginLeft: "40px",
            marginRight: "40px",
            backgroundColor: "red"
        }

        let style = {
            backgroundColor: "blue",
            border: "1px solid blue",
            padding: "12px",
            margin: "40px",
            color: "white",
            fontSize: "20px"
        }
       
        return(
            <div style={layout}>
               <h1>{this.props.counter}</h1> 
                <button style={style} onClick={() => this.props.onIncrementCounter()}>Increment</button>
                <button style={style} onClick={() => this.props.onDecrementCounter()}>Decrement</button>
                <button style={style} onClick={() => this.props.onMultiplyCounter()}>*5.....</button>
                <button style={style} onClick={() => this.props.onDivideCounter()}>/5.....</button>
                <button style={style} onClick={() => this.props.onZeroCounter()}>*0.....</button>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INC_COUNTER'}),
        onDecrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
        onMultiplyCounter: () => dispatch({type: 'MULTIPLY_FIVE_COUNTER'}),
        onDivideCounter: () => dispatch({type: 'DIVIDE_FIVE_COUNTER'}),
        onZeroCounter: () => dispatch({type: 'RETURN_TO_ZERO'})



    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Counter)