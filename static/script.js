$.ajax({
    type: "POST",
    url: "/test_post",
    data:{},
    success: function(response){
        alert(response['message']);
        window.location.reload();
    }
})