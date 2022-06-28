import React from 'react';
// import { array } from 'prop-types';
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
      nivel: '',
      SuperTrunfo: false,
      salvar: true,
      hastrunfo: true,
      array: [] };
    this.inputChange = this.inputChange.bind(this);
    this.checkImput = this.checkImput.bind(this);
    this.botaoSalvar = this.botaoSalvar.bind(this);
    this.checagemHastrunfo = this.checagemHastrunfo.bind(this);
  }

  inputChange({ target }) {
    const { name, value } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }), () => this.checkImput());
  }

  checkImput() {
    const { primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      name,
      texto,
      imagemCarta,
      nivel } = this.state;
    const numeroMagico = 210;
    const nmax = 90;
    // const condicao1 = (Number(primeiroAtributo)
    // + Number(segundoAtributo)
    // + Number(terceiroAtributo) >= numeroMagico);

    // const atb1 = (Number(primeiroAtributo)
    //  >= 0 && Number(primeiroAtributo) <= nmax);

    // const atb2 = (Number(segundoAtributo)
    // >= 0 && Number(segundoAtributo) <= nmax);

    // const atb3 = (Number(terceiroAtributo)
    //  >= 0 && Number(terceiroAtributo) <= nmax);

    const condicao2 = (name !== ''
      && texto !== ''
      && imagemCarta !== ''
      && nivel !== '');
    this.setState({
      salvar: !((Number(primeiroAtributo)
      + Number(segundoAtributo)
      + Number(terceiroAtributo) <= numeroMagico)
         && (Number(primeiroAtributo) >= 0 && Number(primeiroAtributo) <= nmax)
         && (Number(segundoAtributo) >= 0 && Number(segundoAtributo) <= nmax)
         && (Number(terceiroAtributo) >= 0 && Number(terceiroAtributo) <= nmax)
         && condicao2),
    });
  }

  checagemHastrunfo() {
    const { array } = this.state;
    return array.some((i) => i.SuperTrunfo);
  }

  botaoSalvar() {
    const { primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      name,
      texto,
      imagemCarta,
      nivel } = this.state;

    const objeto = { primeiroAtributo,
      segundoAtributo,
      terceiroAtributo,
      name,
      texto,
      imagemCarta,
      nivel,
      SuperTrunfo };
    this.setState((state) => ({ array: [...state.array, objeto] }));
    this.setState({ name: '',
      texto: '',
      primeiroAtributo: 0,
      segundoAtributo: 0,
      terceiroAtributo: 0,
      imagemCarta: '',
      nivel: '',
      hastrunfo: this.checagemHastrunfo(),
      SuperTrunfo: false,
      salvar: true,
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
      salvar,
      hastrunfo,
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
          isSaveButtonDisabled={ salvar }
          onSaveButtonClick={ this.botaoSalvar }
          hasTrunfo={ hastrunfo }
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
