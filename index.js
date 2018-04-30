const { Base64 } = require('./Base64')

const fromGlobalId = id => {
	let rawToken = Base64.atob(id)

	const tokens = rawToken.split(':')
	const output = {
		type: tokens[0],
		id: tokens[1]
	}
	return output
}

const getId = encoded => {
	return fromGlobalId(encoded).id
}

module.exports = {
	fromGlobalId,
	getId
}
