import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import RecipesPage from "./RecipesPage";
import RecipePage from "./RecipePage";
import PrivateRoute from "../components/PrivateRoute";
import NotFoundPage from "./NotFoundPage";
import AddPage from "./AddPage";
import "../styles/app.css";

const App = () => {
  // Aquí vamos a declarar nuestras rutas
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/recipes" element={<PrivateRoute><RecipesPage /></PrivateRoute>} />
      <Route path="/form" element={<PrivateRoute><AddPage /></PrivateRoute>} />
      <Route path="/recipes/:id" element={<PrivateRoute><RecipePage /></PrivateRoute>} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
