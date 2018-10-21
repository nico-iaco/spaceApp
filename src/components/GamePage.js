import React from 'react';
import qa from '../questions';
import UpperNavbar from "./UpperNavbar";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/es/Button/Button";
import Modal from "@material-ui/core/es/Modal/Modal";

class GamePage extends React.Component{
    constructor() {
        super();
        this.state = {
            questions: qa,
            right_answer: qa.questions[0].right_answer,
            open: false,
            title: "",
            description: "",
            points_earned: 0
        };
    }

    checkAnswer = (e) => {
        if (e === this.state.right_answer) {
            this.setState({
                open: !this.state.open,
                title: "Well done",
                description: this.state.questions.questions[0].description,
                points_earned: 12
            })
        } else {
            this.setState({
                open: !this.state.open,
                title: "Retry",
                description: this.state.questions.questions[0].description,
                points_earned: 0
            })
        }
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return(
            <div className="main">
                <UpperNavbar {...this.props}/>
                <div id="gameContent">
                    <Paper id="box-1" elevation={10}>
                        <br />
                        <center><h3>{this.state.questions.questions[0].question}</h3></center>
                        <br/>
                        <div id="answerDiv">
                            {
                                this.state.questions.questions[0].answers.map((e) => <Button id="button" variant="contained" color="primary" onClick={() => this.checkAnswer(e)}>{e}</Button> )
                            }
                        </div>
                    </Paper>
                    <br />
                </div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    className="modal-answer"
                >
                    <div>
                        <br/>
                        <center><h3>{this.state.title}<span>{
                            (this.state.points_earned>0) ?
                                <i className="material-icons">
                                    done
                                </i> :
                                <i className="material-icons">
                                    clear
                                </i>
                        }</span></h3></center>
                        <p>{this.state.description}</p>
                        {(this.state.points_earned>0) ? <p>You've earned {this.state.points_earned} points</p> : <p></p>}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default GamePage;