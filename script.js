document.getElementById("colorbtn").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0DB4F", "#8E44AD"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
const colorSelect = document.getElementById("color-select");
colorSelect.addEventListener("change", function() {
    document.body.style.backgroundColor = this.value;
});
const resetButton = document.getElementById("resetbtn");
resetButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});