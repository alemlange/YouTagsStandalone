import React from "react"
import "./styles/AutoBox.css"
import PropTypes from 'prop-types';

export default class AutoBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { yandex, youtube, google} = this.props;

        let yandexAuto = yandex.map((element, i)=>{return <li key={i}>{element}</li>});
        let youtubeAuto = youtube.map((element, i)=>{return <li key={i}>{element}</li>});
        let googleAuto = google.map((element, i)=>{ return <li key={i}>{element}</li>});

        return (
            <div className="auto-box">
                <div className="col-lg-4 auto-section">
                    <img src="/images/google.png"/>
                    <ul className="auto-list">{googleAuto}</ul>
                </div>

                <div className="col-lg-4 auto-section">
                    <img src="/images/youtube.png"/>
                    <ul className="auto-list">{youtubeAuto}</ul>
                </div>

                <div className="col-lg-4 auto-section">
                    <img src="/images/yandex.png"/>
                    <ul className="auto-list">{yandexAuto}</ul>
                </div>
            </div>
        );
    }
}

AutoBox.propTypes = {
    yandex: PropTypes.array.isRequired,
    youtube: PropTypes.array.isRequired,
    google: PropTypes.array.isRequired
};
