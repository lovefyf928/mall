$(function(){
   $(".btn").bind('click',function () {
       $(".content").attr('style',function(){
          $(this).css("display","none");
       });
       $(".main").css('display','block');
   }) 
});