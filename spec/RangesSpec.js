"use strict";

describe("Check each range", ()=> {
   var range ;

   beforeEach(()=> {
       range = new Range();
   });

describe('return the UTG range',  ()=>{
    it("UTG range should contain JJ+, AQs+, KQs+,AKo", ()=>{
        expect(range.UTG_RFI_range()).toEqual(["AA", "AKs","AQs","KK","QQ","JJ","AKo","AQo","KQs"]);
        });

});



});