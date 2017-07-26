var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'Hello from React'
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var name = this.refs.name.value;
        alert(name);
    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello { name }!</h1>
                <p>{ message }!</p>

                <form onSubmit={ this.onButtonClick }>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
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
