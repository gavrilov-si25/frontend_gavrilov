var cards = [];
function createCardTemplate(_a) {
    var title = _a.title, description = _a.description, image = _a.image;
    return "\n    <div class=\"card\">\n      <h3 class=\"card__title\">".concat(title, "</h3>\n      <p class=\"card__description\">").concat(description, "</p>\n      <img src=\"").concat(image, "\" alt=\"").concat(title, "\" class=\"card__image\">\n    </div>\n  ");
}
function displayCard(cardData) {
    var cardDisplay = document.querySelector('.info__card-display');
    if (!cardDisplay)
        return;
    cardDisplay.innerHTML = createCardTemplate(cardData);
}
function handleFeatureClicks() {
    var features = document.querySelectorAll('.info__feature');
    features.forEach(function (feature, index) {
        feature.addEventListener('click', function () {
            features.forEach(function (f) { return f.classList.remove('info__feature--active'); });
            feature.classList.add('info__feature--active');
            if (cards[index]) {
                displayCard(cards[index]);
            }
        });
    });
}
function initCards() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then(function (response) { return response.json(); })
        .then(function (json) {
        cards = json.map(function (item) { return ({
            title: item.title,
            description: item.body,
            image: "img/info-image.png"
        }); });
        if (cards.length > 0) {
            displayCard(cards[0]);
            var features = document.querySelectorAll('.info__feature');
            if (features.length > 0) {
                features[0].classList.add('info__feature--active');
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    handleFeatureClicks();
    initCards();
});
