var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'Hello from React'
        };
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello { name }!</h1>
                <p>{ message }!</p>
            </div>
        );
    }
});

var myName = 'Tso-Liang';
var myMessage = 'Message from Tso-Liang';

ReactDOM.render(
    <Greeter name={ myName } message= { myMessage }/>,
    document.getElementById('app')
);
