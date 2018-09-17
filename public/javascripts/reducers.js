const initState = {
    checkListActive: true
};

function reducer(state = initState, action){

    switch(action.type){
        case "ToCheckList":
            return {...state,checkListActive: true};
        case "ToTagFinder":
            return {...state,checkListActive: false};
        default:
            return state;
    }
}

export default reducer;