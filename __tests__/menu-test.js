jest.dontMock('../components/menu.js');

var React = require('react/addons'),
    Menu = require('../components/menu.js'),
    TestUtils = React.addons.TestUtils;

describe('Menu', function() {

  var items = [{ title: 'test' }];

  var MenuElement = TestUtils.renderIntoDocument(
    <Menu items={items} />
  );

  var MenuElementDOM = TestUtils.findRenderedDOMComponentWithTag(MenuElement, 'div');
  var items = TestUtils.scryRenderedDOMComponentsWithTag(MenuElement, 'li');
  var count = TestUtils.findRenderedDOMComponentWithTag(MenuElement, 'span');

  it('renders each item as a li', function() {
    expect(items[0].getDOMNode().textContent).toEqual('test');
  });

  it('displays the items count', function(){
    expect(count.getDOMNode().textContent).toEqual('1');
  });
});
