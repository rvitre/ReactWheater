var React = require('react');
var { Link } = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p> Few examples here </p>
      <ol>
        <li>
          <Link to="/?location=Metz"> Metz, FR</Link>
        </li>
        <li>
          <Link to="/?location=Paris"> Paris, FR</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
