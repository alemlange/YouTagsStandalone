import React from "react"
import PropTypes from 'prop-types';
import "./styles/ControlPanel.css"

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
        let checkTabClass = this.props.activeCheckListTab ? "control-section-link active": "control-section-link";
        let tagTabClass = this.props.activeCheckListTab ? "control-section-link": "control-section-link active";

        //notice that menu button empties all steps execution state
        return (
            <div className="control-panel">
                <a href="#" className="btn control-menu-btn" onClick={this.menuBtnClick.bind(this)}/>
                <a href="#" className={checkTabClass} onClick={this.checkListClick.bind(this)}>Чек Лист</a>
                <a href="#" className={tagTabClass} onClick={this.tagExplorerClick.bind(this)}>Поиск тегов</a>
            </div>
        );
    }
}

ControlPanel.propTypes = {
    activeCheckListTab: PropTypes.bool.isRequired
};