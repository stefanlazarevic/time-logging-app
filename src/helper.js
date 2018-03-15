/**
 * Determines whether the passed value is an array.
 * @param {*} value
 * @returns {boolean}
 */
function is_array(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Determines whether the passed value is an object.
 * @param {*} value
 * @returns {boolean}
 */
function is_object(value) {
    return value === Object(value) && !is_array(value);
}

/**
 * Determines whether the passed value is an strict string.
 * @param {*} value
 * @returns {boolean}
 */
function is_string(value) {
    return Object.prototype.toString.call(value) === '[object String]' && typeof value === 'string';
}

/**
 * Determines whether the passed value is an number.
 * @param {*} value
 * @returns {boolean}
 */
function is_number(value) {
    return typeof value === 'number' && isFinite(value);
}

/**
 * Extract value from an object.
 * @param {string} property
 * @param {object} object
 * @return {*}
 */
function pluck(property, object) {
    if (is_string(property)) {
        if (object === null || object === void 0) {
            return function pluckOnObject(_object) {
                if (is_object(_object)) {
                    return _object[property];
                }
                return null;
            }
        }

        if (is_object(object)) {
            return object[property];
        }
    }

    return null;
};

/**
 * Append zero to the string n times.
 * @param {string} numberString
 * @param {number} size
 * @return {string}
 */
function pad(numberString, size) {
    if (is_string(numberString), is_number(size)) {
        let padded = numberString;
        while (padded.length < size) padded = `0${padded}`;
        return padded;
    }
    return numberString;
}

/**
 * Convert miliseconds into human readable time. HH:mm:ss
 * @param {number} miliseconds
 * @return {string}
 */
function convertToHumanReadableTime(miliseconds) {
    const seconds = Math.floor((miliseconds / 1000) % 60);
    const minutes = Math.floor((miliseconds / 1000 / 60) % 60);
    const hours = Math.floor(miliseconds / 1000 / 60 / 60);

    return [
        pad(hours.toString(), 2),
        pad(minutes.toString(), 2),
        pad(seconds.toString(), 2),
    ].join(':');
}

/**
 * Render elapsed time string.
 * @param {*} elapsed
 * @param {*} runningSince
 */
function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }

    // console.log(runningSince);
    return convertToHumanReadableTime(totalElapsed);
}

const _ = {};

_.pluck = pluck;
_.renderElapsedString = renderElapsedString;

export default _;
