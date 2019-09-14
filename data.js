//To be added to HTML, sends obj via POST to server.
<script type="text/javascript">
    $("#add-btn").on("click", function(event) {
        event.preventDefault();
      var newReservation = {
        name: $("#name").val().trim(),
    phoneNum: $("#phone-number").val().trim(),
    email: $("#email").val().trim(),
    uniqueId: $("#unique-id").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/reservation", newReservation)
        .then(function(data) {
        console.log("add.html", data);
    alert("Your table has been reserved, thank you");
  });
});
  </script>