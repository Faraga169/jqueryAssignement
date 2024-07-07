/// <reference types="../@types/jquery" />








$(document).ready(function(){

    $('.navigate button').on('click',function(){
        let offset=$('#home').offset().top;
        $('html').animate({scrollTop:`${offset}px`},1000)
    })

    $('.layer span').hide(2000,function(){
        $('.layer').fadeOut(2000,function(){
            $('html').css('overflow','auto')
        });
    })

    $('a[href^="#"]').on('click',function(e){
        let x=e.target;
        let id=$(x).attr("href");
        let offset=$(id).offset().top;
        $('html').animate({scrollTop:`${offset}px`},1000)
    })
    let sidebarinnerwidth=$('.sidebar').outerWidth();
    $('.sidebar').animate({marginLeft:`${-sidebarinnerwidth}px`},1000);
    $('.opennav').animate({marginLeft:`-15%`},1000);
    $('.opennav').on('click',function(){
        
        let sidebarinnermargin=$('.sidebar').css('marginLeft');
        if(sidebarinnermargin==='0px'){
            $('.closebtn').on('click',function(){
                $('.sidebar').animate({marginLeft:`${-sidebarinnerwidth}px`},1000);
                $('.opennav').animate({marginLeft:`-15%`},1000);
            })
            
        }
    
        else{
            $('.sidebar').animate({marginLeft:`0px`},1000);
            $('.opennav').animate({marginLeft:`0px`},1000);
        }
       
    })
    
    
    
    $(".singerbox").on("click", function (e) {
        $(".innersingerbox").not($(e.target).nextAll()).slideUp(500);
        $(e.target).nextAll().slideToggle(500);
      });
    
    
    
    function eventdate(date){
    const counter=setInterval(() =>{
        const now=new Date();
    const event=new Date(date);
    const duration=event - now;
    console.log(now);
    console.log(event);
    console.log(duration);
    const day=Math.floor(duration/(1000*60*60*24));
    const hour=Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
    
    const min=Math.floor((duration%(1000*60*60))/(1000*60))  
    const sec=Math.floor((duration%(1000*60))/(1000))  
    $('.day').html(`${day} D`)
    $('.hour').html(`${hour} h`)
    $('.min').html(`${min} m`)
    $('.sec').html(`${sec} s`)
    
    if(duration<0){
        clearInterval(counter);
            $('.day').html(`Soon`)
            $('.hour').html(`Next`)
            $('.min').html(`Event`)
            $('.sec').html(`Time`)
    }
    
    },1000)    
    
    }
    
    eventdate("Dec 7, 2024 12:00:00");
    
    
    let max=100;
    
    $("textarea").on('input',function(){
        const letternumber=max - $(this).val().length;
        
        if(letternumber>0){
            $('#number').html(letternumber)
           
        }
    
        else{
            $('#number').html(`Your available character finished`)
        }
    })
})