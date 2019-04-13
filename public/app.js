$('#add-btn').on('click', (event) => {
    event.preventDefault();

    let tableRes = {
        name: $('#reserve_name').val().trim(),
        number: $('#reserve_phone').val().trim(),
        email: $('#reserve_email').val().trim(),
        uniqueID: $('#reserve_uniqueID').val().trim()
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



