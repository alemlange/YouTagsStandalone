import React from "react"

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    checkListClick(e){
        e.preventDefault();
        this.props.onCheckListClick();
    }

    tagExplorerClick(e){
        e.preventDefault();
        this.props.onTagExplorerClick();
    }

    menuBtnClick(e){
        e.preventDefault();
        this.props.onRestartStepsClick();
    }

    render() {

        let checkTabClass = this.props.activeCheckListTab ? "check-control section-link active": "check-control section-link";
        let tagTabClass = this.props.activeCheckListTab ? "tag-control section-link": "tag-control section-link active";
        return (
            <div className="control-panel">
                <a href="#" className="btn menu-btn" onClick={this.menuBtnClick.bind(this)}/>
                <a href="#" className={checkTabClass} onClick={this.checkListClick.bind(this)}>Чек Лист</a>
                <a href="#" className={tagTabClass} onClick={this.tagExplorerClick.bind(this)}>Поиск тегов</a>
            </div>
        );
    }
}