var card_template = getTemplate('card-template');
var data = [];
$(document).ready(function() {

    /* Click to add event listener */
    $('#btn-search').click(function() {
        search();
    });

    search();
});

function search() {
    const description = $('#description').val();
    const location = $('#location').val();

    gotoTop();
    $('#overlay').show();

    var url = `https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?`;

    var param = (description ? `description=${description}` : '');
    param += (param ? '&' : '');
    param += (location ? `location=${location}` : '');

    url = encodeURI(url + param);

    axios.get(url)
        .then(function(response) {
            data = response.data;
            refreshTable();
        })
        .catch(function(error) {
            alert(`${error}`);
        });
}

function refreshTable() {
    var cards = [];
    $('#overlay').show();

    if (data.length > 0) {
        $.each(data, function(index, item) {

            var card = card_template.replace(/{title}/g, item.title)
                .replace(/{type}/g, item.type)
                .replace(/{url}/g, item.url)
                .replace(/{location}/g, item.location)
                .replace(/{company}/g, item.company)
                .replace(/{company_url}/g, item.company_url)
                .replace(/{created_at}/g, item.created_at)
                .replace(/{company_logo}/g, item.company_logo)
                .replace(/{index}/g, index);
            cards.push(card);
        });
    } else {
        var card = "<h2>There are no jobs for this search criteria...</h2>";
        cards.push(card);
    }

    $("#catalog").html(cards.join(""));

    $('#overlay').hide();
}

function getTemplate(template) {
    return $('#' + template).html();
}

function showMetric(index) {
    var title = data[index].title;
    var value = data[index].description;
    var reset = false;
    showModal(title, value, reset);
}

function showModal(title, value, reset) {
    $('#ModalTitle').html(title);
    $('#ModalMsg').html(value);

    $('#myModal').modal({
        keyboard: false
    });

    if (reset) {
        $('#myModal').on('hidden.bs.modal', function(e) {
            // location.reload();
        });
    }
}

function gotoTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}