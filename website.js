const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elems = document.querySelectorAll(".elem");
var fixed = document.querySelector("#fixed-img");

elems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var image = elem.getAttribute("data-image");
        fixed.style.display = "block";
        fixed.style.backgroundImage = `url(${image})`;
    });

    elem.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    });
});

