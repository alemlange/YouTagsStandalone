import CookieManager from "./cookieManager.js";

export function overlayOk(){
    let mngr = new CookieManager();
    mngr.setCookie("GreetingOk", true, { expires: 2147483647, path: "/" });
}