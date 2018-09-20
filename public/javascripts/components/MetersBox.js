import React from "react"

export default class MetersBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isFetchingData, score, searchValueQuality, videoQuality, text } = this.props;

        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};

        let meterBoxStyle = isFetchingData? invisibleStyle: visibleStyle;

        //choosing score color based on score
        let tagScoreStyle = {color: "#f00"};
        if (score >= 25 && score < 40) {
            tagScoreStyle = {color: "#ef7171"};
        }
        else if (score >= 40 && score < 60) {
            tagScoreStyle = {color: "#ffdc28"};
        }
        else if (score >= 60 && score < 70) {
            tagScoreStyle = {color: "#68f1ae"};
        }
        else if (score >= 70 && score <= 100) {
            tagScoreStyle = {color: "#03a958"};
        }

        return (
            <div className="box" style={meterBoxStyle}>
                <div className="row speedometer-section">
                    <div className="col-md-6 meter">
                        <h3>Объем поиска</h3>
                        <img src={"/images/sm_" + searchValueQuality +".png"}/>
                    </div>
                    <div className="col-md-6 meter">
                        <h3>Конкуренция</h3>
                        <img src={"/images/sm_" + videoQuality +".png"}/>
                    </div>
                </div>
                <div className="row rating-section">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="tag-rating-label">Рейтинг тега</h3>
                                <div className="meter-count" style={tagScoreStyle}>{score}</div>
                            </div>

                            <div className="col-md-8">
                                <p className="points-exp">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}