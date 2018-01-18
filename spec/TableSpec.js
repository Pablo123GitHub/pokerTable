describe("Table", ()=> {

   var table;

   beforeEach(()=> {
      table = new Table();
   });

   describe("check the combos in chart created", ()=> {
      it("has 'AA' at index 0 of the table created", ()=> {
           expect(table.createGrid()[0]).toEqual('AA')
       }) ;
       it("has 'AK' at index 1 of the table created", ()=> {
           expect(table.createGrid()[1]).toEqual('AK')

       }) ;
       it("has '22' at index 168 (last index) of the table created", ()=> {
           expect(table.createGrid()[168]).toEqual('22')
       }) ;

       it("check length of the array of the chart table", ()=> {
          expect(table.createGrid().length).toEqual(169);
       });
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