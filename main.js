let n = document.getElementById('name');
let leftSide = document.getElementById("leftside");

let titles = document.querySelectorAll('.title-color');
let points = document.querySelectorAll('.point');
let icons = document.querySelectorAll('.fa');


n.addEventListener('click',function(){
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    
    titles.forEach(element => {
    element.style.color = `rgb(${c1},${c2},${c3})`;
    
    })

    points.forEach(p =>{
        p.style.background = `rgb(${c1},${c2},${c3})`;
    })
    icons.forEach(i =>{
        i.style.background = `rgb(${c1},${c2},${c3})`;
    })
    leftSide.style.background = `rgb(${c1},${c2},${c3})`;
    
});

