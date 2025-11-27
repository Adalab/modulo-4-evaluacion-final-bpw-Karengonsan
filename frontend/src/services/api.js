export const getRecipes = () => {
  return fetch("http://localhost:3000/recipes", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => {
        return {
          id: item.id_recipe,
          name: item.name,
          ingredients: item.ingredients,
          instructions: item.instructions,
        };
      });
      return cleanData;
    })
    .catch((error) => console.log(error));
};

export const getRecipe = (id) => {
  return fetch(`http://localhost:3000/recipe/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((item) => {
        return {
          id: item.id_recipe,
          name: item.name,
          ingredients: item.ingredients,
          instructions: item.instructions,
        };
      });
      return cleanData[0];
    })
    .catch((error) => console.log(error));
};

export const addRecipe = (data) => {
  return fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const modifyRecipe = (data, id) => {
  return fetch(`http://localhost:3000/modify/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(() => {
      return;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteRecipe = ( id) => {
  return fetch(`http://localhost:3000/delete/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};

export const loginUser = (email, password) => {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
