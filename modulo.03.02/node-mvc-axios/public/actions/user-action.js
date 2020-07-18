$(document).ready(function() {
    /* Click to Create*/
    $('#btnnewUser').click(function() {
        const name = $('#name').val();
        const lastname = $('#lastname').val();
        const email = $('#email').val();
        const password = $('#password').val();

        const payload = {
            name,
            lastname,
            email,
            password
        };
        axios.post(`/users`, payload)
            .then(function(response) {
                clearForm();
                refreshTable();
            })
            .catch(function(error) {
                alert(`${error}`);
            });
    });

    refreshTable();
    clearForm();
});

function refreshTable() {
    /* GetData */
    axios.get(`/users`)
        .then(function(response) {

            records = response.data;
            var tbody = [];

            if (records && (records.length > 0)) {
                records.forEach(row => {

                    const tr = `<tr><td>${row.name}</td><td>${row.lastname}</td><td>${row.email}</td></tr>`;
                    tbody.push(tr);
                });
            } else {
                const tr = `<tr><td colspan="3">No se encontraron Registros</td></tr>`;
                tbody.push(tr);
            }

            $('#table-user tbody').html(tbody);
        })
        .catch(function(error) {
            const tr = `<tr><td colspan="3">${error.message}</td></tr>`;
            $('#table-user tbody').html(tr);
        });
}

function clearForm() {
    $('#name').val('');
    $('#lastname').val('');
    $('#email').val('');
    $('#password').val('');
}