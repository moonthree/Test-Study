const check = require('../check')

describe('check', () => {

  //onSuccess, onFail의 mock 함수로 사용할 변수 각각 선언
  let onSuccess;
  let onFail;

  //각 테스트가 실행되기 전에 실행되는 함수
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  //predicate가 true일 때, onSuccess가 호출되는지 확인
  it('calls onSuccess if predicate returns true', () => {
    check(() => true, onSuccess, onFail);

    //predicate가 true일 때, onSuccess가 1번 호출되었는지 확인
    //predicate가 true일 때, onSuccess가 'yes'를 인자로 호출되었는지 확인
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith('yes');

    expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess.mock.calls[0][0]).toBe('yes');
  });

  //predicate가 false일 때, onFail이 호출되는지 확인
  it('calls onFail if predicate returns false', () => {
    check(() => false, onSuccess, onFail);

    //predicate가 false일 때, onFail이 1번 호출되었는지 확인
    //predicate가 false일 때, onFail이 'no'를 인자로 호출되었는지 확인
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith('no');
  });
})