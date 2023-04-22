export function saveObjectInLocalStorage(keyName, object) {
	if (typeof object === 'string') {
		callLocalStorage().setItem(keyName, object)
	} else {
		callLocalStorage().setItem(keyName, JSON.stringify(object))
	}
}

export function getLocalStorageObject(keyName) {
  const currentItem = callLocalStorage().getItem(keyName)
  if (currentItem) { 
    const parsedObject = JSON.parse(currentItem)
    if (typeof parsedObject === 'string') {
      return currentItem
    } else {
      return parsedObject
    }
  }
  return undefined
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
