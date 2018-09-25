import React from "react"
import "./styles/MetersBox.css"

export default class MetersBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { isFetchingData, score, searchValueQuality, videoQuality, text } = this.props;

        let meterBoxStyle = isFetchingData? "hidden-content": "shown-content";

        //choosing score color based on score
        let tagScoreStyle = "meters-meter-worst";
        if (score >= 25 && score < 40) {
            tagScoreStyle = "meters-meter-bad";
        }
        else if (score >= 40 && score < 60) {
            tagScoreStyle = "meters-meter-middle";
        }
        else if (score >= 60 && score < 70) {
            tagScoreStyle = "meters-meter-good";
        }
        else if (score >= 70 && score <= 100) {
            tagScoreStyle = "meters-meter-perfect";
        }

        return (
            <div className={meterBoxStyle + " meters-box"}>
                <div className="row meters-speedometer-section">
                    <div className="col-md-6 meters-meter">
                        <h3>Объем поиска</h3>
                        <img src={"/images/sm_" + searchValueQuality +".png"}/>
                    </div>
                    <div className="col-md-6 meters-meter">
                        <h3>Конкуренция</h3>
                        <img src={"/images/sm_" + videoQuality +".png"}/>
                    </div>
                </div>
                <div className="row meters-rating-section">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="meters-tag-rating-label">Рейтинг тега</h3>
                                <div className={tagScoreStyle + " meters-meter-count"} >{score}</div>
                            </div>

                            <div className="col-md-8">
                                <p className="meters-points-exp">{text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}