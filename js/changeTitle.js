var originalTitle = document.title;
window.onblur = function() {
    document.title = "Vuelve aquí para ver mis RRSS";
};
window.onfocus = function() {
    document.title = originalTitle;
};