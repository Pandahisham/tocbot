/**
 * The default template component for documentation in this repository.
 *
 * @author Tim Scanlin
 */

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  propTypes: {
    // children: React.PropTypes.element.isRequired
  },

  render: function() {
    function wrapMarkup(html) {
      return { __html: html };
    }

    return (
      <div data-title={this.props.title}>
        <div dangerouslySetInnerHTML={wrapMarkup(this.props.body)}></div>
      </div>
    );
  }
});
