export const copyToClipboard = (password, callback) => {
	if (!password) {
		return
	}
	navigator.clipboard.writeText(password)
	callback()
}
