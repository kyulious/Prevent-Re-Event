var $wrap = $("#wrap");
var $btns = $wrap.find(".left li");
var $boxs  = $wrap.find(".right>div");
var speed = 500;
var enableClick = true;
var delayTime = convertSpeed("#wrap .right>div p");
console.log(delayTime);

$btns.on("click", function(e){
    e.preventDefault();
    
    var isOn = $(this).children("a").hasClass("on");    
    if(isOn) return;

    if(enableClick){
        var i = $(this).index();
        activation(i); 
        enableClick = false;
    }      
});

function activation(index){
    console.log("activation start!!!");
    $btns.children("a").removeClass("on");
    $btns.eq(index).children("a").addClass("on");

    $boxs.removeClass("on");    

    $boxs.fadeOut(speed);
    $boxs.eq(index).fadeIn(speed,function(){
        $boxs.eq(index).addClass("on");

        setTimeout(function(){
            enableClick = true;
        },delayTime);        
    });
}

function convertSpeed(el){   
    var delay = $(el).css("transition-duration"); 
    delay = delay.split("s"); 
    delay = delay[0]; 
    delay = parseFloat(delay); 
    delay = delay * 1000; 
    return delay;
    
   //return parseFloat( $(el).css("transition-duration").split("s")[0] ) * 1000;
}