var actions = require('./actions');

let initialState = {
    bookmarks: {},
    filter: n => true 
};

function reducer (state = initialState, action)
{
    return {
        bookmarks: bookmarks(state.bookmarks, action),
        filter: x => true
    } 
}

function filterReducer (state = {}, action)
{
    switch (action.type) {
    case actions.SET_FILTER:
        return action.filter;
    default:
        return state;
    }
}

function bookmarks (state = {}, action)
{
    switch (action.type) {
    case actions.UPDATE_BOOKMARK:
        console.log("action:", action);
        return Object.assign({}, state, action.bookmark);
    default:
        return state;
    }
}

module.exports = reducer;


