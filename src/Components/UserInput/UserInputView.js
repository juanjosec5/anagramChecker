import React from 'react';

const UserInputView = (props) => {

    return (
        <div className="formulario">
            <form>
                <input type="text" className="input_uno" onChange={props.changedUno} />
                <br />
                <input type="text" className="input_dos" onChange={props.changedDos} />
                <br />
                <button onClick={props.check} type="button">Checkear</button>
            </form>
        </div>
    );
}

export default UserInputView;