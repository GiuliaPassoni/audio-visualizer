module.exports = function (api) {
    api.cache.forever(); //make sure to include this line
    return {
        plugins: ['macros'],
    }
}