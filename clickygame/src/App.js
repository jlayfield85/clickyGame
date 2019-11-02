import React, {Component} from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // This is putting the cards in a JSON array.
  state = {
    cards,
    score: 0,
    highscore: 0
  };

//This is when the came is complete.

  completeGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`The Office Clicky Game is over, you idiot! -Dwight Schrute \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

// This is the current score counter and the random card sorting generator.

  clickCount = id => {
    this.state.cards.find((x, y) => {
      if (x.id === id) {
        if(cards[y].count === 0){
          cards[y].count = cards[y].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.completeGame();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>The Office Clicky Memory Game! Select an Office Character! </Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;