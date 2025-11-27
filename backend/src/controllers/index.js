const { getRecipesController } = require ("./get-recipes-controller.js");
const { postRecipesController } = require ("./post-recipes-controller.js");
const { getRecipesIdController } = require ("./get-recipes-id-controller.js");
const { putRecipesController } = require ("./put-recipes-controller.js");
const { patchRecipesIdController } = require ("./patch-delete-recipes-id-controller.js");
const { postLoginController } = require ("./post-login-controller.js");
const { postSignupController } = require ("./post-signup-controller.js");

module.exports = {
    getRecipesController,
    postRecipesController,
    getRecipesIdController,
    putRecipesController,
    patchRecipesIdController,
    postLoginController,
    postSignupController
};