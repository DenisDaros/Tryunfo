import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            id="nome"
          />
        </label>
        <label htmlFor="texto">
          Apenas algum texto em uma área de texto
          <textarea
            name="texto"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="texto"
          />
        </label>
        <label htmlFor="primeiroAtributo">
          primeiro-atributo
          <input
            type="number"
            name="primeiroAtributo"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="primeiroAtributo"
          />
        </label>
        <label htmlFor="segundoAtributo">
          segundo-atributo
          <input
            type="number"
            name="segundoAtributo"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="segundoAtributo"
          />
        </label>
        <label htmlFor="terceiroAtributo">
          terceiro-atributo
          <input
            type="number"
            name="terceiroAtributo"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="terceiroAtributo"
          />
        </label>
        <label htmlFor="imagemCarta">
          imagem-da-carta
          <input
            type="text"
            name="imagemCarta"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            id="imagemCarta"
          />
        </label>
        <label htmlFor="nivel">
          Raridade da carta
          <select
            type="select"
            name="nivel"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            id="nivel"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
          <label htmlFor="SuperTrunfo">
            carta Super-Trunfo
            <input
              type="checkbox"
              checked={ cardTrunfo }
              name="SuperTrunfo"
              onChange={ onInputChange }
              data-testid="trunfo-input"
              id="SuperTrunfo"
            />
          </label>)}

        <button
          type="button"
          name="salvar"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
