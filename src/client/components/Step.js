import React from "react"
import "./styles/Step.css"

export default class Step extends React.Component {
    constructor(props) {
        super(props);
    }

    checkBoxClick(){
        let stepNum = this.props.stepNum;
        let stepExecuted = !this.props.step.executed;
        this.props.stepExecution(stepNum, stepExecuted);
    };

    stepToggleClick(){
        let stepNum = this.props.stepNum;
        let stepOpened = !this.props.step.opened;
        this.props.stepToggling(stepNum, stepOpened);
    }

    render() {
        const { opened, executed, name, guidance, advices } = this.props.step;

        let stepStyle = opened ? "shown-content": "hidden-content";

        let allAdvices = advices.map((advice, i) => <li key={i}>{advice}</li>);

        return (
            <div className="step-element" >
                <input type="checkbox" className="step-checkbox" checked={executed} onChange={this.checkBoxClick.bind(this)}/><span className="step-title" onClick={this.stepToggleClick.bind(this)}>{name}</span>
                <img className="step-caret-down" onClick={this.stepToggleClick.bind(this)} src={opened ? "/images/caret-up.png" : "/images/caret-down.png"}/>
                <div className={stepStyle}>
                    <p className="step-guidance">{guidance}</p>
                    <ul className="step-bullet-list">{allAdvices}</ul>
                </div>
            </div>
        );
    }
}