export function saveObjectInLocalStorage(keyName, object) {
	if (typeof object === 'string') {
		callLocalStorage().setItem(keyName, object)
	} else {
		callLocalStorage().setItem(keyName, JSON.stringify(object))
	}
}

export function getLocalStorageObject(keyName) {
	const parsedObject = JSON.parse(callLocalStorage().getItem(keyName))
	if (typeof parsedObject === 'string') {
		return callLocalStorage().getItem(keyName)
	} else {
		return parsedObject
	}
}

function callLocalStorage() {
	let lStorage
	try {
		lStorage = window.localStorage
		return lStorage
	} catch (e) {
		console.error(e)
	}
}
