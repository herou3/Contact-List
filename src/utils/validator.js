export function validator(data, config) {
	const errors = {}
	function validate(validateMethod, data, config) {
		let userDateArray
		let inputDate
		let statusValidate
		switch (validateMethod) {
			case 'isRequired': {
				statusValidate = data.trim() === ''
				break
			}
			case 'mint': {
				statusValidate = data.length < config.value
				break
			}
			case 'maxLength': {
				statusValidate = data.length > config.value
				break
			}
			case 'isSpecialSymbols': {
				const nameRexExp = /^([А-Яа-яёA-Za-z0-9]{2,32})$/g
				statusValidate = !nameRexExp.test(data)
				break
			}
			case 'isFormat': {
				const dateText = data.split('-')
				const neededDate = dateText[2] + '.' + dateText[1] + '.' + dateText[0]
				const birthdayRexExp =
					/^(([123]{1}[0-9]){1}|[0]{1}[1-9]{1})\.([0]{1}[1-9]{1}|[1]{1}[012])\.[0-9]{4}$/g
				statusValidate = !birthdayRexExp.test(neededDate.trim())
				console.log(neededDate)
				break
			}
			case 'isLessCurrentDate': {
				userDateArray = data.split('.')
				const currentDate = new Date()
				inputDate = new Date(
					`${
						userDateArray[1] + '/' + userDateArray[0] + '/' + userDateArray[2]
					}`
				)
				if (
					currentDate.getTime() < inputDate.getTime() ||
					(inputDate.getFullYear === currentDate.getFullYear &&
						inputDate.getMonth() === currentDate.getMonth() &&
						inputDate.getDay() === currentDate.getDay())
				) {
					statusValidate = true
				} else {
					statusValidate = false
				}
				break
			}
			case 'isMoreTargetDate': {
				userDateArray = data.split('.')
				inputDate = new Date(
					`${
						userDateArray[1] + '/' + userDateArray[0] + '/' + userDateArray[2]
					}`
				)
				if (inputDate.getFullYear() < 1900) {
					statusValidate = true
				} else {
					statusValidate = false
				}
				break
			}
			case 'isUrlFormat': {
				const urlRexExp =
					/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{2,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/g
				statusValidate = !urlRexExp.test(data)
				break
			}
			default:
				break
		}
		if (statusValidate) {
			return config.message
		}
	}
	for (const fieldName in data) {
		for (const validateMethod in config[fieldName]) {
			const error = validate(
				validateMethod,
				data[fieldName],
				config[fieldName][validateMethod]
			)
			if (error && !errors[fieldName]) {
				errors[fieldName] = error
			}
		}
	}
	return errors
}
