function addModalListener(){
    $(".bg-click").click(function (e) {
        gsap.to($(".modal"), { 
            scale: 0, 
            duration: 0
        });
    });
}

function initListeners(){

    $("#submit").click(function (e) {
        e.preventDefault();
        
        let text = $("#callout-text").val();
        gsap.to($(".modal"), { 
            scale: 0, 
            duration: 0, 
            onComplete: showAlert,
            onCompleteParams: [text]
        });
    });

    $("#showModal").click(function (e) {
        gsap.to($(".modal"), { 
            ease: "bounce.out", 
            scale: 1, 
            duration: 2
        });
        addModalListener();
    });
}

function showAlert(info) {
    alert("Signed in.");
    $("#callout-text").val("");
}

$(document).ready(function () {
    gsap.set($(".modal"), { scale: 0 });
    initListeners();
});