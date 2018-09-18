export function ToCheckListAction(){
    return {
        type: "ToCheckList"
    }
}

export function ToTagFinderAction() {
    return {
        type: "ToTagFinder"
    }
}

export function RestartSteps(){
    return{
        type: "RestartSteps"
    }
}

export function ExecuteStep(stepNum, executed){
    return{
        type: "ExecuteStep",
        payload: {stepNum, executed}
    }
}

export function ToggleStep(stepNum, opened){
    return{
        type: "ToggleStep",
        payload: {stepNum, opened}
    }
}