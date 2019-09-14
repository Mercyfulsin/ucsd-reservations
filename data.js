//To be added to HTML, sends obj via POST to server.

$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
        name: $("#name").val().trim(),
        phoneNum: $("#phone-number").val().trim(),
        email: $("#email").val().trim(),
        uniqueId: $("#unique-id").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/reserve", newReservation)
        .then(function (data) {
            console.log("add.html", data);
            getQuote();
        });
});


var quotes = ["Hangry: an emotion when you are seething with anger, thanks to hunger pangs.","Hangry Symptoms: Wishing to kill anyone who hasn't brought you food, and wants to chat you up instead."," Caution: Keep away from those temporarily affected by the hangry epidemic."];
function getQuote(){
    var random = Math.round(Math.random*(quotes.length-1));
    alert("Your table has been reserved, thank you\r"+
    quotes[random]);
}