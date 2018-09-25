import registerServiceWorker from './registerServiceWorker'
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import store from "./store"
import {overlayOk} from "./helpers/overlay.js"
import YouTagsTool from "./components/YouTagsTool"

//set overlay agree function
Window.overlayOk = overlayOk;

render(
    <Provider store={store}>
        <YouTagsTool/>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();