var actions = require('./actions.js');

function addBookmark (bookmark)
{
    return {
        type: actions.UPDATE_BOOKMARK,
        bookmark
    };
}

module.exports = {
    addBookmark
};

