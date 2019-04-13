$('#add-btn').on('click', (event) => {
    event.preventDefault();

    let tableRes = {
        name: $('#name').val().trim(),
        number: $('#number').val().trim(),
        email: $('#email').val().trim(),
        uniqueID: $('#uniqueID').val().trim()
    }
    // Question: What does this code do??
    $.get('/api/tables', function(data) {
        if (data.length <= 4) {
            $.post("/api/tables", tableRes)
            .then(function(data) {
            console.log(data);
            alert("Reservation Added!");
            });
        } else {
            $.post("/api/waitlist", tableRes)
            .then(function(data) {
            console.log(data);
            alert("Reservations are full. However, you're on the waitlist.");
            });
        }
    })
})



