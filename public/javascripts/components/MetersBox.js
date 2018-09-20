import React from "react"

export default class MetersBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isFetchingData, tagRating, } = this.props;

        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};

        let meterBoxStyle = isFetchingData? invisibleStyle: visibleStyle;

        let tagScoreStyle = {color: "#f00"};
        if (tagRating.score >= 25 && tagRating.score < 40) {
            tagScoreStyle = {color: "#ef7171"};
        }
        else if (tagRating.score >= 40 && tagRating.score < 60) {
            tagScoreStyle = {color: "#ffdc28"};
        }
        else if (tagRating.score >= 60 && tagRating.score < 70) {
            tagScoreStyle = {color: "#68f1ae"};
        }
        else if (tagRating.score >= 70 && tagRating.score <= 100) {
            tagScoreStyle = {color: "#03a958"};
        }

        return (
            <div className="box" style={meterBoxStyle}>
                <div className="row speedometer-section">
                    <div className="col-md-6 meter">
                        <h3>Объем поиска</h3>
                        <img src={"/images/sm_" + tagRating.searchValueQuality +".png"}/>
                    </div>
                    <div className="col-md-6 meter">
                        <h3>Конкуренция</h3>
                        <img src={"/images/sm_" + tagRating.videoQuality +".png"}/>
                    </div>
                </div>
                <div className="row rating-section">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="tag-rating-label">Рейтинг тега</h3>
                                <div className="meter-count" style={tagScoreStyle}>{tagRating.score}</div>
                            </div>

                            <div className="col-md-8">
                                <p className="points-exp">{tagRating.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}