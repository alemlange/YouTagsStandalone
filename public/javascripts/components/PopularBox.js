import React from "react"

export default class PopularBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { youTubePopular, trends } = this.props;

        return (
            <div className="box">
                <div className="pop-container col-md-6">
                    <h3>Популярно на ютубе</h3>
                    <div className="popular-youtube">{youTubePopular}</div>
                </div>

                <div className="pop-container col-md-6">
                    <h3>Лидеры трендов</h3>
                    <div className="google-trends">{trends}</div>
                </div>
            </div>
        );
    }
}