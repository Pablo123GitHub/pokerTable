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



