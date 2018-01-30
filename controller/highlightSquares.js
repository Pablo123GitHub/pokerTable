var range = new Range();


document.getElementById("tbl")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        var clickedHand = clickEvent.path["0"].innerText;
        console.log(clickedHand);
        $(`td:contains(${clickedHand})`).toggleClass('active');

    });

document.getElementById("underthegun")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        range.showUTGRange();
    });

document.getElementById("highjack")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        range.showHijack();
    });

document.getElementById("cutoff")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        range.showCutOff();
    });

document.getElementById("onthebutton")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        range.showOnTheButton();
    });

document.getElementById("smallblind")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        range.showSmallBlind();
    });

document.getElementById("reset")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        location.reload();
    });

