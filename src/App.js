import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      texto: '',
      primeiroAtributo: 0,
      segundoAtributo: 0,
      terceiroAtributo: 0,
      imagemCarta: '',
      nivel: 'normal',
      SuperTrunfo: false };
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name,
      texto,
      primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      imagemCarta,
      nivel,
      SuperTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ texto }
          cardAttr1={ primeiroAtributo }
          cardAttr2={ segundoAtributo }
          cardAttr3={ terceiroAtributo }
          cardImage={ imagemCarta }
          cardRare={ nivel }
          cardTrunfo={ SuperTrunfo }
          onInputChange={ this.inputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ texto }
          cardAttr1={ primeiroAtributo }
          cardAttr2={ segundoAtributo }
          cardAttr3={ terceiroAtributo }
          cardImage={ imagemCarta }
          cardRare={ nivel }
          cardTrunfo={ SuperTrunfo }
          onInputChange={ this.inputChange }
        />
      </div>
    );
  }
}

export default App;
