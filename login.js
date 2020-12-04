function login()
{
    postRequest.open('post', Baseurl + '/session');
    postRequest.setRequestHeader('content-type', 'application/json');
    postRequest.send(JSON.stringify(Data));
    postRequest.onreadystatechange = function () {
        if (postRequest.readyState == 4) {
            if (postRequest.status == 200) {
                $("#submit").on("click",function(){
                    var str = $("form").serialize();
                    console.log(str);
                    $.post("doLogin.php",{"formData":str},function(data){
                        if(data=="true"){
                            location = "index.php?name="+$("input[name='userName']").val();
                        }else{
                            alert("请先登录");
                        }
                    });
                });
            }
        }
    }
}