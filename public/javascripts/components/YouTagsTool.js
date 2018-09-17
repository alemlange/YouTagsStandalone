import React from "react"
import ControlPanel from "ControlPanel";

export default class YouTagsTool extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="te-explorer">

                <ControlPanel/>

                <div id="check-list-row" className="steps-container">
                    <div className="list-element">
                        <input type="checkbox" className="step-checkbox"/><span className="step-title">1. Переименовываем видео файл</span><img className="caret-down" src="/images/caret-down.png"/>
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

            </div>
        );
    }
}