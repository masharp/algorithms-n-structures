/**
 * Function and Jasmine tests that demonstrate a TDD FizzBuzz algorithm
 * variation called BingBoing
 */

'use strict';

/* describe out test */
describe('BingBoing Tests', () => {
  const bingBoing = bingBoing();

  it('Should respond with an array of length 100', (done) => {
    expect(bingBoing.length).toEqual(100);
    done();
  });
  it('Should have a 1 at index 0', (done) => {
    expect(bingBoing[0]).toEqual(1);
    done();
  });
  it('Should have a Bing at index 2', (done) => {
    expect(bingBoing[2]).toEqual('Bing');
    done();
  });
  it('Should have a Boing at index 4', (done) => {
    expect(bingBoing[4]).toEqual('Boing');
    done();
  });
  it('Should have a BingBoing at index 14', (done) => {
    expect(bingBoing[14]).toEqual('BingBoing');
    done();
  });
});

function bingBoing() {
  const bingy = [];

  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      bingy.push('BingBoing');
    } else {
      if (i % 5 === 0) {
        bingy.push('Boing');
      }
      if (i % 3 === 0) {
        bingy.push('Bing');
        continue;
      } else  bingy.push(i);
    }
  }

  return bingy;
}
