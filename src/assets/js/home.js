$(function(){

    $.ajax({

    })

    // 全选全不选功能
    $('#chkAll').bind('click',function(){
        if(this.checked){
            $("input[id^='sid']").each(function(){
                $(this).prop('checked',true);
            })
        }else{
            $("input[id^='sid']").each(function(){
                $(this).prop('checked',false);
            })
        }
    });
    var allLength=$("input[id^=sid]").length;
    $("input[id^=sid]").each(function(){
        $(this).bind('click',function(){
            var selectedLength=$("input[id^=sid]:checked").length;
            if(selectedLength==allLength){
                $('#chkAll').prop("checked",true);
            }else{
                $('#chkAll').prop("checked",false);
            }
        })
    });
    //购物车商品 数量
    $(".jminputBg").blur(function(){
        var r = /^[1-9]+[0-9]*]*$/;
        var number = $("#number_1").val();
        if(!r.test(number)){
            alert("您输入的格式不正确！");
            $("#number_1").val($("#hidden_1").val());
        }else{
            console.log(number);
        }
    });


    $(".jmadd").bind('click',function(){
        var t = $(this).parent().find('input[class*=jminputBg]');
        t.val(parseInt(t.val())+1);
        console.log(t.val());
    });
    $(".jmmin").bind('click',function(){
       var t = $(this).parent().find('input[class*=jminputBg]');
       if(parseInt(t.val())-1<=1){
            t.val(1);
            console.log(t.val());
       }else{
           t.val(parseInt(t.val())-1);
           console.log(t.val());
       }
    });
    // 商品清除
    //清空购物
    $(".jmclear").bind("click",function () {
        $.ajax({
            type:"post",
            url:"url",
            data:{
              user_id:user_id,
            },
            dataType:"json",
            success:function(res){
                console.log(1);
            }
        })
    })
})



