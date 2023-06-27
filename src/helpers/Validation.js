// Includes a set of special functions needed to validate forms created with 'react-hook-form' library

// email validation
export function validateEmail(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp =
        //eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// password validation (minimum 6 characters, must contain: one uppercase letter, one lowercase letter, one number, one special character)
export function validatePassword(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// phone validation
export function validatePhone(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp =
        //eslint-disable-next-line
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    const isValid = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isValid) {
        return 'неверный формат';
    }

    return true;
}

// allows only words to be entered (ru, eng)
export function validateForWordsOnly(value, isRequired = false) {
    const isFilled = value.trim() !== '' ? true : false;
    const regExp = /^[a-zа-яё\s-]+$/i;
    const isContainsOnlyWords = regExp.test(value);

    if (isRequired && !isFilled) {
        return 'обязательное поле';
    }

    if (!isContainsOnlyWords) {
        return ' неверный формат';
    }

    return true;
}
