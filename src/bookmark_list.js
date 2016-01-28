var React = require('react');


var BookmarkList = React.createClass({
    render: function(){
        const cache = this.props.bookmarks;

        var bookmarks = Object.keys(cache).map(x => {
            let bookmark = cache[x];
            return <li key={x}>{bookmark.url}</li>
        });
         

        return (
                <ul>
                    {bookmarks}
                </ul>
               );

    }
});

module.exports = BookmarkList;
