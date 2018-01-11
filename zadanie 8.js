const $container = $('<div class="container">');
// var $rowOne = $('<div>').addClass("row");
// var $rowTwo = $('<div>').addClass("row");
// var $rowThree = $('<div>').addClass("row");

const $makeParagraph = () => $('<p class="desription">');
const $makeRow = () => $('<div class="row">');

const $rowOne = $makeRow()
    .attr('id', 'aaa').append($makeParagraph('jeden'))
    .attr('id', 'bbb').append($makeParagraph('dwa'))
    .attr('id', 'ccc').append($makeParagraph('trzy'));

const $rowTwo = $makeRow()
    .css('color', 'red').append($makeParagraph('cztery'))
    .css('color', 'red').append($makeParagraph('pięć'));

const $rowThree = $makeRow()
    .attr('data-product', '300').append($makeParagraph('sześć'))
    .attr('data-product', '400').append($makeParagraph('siedem'))
    .attr('data-product', '500').append($makeParagraph('osiem'));


$container
        .append($rowOne)
        .append($rowTwo)
        .append($rowThree);


$container.appendTo("body");

