import React from "react"
import PropTypes from 'prop-types';
import "./styles/PopularBox.css"

export default class PopularBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { youTubePopular, trends } = this.props;

        let trendsList = trends.map((element, i)=>{
            return <div key={i} className='popular-element'>
                <div className='popular-count'>{element.score}%</div>
                <span>{element.text}</span>
            </div>});

        let youTubeList = youTubePopular.map((element, i)=>{
            return <div key={i} className='popular-element'>
                <img className='popular-diamond-rating' src={"/images/" + "d" + element.score + ".png"}/>
                <span className="popular-text">{element.text}</span>
            </div>});

        return (
            <div className="popular-box">
                <div className="popular-container col-md-6">
                    <h3>Популярно на ютубе</h3>
                    <div className="popular-youtube">{youTubeList}</div>
                </div>

                <div className="popular-container col-md-6">
                    <h3>Лидеры трендов</h3>
                    <div className="popular-google">{trendsList}</div>
                </div>
            </div>
        );
    }
}


PopularBox.propTypes = {
    youTubePopular: PropTypes.array.isRequired,
    trends: PropTypes.array.isRequired
};