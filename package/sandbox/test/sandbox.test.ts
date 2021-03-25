import Sandbox from '../src'

const SANDBOX_NAME = 'test'
const sandbox = new Sandbox(SANDBOX_NAME)
const { proxy } = new Sandbox(SANDBOX_NAME)

test('init', () => {
  expect(Object.prototype.toString.call(sandbox)).toEqual('[object Object]')
  expect(sandbox.name === 'SANDBOX_NAME')
  expect(proxy !== undefined)
  expect(Object.keys(proxy)).toEqual(Object.keys(window))
  expect(Object.getOwnPropertyNames(proxy)).toEqual(Object.getOwnPropertyNames(window))
})

test('it should set to fake window', () => {
  window.testProperty = 'test'
  expect(window.testProperty === undefined)
  expect(proxy.testProperty === 'test')
})
