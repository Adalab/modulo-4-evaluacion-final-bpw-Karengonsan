import "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services/api";
import RecipeItem from "../components/RecipeItem"
import '../styles/app.css'

const RecipePage = () => {
    const [recipe, setRecipe] = useState(null);
    
    const { id } = useParams();

    useEffect(() => {
        getRecipe(id).then((data) => {
            setRecipe(data);
        })
    }, [id]);
    return(
        <>
        <h1>Receta</h1>
        <RecipeItem recipe={recipe}/>
        </>
    )
}

export default RecipePage;