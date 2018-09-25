import React from "react"
import MetersBox from "./MetersBox";
import PopularBox from "./PopularBox";
import AutoBox from "./AutoBox";
import "./styles/TagFinder.css"

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

        let tagFinderStyle = isVisible ? "shown-content": "hidden-content";
        let searchImgVisibility = isFired ? "hidden-content": "shown-content";
        let resultsVisibility = isFired ? "shown-content": "hidden-content";
        let loadBoxStyle = isFetchingData ? "shown-content": "hidden-content";


        return (
            <div className={tagFinderStyle}>
                <div className="tf-search-section">
                    <div className="tf-search-control">
                        <input className="tf-tag-input" value={findText} placeholder="Поиск тегов" onKeyPress={this.findKeyPressed.bind(this)} onChange={this.textChanged.bind(this)}/>
                        <a href="#" className="tf-find btn btn-sm btn-outline-secondary" onClick={this.findBtnClick.bind(this)}/>
                    </div>
                </div>

                <div className={searchImgVisibility + " tf-search-img-section"}>
                    <img className="tf-search-img-big" src="/images/search.png"/>
                    <br/>
                    <h3>Введите текст и нажмите поиск</h3>
                </div>

                <div className={resultsVisibility + " tf-results"}>

                    <div className={loadBoxStyle + " tf-box"}>
                        <div className="col-md-12 tf-meter">
                            <img className="tf-load-img" src="/images/load.gif"/>
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