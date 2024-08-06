var initialPath=`M 50 80 Q 500 80 950 80 `
var finalPath=`M 50 80 Q 500 80 950 80`
var line=document.querySelector(".line")
line.addEventListener("mousemove",function(evt){
    var path =`M 50 80 Q ${evt.x} ${evt.y} 950 80`;
    
    gsap.to("svg path",{
        attr:{d:path},
    })
})
line.addEventListener("mouseleave",(evt)=>{
    gsap.to("svg path",{
        attr:{d:finalPath},
    })

})
