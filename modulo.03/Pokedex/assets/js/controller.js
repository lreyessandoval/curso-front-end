const api_url = 'https://pokeapi.co/api/v2';
var card_template = getTemplate('card-template');
var pokemons = [];
var perPage = 4;
var page = 1;
var countRecords = 0;
var pageNext = '';
var pagePrevius = '';
var firstLoad = true;

$(document).ready(function() {
    $('#btnsearch').on('click', function() {
        showCatalog($('#search').val());
    });
    $('#search').on('change', function() {
        showCatalog($('#search').val());
    });
    $('#pageSize').val(perPage);

    $('#pageSize').on('change', function() {
        perPage = $('#pageSize').val();
        page = 1;
        getPokemons(perPage, 0, false);
        setPagintation();
    });

    getPokemons(perPage, 0, false);
});

function showCatalog(filter, limit, add) {
    var cards = [];
    $('#overlay').show();

    var result_pokemons = pokemons;
    if (filter) {
        result_pokemons = pokemons.filter(pokemon => (pokemon.name.toLowerCase().includes(filter.toLowerCase())));
    }

    //Legend pagination
    const recordFrom = (((page - 1) * perPage) + 1);
    const recordTo = ((recordFrom + pokemons.length) - 1);
    $('#legend-pagination').html('Mostrando desde ' + recordFrom + ' al ' + recordTo + ' de ' + countRecords + ' Pokemones');

    //result_pokemons = sortByKeyAsc(result_pokemons, 'name');
    $.each(result_pokemons, function(index, val) {

        var card = card_template.replace(/{index}/g, index)
            .replace(/{name}/g, val.name.toUpperCase())
            .replace(/{image}/g, val.detail.sprites.front_default)
            .replace(/{base_experience}/g, val.detail.base_experience)
            .replace(/{height}/g, val.detail.height)
            .replace(/{order}/g, val.detail.order)
            .replace(/{weight}/g, val.detail.weight);
        cards.push(card);
    });

    if (add) $("#catalog").html($("#catalog").html() + cards.join(""));
    else $("#catalog").html(cards.join(""));

    if (firstLoad) {
        setPagintation();
        firstLoad = false;
    }
    $('#overlay').hide();
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
function getPokemons(limit, offset, add) {
    $('#overlay').show();

    var result = null;
    $.ajax({
        url: api_url + '/pokemon?limit=' + limit + '&offset=' + offset,
        type: 'get',
        dataType: 'json',
        async: true,
        success: function(response) {
            pokemons = response.results;

            countRecords = response.count;

            pokemons.forEach(function(pokemon, index) {
                getDetail(pokemon.url, index);
            });
            showCatalog('', limit, add);
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
   Utilerias...
*/
function getTemplate(template) {
    return $('#' + template).html();
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
  Pagintation
*/
function setPagintation() {
    $('#page').Pagination({ // id to initial draw and use pagination
        size: countRecords, // size of list input
        pageShow: 5, // 5 page-item per page
        page: page, // current page (default)
        limit: perPage, // current limit show perpage (default)
    }, function(obj) { // callback function, you can use it to re-draw table or something
        $('#info').html('Current page: ' + obj.page);
        page = obj.page;
        var offset = ((page - 1) * perPage);

        $('#overlay').show();
        gotoTop();
        getPokemons(perPage, offset, false); //load initial...
    });
}

/*
  Top of screen
*/
function gotoTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

/* 

*/
function genGraph(index) {
    //Data maps...
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