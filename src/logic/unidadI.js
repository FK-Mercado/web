console.log('unidadI.js loaded');
document.addEventListener('click', e => {
    const card = e.target.closest('.tema-card');
    if (card && card.dataset.link) {
        window.location.hash = card.dataset.link;
    }
});