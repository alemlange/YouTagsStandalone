import React from "react"

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

        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};
        let stepStyle = opened ? visibleStyle: invisibleStyle;

        let allAdvices = advices.map((advice, i) => <li key={i}>{advice}</li>);

        return (
            <div className="list-element" >
                <input type="checkbox" className="step-checkbox" checked={executed} onChange={this.checkBoxClick.bind(this)}/><span className="step-title" onClick={this.stepToggleClick.bind(this)}>{name}</span>
                <img className="caret-down" onClick={this.stepToggleClick.bind(this)} src={opened ? "/images/caret-up.png" : "/images/caret-down.png"}/>
                <div className="step" data-stepnum="5" style={stepStyle}>
                    <p className="step-guidance">{guidance}</p>
                    <ul className="bullet-list">{allAdvices}</ul>
                </div>
            </div>

        );
    }
}