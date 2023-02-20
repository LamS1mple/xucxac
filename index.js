const imgs = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png"
 ,"images/dice4.png" , "images/dice5.png" , "images/dice6.png"];

const p1 = document.querySelector(".img1");
const p2 = document.querySelector(".img2");
const soLuong1 = Math.floor(Math.random() * 6);
const soLuong2 = Math.floor(Math.random() * 6);

p1.setAttribute("src",imgs[soLuong1]);
p2.setAttribute("src",imgs[soLuong2]);
const setText = document.getElementById("text");
if (soLuong1 === soLuong2){
    setText.innerHTML = "Hòa"
}
else{
    if (soLuong1 > soLuong2){
        setText.innerHTML = "1 thắng 2";

    }
    else{
        setText.innerHTML = "2 thắng 1";

    }
}


