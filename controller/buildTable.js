var id  = 0;
var table;
var arrWithSubArr;

table = new Table();
arrWithSubArr = table.gridWithSubArr();

function createT(){

    function appendLetterS () {
        row.appendChild(cell);
        cell.innerHTML = arrWithSubArr[r][c]+"s";

    }

    function appendLetterO () {
        row.appendChild(cell);
        cell.innerHTML = arrWithSubArr[c][r] + "o";
    }

    var tbl = document.getElementById("tbl");

    for (var r =0; r< 13;r++){
        var row = document.createElement("tr");

        for (var c=0; c< 13; c++){
            var cell = document.createElement("td");
            cell.width = "60px";
            cell.height = "60px";
            cell.id = id++;

            if (cell.id >0 && cell.id <13){
                appendLetterS();
            } else if (cell.id >14 && cell.id <26){
                appendLetterS();
            } else if (cell.id >28 && cell.id <39){
                appendLetterS();
            } else if (cell.id >42 && cell.id <52){
                appendLetterS();
            }  else if (cell.id >56 && cell.id <65){
                appendLetterS();
            }  else if (cell.id >70 && cell.id <78){
                appendLetterS();
            } else if (cell.id >84 && cell.id <91){
                appendLetterS();
            } else if (cell.id >98 && cell.id <104){
                appendLetterS();
            } else if (cell.id >112 && cell.id <117){
                appendLetterS();
            } else if (cell.id >126 && cell.id <130){
                appendLetterS();
            } else if (cell.id >140 && cell.id <143){
                appendLetterS();
            } else if (cell.id >154 && cell.id <156){
                appendLetterS();
            } else if (cell.id >168 && cell.id <169){
                appendLetterS();
            }   else {
                appendLetterO();
            }
            if (cell.id % (14) ==0) {
                // cell.style.backgroundColor = "yellow";
                cell.innerHTML = arrWithSubArr[c][r] ;

            }

        }
        tbl.appendChild(row);
    }
}
