import { assert } from 'chai';
import casual from 'casual';
import geometric from '../../src/algorithms/geometric';
/* sdf dfds bbf3*/
describe('geometric algorithm', () => {
 
  it('should have inverse functions for getPosition and getValue', () => {
    const min = casual.integer(0, 100);
    const max = casual.integer(900, 1000);
    const originalPosition = casual.integer(100, 900);
    const value = geometric.getValue(originalPosition, min, max);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(Math.round(positionFromValue), originalPosition);
  });

  it.skip('should have inverse functions for getValue and getPosition', () => {
    const min = 10;
    const max = 1000;
    const value = 358;
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(value, geometric.getValue(positionFromValue, min, max));
  });

  it.skip('should handle the minimum end of the range correctly', () => {
    const min = casual.integer(0, 99);
    const max = casual.integer(100, 1000);
    const value = geometric.getValue(0, min, max);
    assert.equal(value, min);
    positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(Math.round(positionFromValue), 0);
  });

  it('should handle the maximum end of the range correctly', () => {
    const min = casual.integer(0, 899);
    const max = casual.integer(900, 1000);
    const value = geometric.getValue(100, min, max);
    assert.equal(value, max);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(Math.round(positionFromValue), 100);
  });

  it('should provide correct values for nice integers in the middle of a range', () => {
    const min = 0;
    const max = 1024;
    const x = 25;
    const value = geometric.getValue(x, min, max);
    assert.equal(value, 64);
    const positionFromValue = geometric.getPosition(value, min, max);
    assert.equal(positionFromValue, x);
  });

  it('should should detect multiple of 2', () => {
    const number = Math.floor(Math.random() * 10);
    assert.notEqual(number, 4);
  });

//   it('should should detect multiple of 3', () => {
//     const number =  Math.floor(Math.random() * 10);
//     const result = number % 3;
//     assert.equal(result, 0);
//   });
  
//    it('should should detect odd number', () => {
//     const number =  Math.floor(Math.random() * 10);
//     const result = number % 2;
//     assert.equal(result, 1);
//   });
  
//    it('should should detect multiple of 4', () => {
//     const number =  Math.floor(Math.random() * 10);
//     const result = number % 4;
//     assert.equal(result, 0);
//   });
  

});
