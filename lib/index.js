const parseUrl = require("parse-url");

/**
 * urlLocal
 * Checks if a given url is a local url or not.
 *
 * @name urlLocal
 * @function
 * @param {String} url The local/remote url.
 * @return {Boolean} `true` if the url is local, `false` otherwise.
 */
module.exports = function urlLocal (url) {
    return parseUrl(url).protocol === "file";
};
