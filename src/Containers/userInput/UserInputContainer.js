import React, { Component } from 'react';
import UserInputView from '../../Components/UserInput/UserInputView';
import UserOutput from '../../Components/UserOutput/UserOutput';

class UserInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palabraUno: "",
            palabraDos: "",
            resultado: false
        }
    }
    handlePalabraUnoChange = (event) => {
        this.setState({ palabraUno: event.target.value });
    }
    handlePalabraDosChange = (event) => {
        this.setState({ palabraDos: event.target.value });
    }

    checkPalabras = () => {

        let palabraUnoChar = this.state.palabraUno.toLowerCase().split("").sort().toString();
        console.log(palabraUnoChar);
        let palabraDosChar = this.state.palabraDos.toLowerCase().split("").sort().toString();
        console.log(palabraDosChar);
        if (palabraUnoChar === palabraDosChar) {
            console.log('son anagraramas!!!');
            this.setState({ resultado: true });
        } else {
            console.log('vuelve a intentarlo papu');
            this.setState({ resultado: false });
        }
    }

    render() {
        return (
            <div>
                <UserInputView changedUno={this.handlePalabraUnoChange} changedDos={this.handlePalabraDosChange} check={this.checkPalabras} />
                <br />
                <UserOutput resultado={this.state.resultado} />
            </div>
        );
    }
}

export default UserInputContainer;
