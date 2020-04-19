import React from 'react';
import Question from '../Question/Question'

class Quiz extends React.Component {
    state = {
        score: 0,
        questions: [],
        current_question: 0
    }

    async componentDidMount(){
        const response = await fetch(
            "https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple"
          );
          const questions = await response.json();
          this.setState({questions: questions.results})
    }

    handleCorrectGuess = () => {
        this.setState({
            score: this.state.score + 1
        })
    }

    handleNextQuestion = () => {
        this.setState({
            current_question: this.state.current_question + 1
        })
        console.log(this.state.current_question)
    }

    render() {
        const {questions, score, current_question} = this.state

        if (questions.length === 0) {
            return ( 
                <div>
                    Loading
                </div>
            )
        }
        
        if (current_question < questions.length) {
            return (
                <Question 
                    score={score}
                    handleCorrectGuess={this.handleCorrectGuess}
                    question={questions[current_question]}
                    handleNextQuestion={this.handleNextQuestion}
                    />
            )
        } 
        return (
            <div>
                Your Score was { score }
            </div>
        )
    }
}

export default Quiz