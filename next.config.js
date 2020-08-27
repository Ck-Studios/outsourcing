const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps");
const withTM = require("next-transpile-modules")(["swiper", "dom7"]);

// module.exports = withCSS({});


module.exports = withPlugins([
    [withTM],
    [withCSS, {}],
])