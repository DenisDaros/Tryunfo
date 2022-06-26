import React from 'react';

class Form extends React.Component {
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
      SuperTrunfo: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
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

      <form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            data-testid="name-input"
            id="nome"
          />
        </label>
        <label htmlFor="texto">
          Apenas algum texto em uma área de texto
          <textarea
            name="texto"
            value={ texto }
            onChange={ this.handleChange }
            data-testid="description-input"
            id="texto"
          />
        </label>
        <label htmlFor="primeiroAtributo">
          primeiro-atributo
          <input
            type="number"
            name="primeiroAtributo"
            value={ primeiroAtributo }
            onChange={ this.handleChange }
            data-testid="attr1-input"
            id="primeiroAtributo"
          />
        </label>
        <label htmlFor="segundoAtributo">
          segundo-atributo
          <input
            type="number"
            name="segundoAtributo"
            value={ segundoAtributo }
            onChange={ this.handleChange }
            data-testid="attr2-input"
            id="segundoAtributo"
          />
        </label>
        <label htmlFor="terceiroAtributo">
          terceiro-atributo
          <input
            type="number"
            name="terceiroAtributo"
            value={ terceiroAtributo }
            onChange={ this.handleChange }
            data-testid="attr3-input"
            id="terceiroAtributo"
          />
        </label>
        <label htmlFor="imagemCarta">
          imagem-da-carta
          <input
            type="text"
            name="imagemCarta"
            value={ imagemCarta }
            onChange={ this.handleChange }
            data-testid="image-input"
            id="imagemCarta"
          />
        </label>
        <label htmlFor="nivel">
          Raridade da carta
          <select
            type="select"
            name="nivel"
            value={ nivel }
            onChange={ this.handleChange }
            data-testid="rare-input"
            id="nivel"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="SuperTrunfo">
          carta Super-Trunfo
          <input
            type="checkbox"
            name="SuperTrunfo"
            value={ SuperTrunfo }
            onChange={ this.handleChange }
            data-testid="trunfo-input"
            id="SuperTrunfo"
          />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
