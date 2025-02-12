//Ülesanne kolmP funktsioon:
document.getElementById("colorbtn").addEventListener("click", function() {
    const colorMap = new Map([
        ["#FF5733", "#3357FF"],
        ["#33FF57", "#8E44AD"],
        ["#3357FF", "#FF5733"],
        ["#F0DB4F", "#FF00A6"],
        ["#8E44AD", "#33FF57"],
        ["#F0DB4F", "#FF00A6"]
    ]);

    const colors = Array.from(colorMap.keys());
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;

    const h1 = document.querySelector("h1");
    h1.style.color = colorMap.get(randomColor);
});


//Ülesanne kaks funktsioon:
document.getElementById("resetbtn").addEventListener("click", function() {
    const h1 = document.querySelector("h1");
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
});
