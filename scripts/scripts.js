const features = document.querySelectorAll('.feature');
if (features.length > 0) {
    features[0].classList.add('active');
}
features.forEach(feature => {
    feature.addEventListener('click', () => {
        features.forEach(f => f.classList.remove('active'));
        feature.classList.add('active');
    });
});
