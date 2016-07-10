import dispatcher from "../dispatcher";

export function createRecipe(title, ingredients) {
  dispatcher.dispatch({
    type: "CREATE_RECIPE",
    title,
    ingredients,
  });
}

export function deleteRecipe(id) {
  dispatcher.dispatch({
    type: "DELETE_RECIPE",
    id,
  });
}

export function reloadRecipes() {
  dispatcher.dispatch({type: "FETCH_RECIPES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_RECIPES", recipes: [
      {
        id: 8484848484,
        title: "recipe 1 reload",
        ingredients: "something1 reload",
        featured: false
      },
      {
        id: 6262627272,
        title: "recipe 2 reload",
        ingredients: "something2 reload",
        featured: false
      },
    ]});
  }, 1000);
}
