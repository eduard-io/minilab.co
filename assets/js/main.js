document.querySelectorAll(".clickable-article").forEach(article => {
    article.addEventListener("click", function () {
        window.location.href = this.dataset.href;
    });
});