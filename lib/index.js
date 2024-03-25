const parseUrl = require("parse-url");

/**
 * urlLocal
 * Checks if a given url is a local url or not.
 *
 * @name urlLocal
 * @function
 * @param {String} url The local/remote url.
 * @return {Boolean|null} `null` if the url is not a string, `true` if the url is local, `false` otherwise.
 */
module.exports = function urlLocal (url) {
    if (typeof url !== "string") {
        return null;
    }
    try {
        const parsed = parseUrl(url);
        if (/^[A-Z]$/i.test(parsed.protocol) && parsed.pathname.charAt(0) === "\\") {
            return true;
        }
        return parsed.protocol === "file"
    } catch (err) {
        return true
    }
};
