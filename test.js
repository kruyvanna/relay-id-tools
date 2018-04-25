const { fromGlobalId, getId } = require('./index')

const object = fromGlobalId('RHJpdmVyOjcw')
console.log('object', object)

console.log('id', getId('RHJpdmVyOjcw'))
