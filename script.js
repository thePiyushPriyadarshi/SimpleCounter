let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let display=document.getElementById('display');
let cnt=0;
plus.addEventListener('click',function(){
    cnt++;
    display.innerHTML=cnt;
});
minus.addEventListener('click',function(){  
    cnt--;
    display.innerHTML=cnt;
}); 