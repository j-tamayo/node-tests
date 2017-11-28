const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square a number', () => {
        var res = utils.square(2);
    
        expect(res).toBe(4).toBeA('number');
    
        // if(res !== 4) {
        //     throw new Error(`Expected 4, but got ${res}`);
        // }
    });
    
});

it('should verify first and last names are set', () => {
    var user = {
        location: 'Philadelphia',
        age: 25
    };
    var res = utils.setName(user, 'Andrew Mead');

    expect(res).toInclude({
        firstName: 'Andrew',
        lastName: 'Mead'
    });
});

it('should expect some values', () => {
    // expect(12).toNotBe(11);
    expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
    expect([2,3,4]).toInclude(2);
    expect({
        name: 'Andrew',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 25
    });
});