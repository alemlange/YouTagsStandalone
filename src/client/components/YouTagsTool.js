import React from "react"
import {connect} from "react-redux"
import {ToCheckListAction, ToTagFinderAction, ExecuteStep, ToggleStep, RestartSteps, RequestTagStatistics, ChangeFindText} from "../actions/actions"
import ControlPanel from "./ControlPanel";
import Step from "./Step";
import TagFinder from "./TagFinder";
import "./styles/YouTagsTool.css"

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

    getTagStatistics(tag){
        this.props.getTagStatistics(tag);
    }

    changeTagText(text){
        this.props.changeTagText(text);
    }

    render() {
        const { steps, tagFinder } = this.props;

        let checkListStyle = steps.checkListActive ? "shown-content" : "hidden-content";

        //combining steps to jsx components from array
        let allSteps = steps.checkList.map((step, i)=>
            <Step
                key={i}
                stepNum={i}
                step={step}
                stepToggling = {this.stepToggling.bind(this)}
                stepExecution = {this.stepExecution.bind(this)}
            />);

        return (
            <div className="yt-explorer">
                <ControlPanel
                    activeCheckListTab = {steps.checkListActive}
                    onCheckListClick ={this.checkListOpen.bind(this)}
                    onRestartStepsClick = {this.restartSteps.bind(this)}
                    onTagExplorerClick = {this.tagExplorerOpen.bind(this)}
                />

                <div className={checkListStyle + " yt-steps-container"}>{allSteps}</div>

                <TagFinder isVisible={!steps.checkListActive}
                           tagFinder={tagFinder}
                           onFindClick = {this.getTagStatistics.bind(this)}
                           onTextChange={this.changeTagText.bind(this)}
                />
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
        openStep: (stepNum, opened) => dispatch(ToggleStep(stepNum, opened)),
        getTagStatistics: (tag) => dispatch(RequestTagStatistics(tag)),
        changeTagText: (text) =>dispatch(ChangeFindText(text))
    }
};

const mapStateToProps = (state) => {
    return {
        steps: state.steps,
        tagFinder: state.tagFinder,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YouTagsTool);