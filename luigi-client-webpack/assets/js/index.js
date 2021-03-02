import LuigiClient from '@luigi-project/client'

//getMyContext();
console.log("processing ... " + LuigiClient.getContext())
LuigiClient.addInitListener(function (context) {
    console.log("initiated context", context);
    navigateTo(context);
});
LuigiClient.addContextUpdateListener(function (context) {
    console.log("updated context", context);
    navigateTo(context);
});

function navigateTo(context) {
    const token = getToken();
    const origin = window.location.origin;
    const lang = LuigiClient.uxManager().getCurrentLocale();
    if (context && context.actionUrl.includes("?")) {
        console.log(`${origin}/${context.actionUrl}&ORIGIN=LUIGI&language=${lang}&token=${token}`)
        window.location.href = `${origin}/${context.actionUrl}&ORIGIN=LUIGI&language=${lang}&token=${token}`;
    } else {
        console.log(`${origin}/${context.actionUrl}?ORIGIN=LUIGI&language=${lang}&token=${token}`)
        window.location.href = `${origin}/${context.actionUrl}?ORIGIN=LUIGI&language=${lang}&token=${token}`;
    }
}
function getToken() {
    const authData = sessionStorage.getItem("luigi.auth");
    console.log(authData)
    if (authData) {
        return JSON.parse(authData).accessToken;
    }
    return null;
}