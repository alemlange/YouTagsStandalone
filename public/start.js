import React from "react"
import {render} from "react-dom"
import {overlayOk} from "./javascripts/overlay.js"
import YouTagsTool from "./javascripts/components/YouTagsTool"

Window.overlayOk = overlayOk;
render(
    <YouTagsTool/>,
    document.getElementById("root")
)