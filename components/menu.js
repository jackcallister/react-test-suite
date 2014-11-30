var React = require('react');

var Menu = React.createClass({

  render: function() {
    var t = this;
    var listItems = this.props.items.map(function(item, i) {
      return <li key={"selectedItem" + i}>{item.title}</li>
    });
    var count = listItems.length;
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        <span>{count}</span>
      </div>
    );
  }
});

module.exports = Menu;