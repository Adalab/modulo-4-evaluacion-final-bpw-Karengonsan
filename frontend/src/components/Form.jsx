import "react";
import "../styles/app.css";

const Form = ({
  name,
  ingredients,
  instructions,
  updateName,
  updateIngredients,
  updateInstructions,

  isDisabled = false,
}) => {
  const handleChangeName = (e) => updateName(e.target.value);

  const handleChangeIngredients = (e) => updateIngredients(e.target.value);

  const handleChangeInstructions = (e) => updateInstructions(e.target.value);

  return (
    <form>
      <div className="form--input">
        <label htmlFor="name">Título</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escribe un título"
          value={name}
          onChange={handleChangeName}
          disabled={isDisabled}
        />
      </div>

      <div className="form">
        <label htmlFor="ingredients">Ingredientes</label>
        <textarea
          id="ingredients"
          name="ingredients"
          placeholder="Escribe los ingredientes"
          value={ingredients}
          onChange={handleChangeIngredients}
          disabled={isDisabled}
        />
      </div>

      <div className="form">
        <label htmlFor="instructions">Instrucciones</label>
        <textarea
          id="instructions"
          name="instructions"
          placeholder="Escribe los pasos a seguir"
          value={instructions}
          onChange={handleChangeInstructions}
          disabled={isDisabled}
        />
      </div>
    </form>
  );
};

export default Form;
