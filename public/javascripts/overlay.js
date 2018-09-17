import CookieManager from "./cookieManager.js";

export function overlayOk(){
    let manager = new CookieManager();
    manager.setCookie("GreetingOk", true, { expires: 2147483647, path: "/" });

    let overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}