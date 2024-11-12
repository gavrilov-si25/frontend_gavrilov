const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('click', () => {
        features.forEach(f => f.classList.remove('active'));
        feature.classList.add('active');
    });
});
