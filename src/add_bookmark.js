var React = require('react');

function fakeUUID ()
{
    var key = (Math.random() + "").slice(2);
    var what = [].slice.call(key).map(x => (x|0)+65);
    return String.fromCharCode(...what);
}

var AddBookmark = React.createClass({
    getInitialState: function(){
        return {url:""};
    },
    changeUrl: function(e) {
        let url = e.target.value;
        this.setState({url});
    },
    addBookmark: function(e) {
        let bookmark = {};
        let key = fakeUUID();
        let url = this.state.url;
        bookmark[key] = {url}
        this.props.onAddClick(bookmark);
    },
    render: function(){

        return <div style={{backgroundColor:"blue"}}>
           <input type="text" value={this.state.url} onChange={this.changeUrl}/> 
           <input type="button" onClick={this.addBookmark} value="add" />
            
            </div>
    } 
});

module.exports = AddBookmark;
