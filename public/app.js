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

$('#view-tables').on('click', (event) => {
    event.preventDefault();
    $.get('api/tables', (data) => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            let list = $('<h2>').text(`Name: ${data[i].name} || Phone Number: ${data[i].number}`);
            $('#tableSection').append($(list));
        }
    });
    $.get('api/waitlist', (data) => {
        console.log(data);
        for (var a = 0; a < data.length; a++) {
            let list = $('<h2>').text(`Name: ${data[a].name} || Phone Number: ${data[a].number}`);
            $('#waitlistSection').append($(list));
        }
    })
})

