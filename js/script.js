let bars = document.getElementsByClassName("bar")
let navbar = document.getElementsByTagName("nav")[0]
let preloader =  document.getElementsByClassName("preloader")[0]




window.onload = ()=>{
    setTimeout(()=>{
        preloader.style.display = "none";
    }, 5000)
    
    setTimeout(()=>{

        let barAnimationDelay = 0.025;
        
        for(let i = 1; i<bars.length+1; i++){
            bars[i-1].style.animationName = "loader"
            bars[i-1].style.animationDuration = "1s"
            bars[i-1].style.animationTimingFunction = "ease-in-out"
            bars[i-1].style.animationDelay = `${barAnimationDelay*i}s`
            
        }
        
        navbar.style.animation =  "fadeNav 1s ease-in-out 0.5s"
        
        setTimeout(()=>{
            navbar.style.opacity = "1";
        }, 1000)
    }, 5250)
}


    