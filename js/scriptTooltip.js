(function () {


    var globalTooltip = null;


    function assignEvents(elems, type, event) {

        for (var i = 0; i < elems.length; i++) {

            elems[i].addEventListener(type, event, false);

        }

    }


    function createToolTip(text, options) {

        var tooltip = document.createElement('div');

        tooltip.className = 'tooltip hidden';
        tooltip.className = 'tooltip';
        tooltip.appendChild(document.createTextNode(text));
        document.body.appendChild(tooltip);

        tooltip.style.top = (options.y - tooltip.offsetHeight - 10 + 'px');
        tooltip.style.left = options.x + (options.w / 2) - (tooltip.offsetWidth / 2) + 'px';


        globalTooltip = tooltip;
    }


    function showTooltip(e) {

        var options = {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        };

        var text = e.target.getAttribute('title');

        createToolTip(text, options);

        e.target.removeAttribute('title');
    }

    function removeTooltip(e) {

        e.target.setAttribute('title', globalTooltip.textContent);

        globalTooltip.parentNode.removeChild(globalTooltip);

    }


    function init(elems) {

        assignEvents(elems, 'mouseenter', showTooltip);
        assignEvents(elems, 'mouseleave', removeTooltip);

    }


    window.t00ltip = init;
    console.log(t00ltip);

})();