const fetchProduct = require('../async.js')

describe('Async', () => {
  it('async', () => {
    fetchProduct().then((item) => {
      // {item: 'Milk', price: 200} 여야 테스트를 통과할 수 있다.
      // 그런데 테스트는 통과되고 Promise 내부에선 에러가 발생한다.
      // fetchProduct()가 실행된 후 .then은 신경쓰지 않고 테스트를 끝내기 때문이다.
      expect(item).toEqual({item: 'Proop', price: 200})
    })
  })
})

describe('Async2', () => {
  // done을 사용하면 테스트 시간이 오래 걸리게 되므로 return이나 async-await 방식을 권장한다.
  // 해결법 1: done()을 사용한다.
  it('async-done', (done) => {
    fetchProduct().then((item) => {
      // 성공적으로 에러가 발생하여 테스트에 실패한다.
      expect(item).toEqual({item: 'merong', price: 200})
      done()
    })
  })
  
  // 해결법 2: return을 사용한다.
  it('async-return', () => {
    return fetchProduct().then((item) => {
      // 성공적으로 에러가 발생하여 테스트에 실패한다.
      expect(item).toEqual({item: 'merong', price: 200})
    });
  })

  // 해결법 3: async-await를 사용한다.
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({item: 'Milk', price: 200})
  })

  // 성공했을 때, return 사용
  it('async - resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({item: 'Milk', price: 200})
  })

  // 실패했을 때, return 사용
  it('async - rejects', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error')
  })
})