import "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../services/api";
import Form from "../components/Form";
import "../styles/app.css";

const AddPage = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const navigate = useNavigate();

  const updateName = (value) => {
    setName(value);
  };

  const updateIngredients = (value) => {
    setIngredients(value);
  };

  const updateInstructions = (value) => {
    setInstructions(value);
  };

  const handleSubmit = () => {
    addRecipe({ name, ingredients, instructions }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <h1>Nueva receta</h1>

      <Form
        name={name}
        ingredients={ingredients}
        instructions={instructions}
        updateName={updateName}
        updateIngredients={updateIngredients}
        updateInstructions={updateInstructions}
      />

      <button
        onClick={handleSubmit}
        disabled={!name || !ingredients || !instructions}
      >
        Añadir receta
      </button>
    </>
  );
};

export default AddPage;
