const Calculator = require('../calculator.js');

// describe = 집합으로 여러 함수를 테스트 할 때
// it = Calculator를 가리킴
describe('Calculator', () => {
  let cal;
  // beforeEach = 각각의 테스트에서 cal을 초기화해줌
  beforeEach(() => {
    cal = new Calculator();
  })
  it('inits with 0', () => {
    expect(cal.value).toBe(0)
  })
  it('clear', () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })
  it('set', () => {
    // 9로 설정
    cal.set(9);
    // 9지?
    expect(cal.value).toBe(9)
  })

  it('add', () => {
    cal.set(1)
    cal.add(2)
    expect(cal.value).toBe(3)
  })
  
  it('add > 100', () => {
    cal.set(100)
    expect(() => {cal.add(1101)}).toThrow('Value can not be greater than 100')
  })

  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
})