import React from "react"
import MetersBox from "./MetersBox";
import PopularBox from "./PopularBox";
import AutoBox from "./AutoBox";

export default class TagFinder extends React.Component {
    constructor(props) {
        super(props);
    }

    findBtnClick(e){
        e.preventDefault();
        this.props.onFindClick(this.props.tagFinder.findText);
    }

    findKeyPressed(e){
        if (e.which === 13) {
            this.props.onFindClick(this.props.tagFinder.findText);
        }
    }

    textChanged(e){
        let text = e.target.value;
        this.props.onTextChange(text);
    }

    render() {
        const { isFired, isFetchingData, findText, tagRating, popular, autoSugest } = this.props.tagFinder;
        const isVisible = this.props.isVisible;

        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};

        let tagFinderStyle = isVisible ? visibleStyle: invisibleStyle;

        let searchImgVisibility = isFired ? invisibleStyle: visibleStyle;
        let resultsVisibility = isFired ? visibleStyle: invisibleStyle;

        let loadBoxStyle = isFetchingData ? visibleStyle: invisibleStyle;


        return (
            <div style={tagFinderStyle}>
                <div className="search-section">
                    <div className="search-control">
                        <input className="te-tag-input" value={findText} placeholder="Поиск тегов" onKeyPress={this.findKeyPressed.bind(this)} onChange={this.textChanged.bind(this)}/>
                        <a href="#" className="te-find btn btn-sm btn-outline-secondary" onClick={this.findBtnClick.bind(this)}/>
                    </div>
                </div>

                <div className="search-img-section" style={searchImgVisibility}>
                    <img className="search-img-big" src="/images/search.png"/>
                    <br/>
                    <h3>Введите текст и нажмите поиск</h3>
                </div>

                <div className="results" style={resultsVisibility}>

                    <div className="box" style={loadBoxStyle}>
                        <div className="col-md-12 meter">
                            <img className="load-img" src="/images/load.gif"/>
                            <h3>Вычисляем статистику тега...</h3>
                        </div>
                    </div>

                    <MetersBox isFetchingData={isFetchingData}
                               score = {tagRating.score}
                               searchValueQuality = {tagRating.searchValueQuality}
                               videoQuality = {tagRating.videoQuality}
                               text = {tagRating.text}
                    />

                    <PopularBox youTubePopular={popular.youtube} trends={popular.trends}/>

                    <AutoBox yandex={autoSugest.yandex} youtube={autoSugest.youtube} google={autoSugest.google}/>
                </div>
            </div>

        );
    }
}