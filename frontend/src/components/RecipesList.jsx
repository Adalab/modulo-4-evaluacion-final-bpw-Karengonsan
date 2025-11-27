import "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/app.css"

const RecipesList = ({ recipes }) => {
  return (
    <>
    <img className="header__icon" src="./cena.png" alt="" aria-hidden="true"/>
      <ul>
        {recipes.map((recipe) => (
          <li className="myList" key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              {recipe.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default RecipesList;

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

