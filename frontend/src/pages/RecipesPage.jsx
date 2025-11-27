import "react";
import { useEffect } from "react";
import { useState } from "react";
import RecipesList from "../components/RecipesList";
import { getRecipes } from "../services/api";
import '../styles/app.css'

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then((data) => {
      setRecipes(data);
    });
  }, []);
  return (
    <>
      <h1>Mis recetas</h1>
      <section>
        <RecipesList recipes={recipes} />
      </section>
    </>
  );
};

export default RecipesPage;
