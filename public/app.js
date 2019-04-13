$('#add-btn').on('click', (event) => {
    event.preventDefault();

    let tableRes = {
        name: $('#name').val().trim(),
        number: $('#number').val().trim(),
        email: $('#email').val().trim(),
        uniqueID: $('#uniqueID').val().trim()
    }
    // Question: What does this code do??
    $.post("/api/tables", tableRes)
    .then(function(data) {
      console.log(data);
      alert("Reservation Added!");
    });

})
