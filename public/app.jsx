var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React'
        };
    },
    render: function () {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello { name }!</h1>
                <p>This is from a React component!</p>
            </div>
        );
    }
});

var myName = 'Tso-Liang'

ReactDOM.render(
    <Greeter name={ myName }/>,
    document.getElementById('app')
);
