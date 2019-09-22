(function() {
    var elements = document.querySelectorAll(".fadelement");
    var windowHeight = window.innerHeight;
    var offsetFromBottom = 50;

    function onResize() {
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop <= windowHeight - offsetFromBottom) {
                element.classList.add("fade-in-element");
                element.classList.remove("fadelement");
            }
        }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", onResize);

    onResize();
    checkPosition();
})();
