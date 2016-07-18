function showWhenClicked() {
    $("#pig").show();
}

function hideWhenClicked() {
    $("#pig").hide();
}

function makeFlyWhenClicked(){
    $("#pig").animate({left : '500px', width : '50px').fadeOut(1000);

}

function flyWhenClicked(){
    $("#pig").animate({bottom : '500px', width : '50'});
}

function setup() {
    $("#corgi").click(showWhenClicked);
    $("#golden").click(hideWhenClicked);
    $("#beagle").click(makeFlyWhenClicked);
    $("#shiba").click()
    $("#schnauzer")
}

$(document).ready(setup);
