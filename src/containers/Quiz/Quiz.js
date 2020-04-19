import React from 'react';
import Question from '../Question/Question'

class Quiz extends React.Component {
    state = {
        score: 0
    }

    handleCorrectGuess = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    render() {
        return (
            <Question 
                score={this.state.score}
                handleCorrectGuess={this.handleCorrectGuess}/>
        )
    }
}

export default Quiz