import {
  Polygon,
  add
} from './index';

describe('基本函数API', function() {
  it('a函数应返回参数值+1', function() {
    expect(add(1)).toBe(3)
    expect(add(2)).toBe(3)
  })
})

describe('ES6 Polygon', function() {
  let polygon = new Polygon(5, 4);

  it('should return 20 when calling calcArea', function() {
    expect(polygon.calcArea()).toBe(20)
  });
});