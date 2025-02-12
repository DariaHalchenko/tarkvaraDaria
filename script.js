document.getElementById("colorbtn").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0DB4F", "#8E44AD"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
