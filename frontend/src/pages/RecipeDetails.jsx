import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <h2 style={{ padding: 40 }}>No Recipe Found</h2>;
  }

  const recipe = state;

  return (
    <div className="recipe-page">

      {/* TOP TITLE */}
      <h2 className="recipe-top-title">HEALTHY INDIAN RECIPES</h2>

      <div className="recipe-container">

        {/* LEFT SIDE */}
        <div className="left-section">

          {/* Main Recipe Title */}
          <h2 className="recipe-name">
            INDIAN RECIPES → {recipe.name?.toUpperCase()}
          </h2>

          {/* Category - Meal - Zone */}
          <div className="meta-box">
            <div>
              <h4>Category</h4>
              <p>{recipe.category || "—"}</p>
            </div>

            <div>
              <h4>Meal of Day</h4>
              <p>{recipe.mealOfDay || "—"}</p>
            </div>

            <div>
              <h4>Zone/Region</h4>
              <p>{recipe.region || "—"}</p>
            </div>
          </div>

          {/* Description */}
          <p className="description">{recipe.about || recipe.description || "No description available."}</p>

          {/* Nutritional Values */}
          <h3 className="section-title">Nutritional values</h3>

          {recipe.nutrition ? (
            <div className="nutrition-grid">
              {Object.entries(recipe.nutrition).map(([key, value]) => (
                <div key={key}>
                  <a>{key}</a>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "#777", fontStyle: "italic" }}>
              Nutrition details not available.
            </p>
          )}

          {/* Ingredients */}
          <h3 className="section-title">Ingredients</h3>

          {recipe.ingredients ? (
            <div className="ingredients-section">
              {recipe.ingredients?.map((group, idx) => (
                <div key={idx} className="ingredient-group">
                  <h4>{group.title}</h4>
                  <ul>
                    {group.list?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: "#777", fontStyle: "italic" }}>
              No ingredients available.
            </p>
          )}

          {/* Procedure */}
          <h3 className="section-title">Procedure</h3>

          {recipe.procedure ? (
            <ol className="procedure-list">
              {recipe.procedure?.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          ) : (
            <p style={{ color: "#777", fontStyle: "italic" }}>
              No procedure steps available.
            </p>
          )}

          {/* Back button */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back To Recipes
          </button>

          {/* SHARE BUTTONS */}
          <div className="share-row">
            <button className="fb">Facebook</button>
            <button className="tw">Twitter</button>
            <button className="pi">Pinterest</button>
            <button className="li">LinkedIn</button>
            <button className="wa">Whatsapp</button>
            <button className="em">Email</button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE SECTION */}
        <div className="right-section">

          <div className="image-box">
            <img src={recipe.imgSrc} alt={recipe.name} />
          </div>

          {recipe.allowed && (
            <div className="allowed-box">
              <h4>Allowed in:</h4>
              <p>
                {recipe.allowed?.map((a, i) => (
                  <span key={i}>
                    {a}{i < recipe.allowed.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default RecipeDetails;
