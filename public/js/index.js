$(document).ready(function () {
  $("#messageForm").submit(function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    // Submit form data via AJAX
    $.ajax({
      type: "POST",
      url: $(this).attr("action"),
      data: formData,
      success: function (response) {
        console.log(response);
        alert("Message Sent");
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      },
    });
  });
});
