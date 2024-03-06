function colorSwitcher (color) {
    return function(){
        document.body.style.backgroundColor = `${color}`;
    }
}

document.querySelector("#red_btn").onclick = colorSwitcher( "red" );
document.querySelector("#blue_btn").onclick = colorSwitcher("blue");
document.querySelector("#green_btn").onclick = colorSwitcher("green");
document.querySelector("#sky_btn").onclick = colorSwitcher("skyblue");
document.querySelector("#black_btn").onclick = colorSwitcher("black");