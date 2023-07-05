const countdown=document.querySelector(".countdown");
let time=10;

countdown.innerHTML=time--;
setTimeout(()=>{
    countdown.innerHTML=time--;
    setTimeout(()=>{
        countdown.innerHTML=time--;
        setTimeout(()=>{
            countdown.innerHTML=time--;
            setTimeout(()=>{
                countdown.innerHTML=time--;
                setTimeout(()=>{
                    countdown.innerHTML=time--;
                    setTimeout(()=>{
                        countdown.innerHTML=time--;
                        setTimeout(()=>{
                            countdown.innerHTML=time--;
                            setTimeout(()=>{
                                countdown.innerHTML=time--;
                                setTimeout(()=>{
                                    countdown.innerHTML=time--;
                                    setTimeout(()=>{
                                        countdown.innerHTML= "HAPPY INDEPENDENCE DAY";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);