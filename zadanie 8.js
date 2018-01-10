var $container = $("<div/>").addClass("container");
var $rowOne = $("<div/>".addClass("row");
var $rowTwo = $("<div/>".addClass("row");
var $rowThree = $("<div/>".addClass("row");


var $myContainer =
    $container.append(
        $rowOne.append("<div/>", "<div/>", "<div/>"))
        .append(
        $rowTwo.append("<div/>", "<div/>"))
        .append(
        $rowThree.append("<div/>", "<div/>"));


$myContainer.appendTo("body");

