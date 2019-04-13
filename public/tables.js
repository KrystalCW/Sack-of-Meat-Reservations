document.onload = () => {
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
}