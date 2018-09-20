import React from "react"
import PropTypes from 'prop-types';

export default class PopularBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { youTubePopular, trends } = this.props;

        let trendsList = trends.map((element, i)=>{
            return <div key={i} className='element'>
                <div className='popular-count'>{element.score}%</div>
                <span>{element.text}</span>
            </div>});

        let youTubeList = youTubePopular.map((element, i)=>{
            return <div key={i} className='element'>
                <img className='diamond-rating' src={"/images/" + "d" + element.score + ".png"}/>
                <span className="popular-text">{element.text}</span>
            </div>});

        return (
            <div className="box">
                <div className="pop-container col-md-6">
                    <h3>Популярно на ютубе</h3>
                    <div className="popular-youtube">{youTubeList}</div>
                </div>

                <div className="pop-container col-md-6">
                    <h3>Лидеры трендов</h3>
                    <div className="google-trends">{trendsList}</div>
                </div>
            </div>
        );
    }
}


PopularBox.propTypes = {
    youTubePopular: PropTypes.array.isRequired,
    trends: PropTypes.array.isRequired
};