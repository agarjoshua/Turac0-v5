$(document).ready(function(){
    var docWidth = document.documentElement.offsetWidth;

        [].forEach.call(
            document.querySelectorAll('*'),
            function (el) {
                if (el.offsetWidth > docWidth) {
                    console.log(el);
                }
            }
        );

    // Adds outline to every html element.
    
        [].forEach.call($("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) });
});