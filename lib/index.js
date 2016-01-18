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
    return parseUrl(url).protocol === "file";
};
