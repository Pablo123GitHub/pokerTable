function Table(){

    this._inputArr = ["A","K","Q","J","T","9","8","7","6","5","4","3","2"];

}

Table.prototype.createGrid = function(){
    var result = [];
    for (let i = 0; i < this._inputArr.length ; i++) {
        for (let j= 0; j < this._inputArr.length ; j++){
            result.push(this._inputArr[i] + this._inputArr[j]);
        }
    }
    return result;

}

Table.prototype.splitIntoSubArr = function(arrInput, count){
    var newArrWithSubArr = [];
    while (arrInput.length > 0) {
        newArrWithSubArr.push(arrInput.splice(0, count));
    }
    return newArrWithSubArr;
}

Table.prototype.gridWithSubArr = function() {
    var gridArr = this.createGrid();
    return this.splitIntoSubArr(gridArr,13);

}
