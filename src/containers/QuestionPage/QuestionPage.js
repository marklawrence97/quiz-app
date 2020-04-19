import React from "react";
import AnswerCard from "../../components/AnswerCard/AnswerCard";

export function decodeString(str) {
  return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&eacute;/g,"é");
}

class QuestionPage extends React.Component {
  state = {
    question: "",
    correct_answer: "",
    incorrect_answers: [],
    shuffled_answers: [],
    selected_answer: "",
    user_correct: false,
    reveal_answers: false
  };

  async componentDidMount() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=1&category=10&difficulty=medium&type=multiple"
    );
    const questions = await response.json();
    const question = questions.results[0];
    const decodeIncorrect = question.incorrect_answers.map((x) => {
      return decodeString(x);
    });

    const shuffled_answers = [...decodeIncorrect, decodeString(question.correct_answer)].sort(
      () => Math.random() - 0.5
    );

    this.setState({
      question: decodeString(question.question),
      correct_answer: decodeString(question.correct_answer),
      incorrect_answers: decodeIncorrect,
      shuffled_answers: shuffled_answers,
    });
  }

  handleAnswerClick = (answer) => {
    if (!this.state.reveal_answers) {
        this.setState({selected_answer: answer})
        if (answer == this.state.correct_answer) {
            this.setState({user_correct: true})
            return true
        } 
        this.setState({user_correct: false})
        return false
    }
  }

  handleRevealAnswers = () => {
    this.setState({reveal_answers: true})
  }

  render() {
    if (this.state.incorrect_answers.length === 0) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <h1>{this.state.question}</h1>
        {this.state.shuffled_answers.map((answer, key) => (
          <AnswerCard 
            answer={answer} 
            key={key}
            handleAnswerClick={this.handleAnswerClick}
            selected_answer={this.state.selected_answer}
            correct={this.state.user_correct}
            reveal={this.state.reveal_answers}
            correct_answer={this.state.correct_answer}/>
        ))}
        <button class="ui primary button" onClick={this.handleRevealAnswers}>
            Reveal Answers!
        </button>
      </div>
    );
  }
}

export default QuestionPage;
