// Sürüklemeyi engelle
window.addEventListener("dragstart", (e) => {
    e.preventDefault();
});

// Sağ tıklamayı engelle
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// Metin seçmeyi engelle
document.addEventListener("selectstart", (e) => {
    e.preventDefault();
});
