describe("Learning about fixtures", function () {

    describe ("Initial testing set up ", function(){
        it("offers three crucial functions", function(){
            expect(readFixtures).toBeDefined();
            expect(setFixtures).toBeDefined();
            expect(loadFixtures).toBeDefined();
        });

        it("can load the cloned index.html from location spec/javascripts/fixtures", function(){
            loadFixtures('indexClone.html');
            expect($('.item')).toExist();
        });
    });

    describe("Find buttons in the DOM with relevant ID", function () {
        it("can find button with id underthegun ", function(){
            var fixture = readFixtures('indexClone.html');
            expect(fixture).toContain('button');
            expect($(fixture).find('button')).toHaveId('underthegun');
        });

        it("can find button with id highjack ", function(){
            var fixture = readFixtures('indexClone.html');
            expect($(fixture).find('button')[1]).toHaveId('highjack');

        });

        it("can find button with id cutoff ", function(){
            var fixture = readFixtures('indexClone.html');
            expect($(fixture).find('button')[2]).toHaveId('cutoff');
        });

        it("can find button with id onthebutton ", function(){
            var fixture = readFixtures('indexClone.html');
            expect($(fixture).find('button')[3]).toHaveId('onthebutton');
        });

        it("can find button with id smallblind ", function(){
            var fixture = readFixtures('indexClone.html');
            expect($(fixture).find('button')[4]).toHaveId('smallblind');
        });

        it("can find button with id bigblind ", function(){
            var fixture = readFixtures('indexClone.html');
            expect($(fixture).find('button')[5]).toHaveId('bigblind');
        });
    });

    describe("More tests with sandbox this time", function(){
        it("can also receive the fixture as a parameter", function(){
            setFixtures('<div class="whatever"> whatever you want</div>');
            expect($('.whatever')).toExist();
        });

        it("offers a sandbox function for convenience", function(){
            expect(sandbox).toBeDefined();
            setFixtures(sandbox({'class': 'some-class'})); // sandbox() is a div with id 'sandbox'
            expect( $('.some-class')).toExist();
            expect( $('#sandbox')).toHaveClass('some-class');
        });

    });

    // it("can also receive the fixture as a parameter", )

});
