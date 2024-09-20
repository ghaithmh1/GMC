// Hello.js
import Hello2 from './Hello2';

function Hello(props) {
    return (
        <div>
            <h1>Hello</h1>
            <Hello2 style={props.textStyle} />
        </div>
    );
}

export default Hello;
