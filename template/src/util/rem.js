(function(doc,win) {
    var docEl = document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        reSize = () => {
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) {
                return;
            }
            docEl.style.fontSie = clientWidth / 6.4 + 'px';
        };

    win.addEventListener(resizeEvt, reSize, false);
    doc.addEventListener('DOMContentLoaded', reSize, false)
        
})(document, window)