const fromGlobalId = id => {
	const rawToken = atob(id)
	const tokens = rawToken.split(':')
	const output = {
		type: tokens[0],
		id: tokens[1]
	}
	return output
}

module.exports = {
	fromGlobalId
}
