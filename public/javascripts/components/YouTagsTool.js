import React from "react"
import {connect} from "react-redux"
import {ToCheckListAction, ToTagFinderAction, ExecuteStep, ToggleStep, RestartSteps} from "../actions"
import ControlPanel from "./ControlPanel";
import Step from "./Step";
import TagFinder from "./TagFinder";

class YouTagsTool extends React.Component {
    constructor(props) {
        super(props);
    }

    checkListOpen(){
        this.props.checkListOpen();
    }

    tagExplorerOpen(){
        this.props.tagExplorerOpen();
    }

    restartSteps(){
        this.props.restartSteps();
    }

    stepExecution(stepNum, executed){
        this.props.executeStep(stepNum, executed)
    }

    stepToggling(stepNum, opened){
        this.props.openStep(stepNum, opened)
    }

    render() {
        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};

        let checkListStyle = this.props.checkListActive ? visibleStyle : invisibleStyle;
        let tagsFinderStyle = this.props.checkListActive ? invisibleStyle : visibleStyle;

        let allSteps = this.props.checkList.map((step, i)=>
            <Step
                key={i}
                stepNum={i}
                step={step}
                stepToggling = {this.stepToggling.bind(this)}
                stepExecution = {this.stepExecution.bind(this)}
            />);


        return (
            <div className="te-explorer">

                <ControlPanel
                    activeCheckListTab = {this.props.checkListActive}
                    onCheckListClick ={this.checkListOpen.bind(this)}
                    onRestartStepsClick = {this.restartSteps.bind(this)}
                    onTagExplorerClick = {this.tagExplorerOpen.bind(this)}
                />

                <div id="check-list-row" style={checkListStyle} className="steps-container">{allSteps}</div>

                <div id="tag-row" style={tagsFinderStyle}>
                    <TagFinder/>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        checkListOpen: () => dispatch(ToCheckListAction()),
        tagExplorerOpen: () => dispatch(ToTagFinderAction()),
        restartSteps: ()=> dispatch(RestartSteps()),
        executeStep: (stepNum, executed) => dispatch(ExecuteStep(stepNum, executed)),
        openStep: (stepNum, opened) => dispatch(ToggleStep(stepNum, opened))
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YouTagsTool);