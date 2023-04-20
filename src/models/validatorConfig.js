export const validatorConfig = {
  firstName: {
    isRequired: {
      message: "First name is required"
    },
    mint: {
      message: "First Name must be more 1 symbol",
      value: 2
    },
    maxLength: {
      message: "First Name must be less or equals 32 symbols",
      value: 32
    },
    isSpecialSymbols: {
      message: "First Name must be without special characters"
    }
  },
  lastName: {
    isRequired: {
      message: "Last name is required"
    },
    mint: {
      message: "Last Name must be more 1 symbol",
      value: 2
    },
    maxLength: {
      message: "Last Name must be less or equals 32 symbols",
      value: 32
    },
    isSpecialSymbols: {
      message: "Last Name must be without special characters"
    }
  },
  birthday: {
    isRequired: {
      message: "Birthday is required"
    },
    isFormat: {
      message: "Required birthday format must be DD.MM.YYYY"
    },
    isLessCurrentDate: {
      message: "Birthday can't be more current date"
    },
    isMoreTargetDate: {
      message: "Birthday can't be less 01.01.1900",
      value: 8
    }
  },
  url: {
    isRequired: {
      message: "Url is required"
    },
    maxLength: {
      message: "Url can't be more 255 symbols",
      value: 255
    },
    isUrlFormat: {
      message: "Url must begins from https:// or http:// and ends with nameSite.domain"
    }
  }
}