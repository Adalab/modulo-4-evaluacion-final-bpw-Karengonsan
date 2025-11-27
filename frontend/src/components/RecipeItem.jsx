import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { modifyRecipe, deleteRecipe, getRecipe } from "../services/api";
import "../styles/app.css";

const RecipeItem = () => {
  
  const [recipe, setRecipe] = useState(null);

  const [isReadMode, setIsReadMode] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(id).then((data) => {
      setRecipe(data);
    });
  }, [id]);

  const handleClickEdit = () => {
    setIsReadMode(false);
  };

  const handleClickSave = () => {
    modifyRecipe(recipe, id).then(() => {
      setIsReadMode(true);
    });
  };

  const handleClickDelete = () => {
    deleteRecipe(id).then(() => {
      navigate("/recipes");
    });
  };

  const handleChange = (ev) => {
    setRecipe({
      ...recipe,
      [ev.target.name]: ev.target.value,
    });
  };

  if (!recipe) return <p>Cargando…</p>;

  return (
    <>
      <img className="header__icon" src="./cena.png" alt="" aria-hidden="true" />

      <article>
        {isReadMode ? (
          <>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </>
        ) : (
          <>
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
            />
            <textarea
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
            />
            <textarea
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
            />
          </>
        )}
      </article>

      {isReadMode && <button onClick={handleClickEdit}>Editar</button>}

      {!isReadMode && <button onClick={handleClickSave}>Guardar cambios</button>}

      <button onClick={handleClickDelete}>Eliminar</button>

      <Link to="/recipes">Atrás</Link>
    </>
  );
};

export default RecipeItem;
