import React from "react"
import {render} from "react-dom"
import {overlayOk} from "./javascripts/overlay.js"

Window.overlayOk = overlayOk;
render(
    <div>
    </div>,
    document.getElementById("root")
)