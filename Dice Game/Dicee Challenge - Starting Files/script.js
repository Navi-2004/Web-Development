var ran1=Math.random()*6;
ran1=Math.floor(ran1)+1;
var img1=document.querySelectorAll("img")[0];
var s1="images/"+"dice"+ran1+".png";
img1.setAttribute("src",s1);
var ran2=Math.floor(Math.random()*6)+1;
var img2=document.querySelectorAll("img")[1];
var s2="images/"+"dice"+ran2+".png";
img2.setAttribute("src",s2);
if(ran1>ran2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
}
else if(ran2>ran1)
{
    document.querySelector("h1").textContent="Player 2 Wins";
}
else{
    document.querySelector("h1").textContent="It is a Draw";
}
