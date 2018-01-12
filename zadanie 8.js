const $container = $('<div>').addClass("container");
const $makeColumn = (size, number) => $('<div>').addClass('col-' + size + '-' + number);
const $makeParagraph = () => $('<p>').addClass("desription");
const $makeRow = () => $('<div>').addClass("row");

const $rowOne = $makeRow()
    .append($makeColumn('sm', 4).attr('id', 'aaa').append($makeParagraph('jeden'))
    .append($makeColumn('sm', 4).attr('id', 'bbb').append($makeParagraph('dwa'))
    .append($makeColumn('sm', 4).attr('id', 'ccc').append($makeParagraph('trzy'));

const $rowTwo = $makeRow()
    .append($makeColumn('xs', 6).css('color', 'red').append($makeParagraph('cztery'))
    .append($makeColumn('xs', 6).css('color', 'red').append($makeParagraph('pięć'));

const $rowThree = $makeRow()
    .append($makeColumn('md', 3).attr('data-product', '300').append($makeParagraph('sześć'))
    .append($makeColumn('md', 3).attr('data-product', '400').append($makeParagraph('siedem'))
    .append($makeColumn('md', 3).attr('data-product', '500').append($makeParagraph('osiem'));


$container
        .append($rowOne)
        .append($rowTwo)
        .append($rowThree);


$container.appendTo("body");

/*Za pomoca wylacznie biblioteki jQuery, utwórz nastapujacy kod html:
    http://jsfiddle.net/h6gp9jnt/
<div class="container">
    <div class="row">
        <div class="col-sm-4" id="aaa"><p class="description">Jeden</p></div>
        <div class="col-sm-4" id="ccc"><p class="description">Dwa</p></div>
        <div class="col-sm-4" id="ooo"><p class="description">Trzy</p></div>
    </div>
    <div class="row">
        <div class="col-xs-6" style="color: red;"><p class="description">Cztery</p></div>
        <div class="col-xs-6" style="color: red;"><p class="description">Piec</p></div>
    </div>
    <div class="row">
        <div class="col-md-3" data-product="300"><p class="description">Szesc</p></div>
        <div class="col-md-3" data-product="400"><p class="description">Siedem</p></div>
        <div class="col-md-3" data-product="500"><p class="description">Osiem</p></div>
    </div>
</div>
Przydatne funkcje: addClass, text, append...
    Powodzenia!
    */