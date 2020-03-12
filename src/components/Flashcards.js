import React from 'react';
import Flashcard from './Flashcard';

class Flashcards extends React.Component {
  state = {
    cards: [
      { id: 1, 
        front: 'Why do scuba divers fall off the boat backwards?',
        back: "Because if they fell forward they'd still be on the boat",
        showBack: false
    },
    { id: 2, 
      front: "Why couldn't the lifeguard save the hippie?",
      back: 'Because he was too far out, man.',
      showBack: false
    },
    { id: 3, 
      front: 'You know that cemetery up the road?',
      back: 'People are dying to get in there.',
      showBack: false
    },
    ]
  }

  cardToggle = (card) => {
    card.showBack = !card.showBack
    this.setState({
      card: this.state.cards.map( c => {
        if (c.id === card.id) {
          return card
        }
        return c
      }
      )
    })
  }

  mapCards = () => (
    this.state.cards.map( card => (
      <Flashcard key={card.id} card={card} {...card} cardToggle={this.cardToggle}/>
    ))
  )

  render() {
    return (
      <div>
       {this.mapCards()}
      </div>
    )
  }
}

export default Flashcards;