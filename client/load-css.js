export function LoadCss(cssURL) {
    return new Promise(function (resolve) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssURL;
        document.head.appendChild(link);
        link.onload = function () {
            resolve();
        };
    });
}