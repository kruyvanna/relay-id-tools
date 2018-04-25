var isNode = false

if (typeof module !== 'undefined' && module.exports) {
	isNode = true
}

const fromGlobalId = id => {
	let rawToken = ''
	if (isNode) {
		const atob = require('atob')
		rawToken = atob(id)
	} else {
		rawToken = atob(id)
	}
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
