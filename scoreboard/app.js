const players = [
  {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2

  },
  {
    name: "Ashley",
    score: 95,
    id: 3

  },
  {
    name: "James",
    score: 80,
    id: 4

  }
]



const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
//  either way

//
//  constructor() {
//    super()
//    this.state = {
//      score: 0
//    };
//
//  }
//  or this way to add constructor/ This way not always supported in certain browsers

  state = {
  score: 0
  };


  decrementScore = () => {
    this.setState ( prevState => {
      return {
        score: prevState.score - 1
      };
    })
  }
  //Can use this to call state and altering it directly, but may have issues if there are multiple set state calls inside an handler. Async issues. NOt good to use this if mulitple. Use callback function
//  decrementScore = () => {
//    this.setState({
//      score: this.state.score -1
//    });
//  }

  incrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      };
    })
  }


//Can use this to call state and altering it directly, but may have issues if there are multiple set state calls inside an handler. Async issues. NOt good to use this if mulitple. Use callback function
//  incrementScore = () => {
//    this.setState({
//      score: this.state.score + 1
//    });
//  }
//
  render() {
    return (
    <div className="counter">
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
      <span className="counter-score">{ this.state.score }</span>
      <button className="counter-action increment"      onClick={this.incrementScore}> + </button>
    </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />

      {/* Players list*/}
    {props.initialPlayers.map( player =>
       <Player
          name={player.name}
          key={player.id.toString()}
        />
  )}

    </div>

  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
