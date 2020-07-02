const api_url = 'https://pokeapi.co/api/v2';
var card_template = getTemplate("assets/template/card.html");
var pokemons = [];

$(document).ready(function() {
    $('#btnsearch').on('click', function() {
        showCatalog($('#search').val());
    });
    $('#search').on('click', function() {
        showCatalog($('#search').val());
    });
    getPokemons();
});

function showCatalog(filter) {
    var cards = [];
    $('#spinner-border').show();

    var result_pokemons = pokemons;
    if (filter) {
        result_pokemons = pokemons.filter(pokemon => (pokemon.name.toLowerCase().includes(filter.toLowerCase())));
    }

    result_pokemons = sortByKeyAsc(result_pokemons, 'name');
    $.each(result_pokemons, function(index, val) {
        if (val.video != "") {
            var card = card_template.replace(/{index}/g, index).replace(/{name}/g, val.name.toUpperCase()).replace(/{image}/g, val.detail.sprites.front_default).replace(/{base_experience}/g, val.detail.base_experience).replace(/{height}/g, val.detail.height).replace(/{order}/g, val.detail.order).replace(/{weight}/g, val.detail.weight);
            cards.push(card);
        }
    });

    $("#catalog").html(cards);
    $('#spinner-border').hide();
}

function showMetric(index) {
    var title = '';
    var value = '';
    var reset = false;
    genGraph(index);
    showModal(title, value, reset);
}

function showModal(title, value, reset) {
    var mtitle = document.getElementById('ModalTitle');
    var mmsg = document.getElementById('ModalMsg');
    mtitle.innerText = title;
    //mmsg.innerText = value;

    $('#myModal').modal({
        keyboard: false
    });

    if (reset) {
        $('#myModal').on('hidden.bs.modal', function(e) {
            location.reload();
        });
    }
}
/*
 Get full list
*/
function getPokemons() {
    var result = null;
    $.ajax({
        url: api_url + '/pokemon?limit=500&offset=0',
        type: 'get',
        dataType: 'json',
        async: true,
        success: function(response) {
            pokemons = response.results;

            pokemons.forEach(function(pokemon, index) {
                //showProgress(pokemons.length, index + 1);
                getDetail(pokemon.url, index);
            });
            showCatalog();
        }
    });
}
/*
  Get datails
*/
function getDetail(url, index) {
    var result = null;
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(response) {
            pokemons[index].detail = response;
        }
    });
}

/*
  progress
*/
function showProgress(max, value, show) {
    $('progress progress-bar').attr('aria-valuenow', value);
    $('progress progress-bar').attr('aria-valuemax', max);
    if (show) $('progress').show();
    else $('progress').hide();
}


/*
   Utilerias...
*/
function getTemplate(file) {
    var result = null;
    $.ajax({
        url: file,
        type: 'get',
        dataType: 'text',
        async: false,
        success: function(data) {
            result = data;
        }
    });
    return result;
}

function sortByKeyDesc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

function sortByKeyAsc(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

/* 

*/

function genGraph(index) {

    var data = pokemons[index].detail.stats.map(function(item, index) {
        return { x: index, y: item.base_stat, label: item.stat.name.toUpperCase() };
    });

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Stat - " + pokemons[index].name.toUpperCase()
        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelFontSize: 16,
            indexLabelPlacement: "outside",
            dataPoints: data
        }]
    });
    chart.render();

}