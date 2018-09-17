import React from "react"
import {connect} from "react-redux"
import {ToCheckListAction, ToTagFinderAction} from "../actions"
import ControlPanel from "./ControlPanel";

class YouTagsTool extends React.Component {
    constructor(props) {
        super(props);
    }

    click(){
        this.props.testClick();
    }

    render() {
        let visibleStyle = {display: "block"};
        let invisibleStyle = {display: "none"};
        let checkListStyle ={};
        let tagsFinderStyle={};
        if (this.props.checkListActive){
            checkListStyle = visibleStyle;
            tagsFinderStyle = invisibleStyle;
        }
        else{
            checkListStyle = invisibleStyle;
            tagsFinderStyle = visibleStyle;
        }

        return (
            <div className="te-explorer">

                <ControlPanel/>

                <div id="check-list-row" style={checkListStyle} className="steps-container">
                    <div className="list-element" onClick={this.click.bind(this)}>
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">1. Переименовываем видео файл {this.props.checkListActive}</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">2. Подбираем поисковые теги</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">3. Подбираем тематические теги</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>


                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">4. Подбираем брендирующие теги</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">5. Придумываем название для видео</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">6. Составляем описание к видео</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">7. Создаем превью</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">8. Настраиваем заставки и подсказки</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">9. Создадим плейлисты</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>

                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">10. Ищем трафик на видео.</span><img className="caret-down" src="/images/caret-down.png"/>
                    </div>
                </div>

                <div id="tag-row" style={tagsFinderStyle}>

                    <div className="search-section">
                        <div className="search-control">
                            <input className="te-tag-input" placeholder="Поиск тегов"/>
                            <a className="te-find btn btn-sm btn-outline-secondary"/>
                        </div>
                    </div>

                    <div className="search-img-section">
                        <img className="search-img-big" src="/images/search.png"/>
                            <br/>
                            <h3>Введите текст и нажмите поиск</h3>
                    </div>

                    <div className="results" style={invisibleStyle}>

                        <div className="row load-gif-container box">
                            <div className="col-md-12 meter">
                                <img className="load-img" src="/images/load.gif"/>
                                    <h3>Вычисляем статистику тега...</h3>
                            </div>
                        </div>

                        <div className="meters-container box" style={invisibleStyle}>
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

                                            <div className="meter-count">..</div>
                                        </div>

                                        <div className="col-md-8">
                                            <p className="points-exp">Мало поиска средняя конкуренция</p>
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
                                    <ul className="google-auto auto-list"/>
                            </div>

                            <div className="col-lg-4 auto-section">
                                <img src="/images/youtube.png"/>
                                    <ul className="youtube-auto auto-list"/>
                            </div>

                            <div className="col-lg-4 auto-section">
                                <img src="/images/yandex.png"/>
                                    <ul className="yandex-auto auto-list"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        testClick: () => dispatch(ToTagFinderAction())
    }
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(YouTagsTool);