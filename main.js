let star = document.getElementById("star")
let moon = document.getElementById("moon")
let mountain1 = document.getElementById("mountain1")
let mountain2 = document.getElementById("mountain2")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let soltan = document.querySelector(".soltan")

window.onscroll= function(){
    let value = scrollY
    star.style.left= value*0.5 + 'px'
    moon.style.top = value*4 + 'px'
    mountain1.style.top = value*2 + 'px'
    mountain2.style.top = value*1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left= value*3 + 'px'
    soltan.style.fontSize= value + 'px'

    if(scrollY >= 67){
        soltan.style.fontSize = 67 + 'px';
        soltan.style.position = "fixed";
    }
    if(scrollY >=402){
        soltan.style.display = "none";
    }else{
        soltan.style.display = "block";
    }
    if(scrollY >=84){
        document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f);"
    }else{
        document.querySelector(".main").style.background = "linear-gradient(#200016,#1000);"
    }

}
