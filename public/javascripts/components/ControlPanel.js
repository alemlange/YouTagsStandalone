import React from "react"
import PropTypes from 'prop-types';

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
        let checkTabClass = this.props.activeCheckListTab ? "section-link active": "section-link";
        let tagTabClass = this.props.activeCheckListTab ? "section-link": "section-link active";

        //notice that menu button empties all steps execution state
        return (
            <div className="control-panel">
                <a href="#" className="btn menu-btn" onClick={this.menuBtnClick.bind(this)}/>
                <a href="#" className={checkTabClass} onClick={this.checkListClick.bind(this)}>Чек Лист</a>
                <a href="#" className={tagTabClass} onClick={this.tagExplorerClick.bind(this)}>Поиск тегов</a>
            </div>
        );
    }
}

ControlPanel.propTypes = {
    activeCheckListTab: PropTypes.bool.isRequired
};