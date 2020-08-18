import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from "./AddPlayerForm";



class App extends Component {
  state = {
    players: [
      {
        name: "Daenerys Targaryen",
        score: 0,
        id: 1
      },
      {
        name: "Jon Snow",
        score: 0,
        id: 2
      },
      {
        name: "Cersei Lannister",
        score: 0,
        id: 3
      },
      {
        name: "The Night King",
        score: 0,
        id: 4
      }
    ]
  };

  // Player id Counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += delta
      }));
    }

// Another way to update the players state using the concat() method
//     handleAddPlayer = (name) => {
//     let newPlayer = {
//       name,
//       score: 0,
//       id: this.prevPlayerId += 1
//     };
//     this.setState( prevState => ({
//       players: prevState.players.concat(newPlayer)
//     }));
//   }
  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            key={player.id.toString()}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
