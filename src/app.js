var React = require('react');
var AddBookmark = require('./add_bookmark');
var BookmarkList = require('./bookmark_list');
var {addBookmark} = require('./bookmark_actions.js');
var connect = require('react-redux').connect;

var App = React.createClass({
    getInitialState: function(){
        return {};
    },
    render: function() {

        const { dispatch, bookmarks, filter } = this.props;

        let onadd = bookmark => { dispatch(addBookmark(bookmark)) }	
  	
        return (
		<div>
			<AddBookmark onAddClick = {onadd} />
			<BookmarkList bookmarks={bookmarks} />
		</div>
		);
    }
});

function select (state)
{
    return state;
}

module.exports = connect(select)(App);
