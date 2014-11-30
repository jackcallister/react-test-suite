jest.dontMock('../components/app.js');

var React = require('react/addons'),
    App = require('../components/app.js'),
    TestUtils = React.addons.TestUtils;

describe('App', function() {
  var AppElement = TestUtils.renderIntoDocument(<App/>);

  var ListDOM = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'ul')[0];
  var ListItemsDOM = TestUtils.scryRenderedDOMComponentsWithTag(AppElement, 'li');

  it('has 3 default items', function() {
    expect(ListItemsDOM.length).toEqual(3);
  });

  it('has no selected items', function() {
    expect(AppElement.state.selectedItems.length).toEqual(0);
  });

  describe('clicking an item', function() {

    it('adds it to the selected items', function() {
      TestUtils.Simulate.click(ListItemsDOM[0]);
      expect(AppElement.state.selectedItems.length).toEqual(1);
    });
  });
});
