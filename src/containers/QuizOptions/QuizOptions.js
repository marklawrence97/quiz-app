import React from 'react';
import Quiz from '../Quiz/Quiz'

class QuizOptions extends React.Component {
    state = {
        difficultly: "medium",
        subject: "9",
        active_quiz: false
    }

    handleDifficultPick = (event) => {
        this.setState({
            difficulty: event.target.value
        })
    }

    handleSubjectPick = (event) => {
        this.setState({
            subject: event.target.value
        })
    }

    handleGenerateQuiz = () => {
        this.setState({
            active_quiz: true
        })
    }


    render() {
        if (this.state.active_quiz) {
            return(
                <Quiz 
                    difficultly={this.state.difficultly} 
                    subject={this.state.subject}/>
            )
        }

        return (
            <div className="ui raised very padded segment">
                <h1>Test your general knowledge!</h1>
                <h3>Pick your specialist subject:</h3>
                <select className="ui search dropdown" onInput={this.handleSubjectPick}>
                    <option value="9">General knowledge</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="19">Mathematics</option>
                    <option value="21">Sports</option>
                    <option value="20">Mythology</option>
                    <option value="22">Geography</option>
                </select>
                <h3>Select your difficultly:</h3>
                <div className="ui form">
                    <div className="inline fields">
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    value="easy" 
                                    name="difficulty" 
                                    tabindex="0" 
                                    onInput={(e) => this.handleDifficultPick(e)} />
                                <label>Easy</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    value="medium" 
                                    name="difficulty" 
                                    tabindex="0"
                                    onInput={(e) => this.handleDifficultPick(e)}/>
                                <label>Medium</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    value="hard" 
                                    name="difficulty" 
                                    tabindex="0" 
                                    onInput={(e) => this.handleDifficultPick(e)}/>
                                <label>Hard</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="ui primary button" onClick={this.handleGenerateQuiz}>
                    Generate Quiz
                </button>
            </div>
        )
    }
}

export default QuizOptions