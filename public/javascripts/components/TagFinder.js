import React from "react"

export default class TagFinder extends React.Component {
    constructor(props) {
        super(props);
    }

    findBtnClick(e){
        e.preventDefault();
        this.props.onFindClick(this.props.tagFinder.findText);
    };

    textChanged(e){
        let text = e.target.value;
        this.props.onTextChange(text);
    }

    render() {
        const { isFired, isFetchingData, findText, tagRating, popular, autoSugest } = this.props.tagFinder;
        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};

        let searchImgVisibility = isFired ? invisibleStyle: visibleStyle;
        let resultsVisibility = isFired ? visibleStyle: invisibleStyle;

        let loadBoxStyle = isFetchingData ? visibleStyle: invisibleStyle;
        let meterBoxStyle = isFetchingData? invisibleStyle: visibleStyle;

        let yandexAuto= autoSugest.yandex.map((element, i)=>{return <li key={i}>{element}</li>});
        let youtubeAuto= autoSugest.youtube.map((element, i)=>{return <li key={i}>{element}</li>});
        let googleAuto= autoSugest.google.map((element, i)=>{ return <li key={i}>{element}</li>});

        return (
            <div>
                <div className="search-section">
                    <div className="search-control">
                        <input className="te-tag-input" value={findText} placeholder="Поиск тегов" onChange={this.textChanged.bind(this)}/>
                        <a href="#" className="te-find btn btn-sm btn-outline-secondary" onClick={this.findBtnClick.bind(this)}/>
                    </div>
                </div>

                <div className="search-img-section" style={searchImgVisibility}>
                    <img className="search-img-big" src="/images/search.png"/>
                    <br/>
                    <h3>Введите текст и нажмите поиск</h3>
                </div>

                <div className="results" style={resultsVisibility}>

                    <div className="row load-gif-container box" style={loadBoxStyle}>
                        <div className="col-md-12 meter">
                            <img className="load-img" src="/images/load.gif"/>
                            <h3>Вычисляем статистику тега...</h3>
                        </div>
                    </div>

                    <div className="meters-container box" style={meterBoxStyle}>
                        <div className="row speedometer-section">
                            <div className="col-md-6 meter search-value">
                                <h3>Объем поиска</h3>
                                <img className="sv-img-meter" src="/images/sm_md.png"/>
                            </div>
                            <div className="col-md-6 meter search-count">
                                <h3>Конкуренция</h3>
                                <img className="videoc-img-meter" src="/images/sm_md.png"/>
                            </div>
                        </div>
                        <div className="row rating-section">
                            <div className="col-md-12">
                                <h3>Рейтинг тега</h3>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="meter-count">{tagRating.score}</div>
                                    </div>

                                    <div className="col-md-8">
                                        <p className="points-exp">{tagRating.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row box">
                        <div className="pop-container col-md-6">
                            <h3>Популярно на ютубе</h3>
                            <div className="popular-youtube"/>
                        </div>

                        <div className="pop-container col-md-6">
                            <h3>Лидеры трендов</h3>
                            <div className="google-trends"/>
                        </div>
                    </div>

                    <div className="row box">
                        <div className="col-lg-4 auto-section">
                            <img src="/images/google.png"/>
                            <ul className="google-auto auto-list">{googleAuto}</ul>
                        </div>

                        <div className="col-lg-4 auto-section">
                            <img src="/images/youtube.png"/>
                            <ul className="youtube-auto auto-list">{youtubeAuto}</ul>
                        </div>

                        <div className="col-lg-4 auto-section">
                            <img src="/images/yandex.png"/>
                            <ul className="yandex-auto auto-list">{yandexAuto}</ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}