import React from "react"

export default class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="control-panel">
                <a href="#" className="btn menu-btn"/>
                <a href="#" className="check-control section-link active">Чек Лист</a>
                <a href="#" className="tag-control section-link">Поиск тегов</a>
            </div>
        );
    }
}