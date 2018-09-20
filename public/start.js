import registerServiceWorker from './registerServiceWorker'
import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import store from "./javascripts/store"
import {overlayOk} from "./javascripts/overlay.js"
import YouTagsTool from "./javascripts/components/YouTagsTool"

//set overlay agree function
Window.overlayOk = overlayOk;

render(
    <Provider store={store}>
        <YouTagsTool/>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();