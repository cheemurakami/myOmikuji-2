'use strict';
{
const todaysLuck = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"];
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    let todaysLuckNum = Math.floor(Math.random() * todaysLuck.length);
    btn.innerHTML = (todaysLuck[todaysLuckNum]);
}
);
// function HARRO() {
//    document.getElementById('btn').innerHTML = 'HARRO'; 
// }


}
