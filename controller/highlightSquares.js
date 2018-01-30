document.getElementById("tbl")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();
        var clickedHand = clickEvent.path["0"].innerText;
        console.log(clickedHand);
        $(`td:contains(${clickedHand})`).toggleClass('active');

    });

function hightLightSelection (handString) {
    // console.log(handString);

for (var i =0; i<handString.length; i++) {
    $(`td:contains(${handString})`).addClass('active');
}

};


var multipleSelection = function() {
    // console.log.apply( this, arguments );
    // console.log(arguments);
    // console.log(this);
    hightLightSelection.apply(this,arguments);

};

document.getElementById("underthegun")
    .addEventListener("click", function(clickEvent){
        clickEvent.preventDefault();

        var selection = document.querySelectorAll("td");
        var i = selection.length;
        while (i--) {
            selection[i].classList.add('active');
        }

    });





// $(`td:contains("AA")`).toggleClass('active');
