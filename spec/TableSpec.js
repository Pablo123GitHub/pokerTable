"use strict";

describe("Table", ()=> {

   var table;

   beforeEach(()=> {
      table = new Table();
   });

   describe("reOrganise the Grid array into 13 sub-arrays", ()=> {
      it("first row is the Aces row", ()=>{
         expect(table.gridWithSubArr()[0]).toEqual([ 'AA','AK','AQ','AJ','AT','A9','A8','A7','A6','A5','A4','A3','A2']);
      });
       it("second row is the Kings row", ()=>{
           expect(table.gridWithSubArr()[1]).toEqual([ 'KA','KK','KQ','KJ','KT','K9','K8','K7','K6','K5','K4','K3','K2']);
       });
       it("we have an array with 13 subarrays : array length = 13", ()=>{
           expect(table.gridWithSubArr().length).toEqual(13);
       });
   });
});