import React from "react"

export default class AutoBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { googleAuto, youtubeAuto, yandexAuto} = this.props;

        return (
            <div className="box">
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