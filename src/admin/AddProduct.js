import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../pages/auth";
import AdminSidebar from "./AdminSidebar";
import { createRecipe, getCategories } from "./apiAdmin";

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    recipe_name: "",
    description: "",
    prep_time: "",
    cook_time: "",
    instructions: "",
    image: "",
    categories: [],
    category: "",
    error: "",
    success: false,
    formData: "",
  });

  const {
    recipe_name,
    description,
    prep_time,
    cook_time,
    instructions,
    categories,
    category,
    error,
    success,
    formData,
  } = values;

  //load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  //to send form data
  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, owner: `${user._id}` });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.set("owner", `${user._id}`);

    setValues({ ...values, error: "" });
    createRecipe(token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          recipe_name: "",
          description: "",
          prep_time: "",
          cook_time: "",
          instructions: "",
          image: "",
          error: "",
          category: "",
          success: true,
        });
      }
    });
  };

  //to show error message
  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  //to show success message
  const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? "" : "none" }}>
      New Recipe added successfully
    </div>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-6 mt-5">
            <form className="shadow-lg p-3 rounded-4">
              {showError()}
              {showSuccess()}

              <h2 className="text-center">Add Recipe</h2>

              <div className="mb-3">
                <label htmlFor="recipe_name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="recipe_name"
                  onChange={handleChange("recipe_name")}
                  value={recipe_name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control" id="image" onChange={handleChange("image")} />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  onChange={handleChange("description")}
                  value={description}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="prep_time">Preparation Time</label>
                <input
                  type="number"
                  className="form-control"
                  id="prep_time"
                  onChange={handleChange("prep_time")}
                  value={prep_time}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cook_time">Cooking Time</label>
                <input
                  type="number"
                  className="form-control"
                  id="cook_time"
                  onChange={handleChange("cook_time")}
                  value={cook_time}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="instructions">Instructions</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="instructions"
                  onChange={handleChange("instructions")}
                  value={instructions}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category">Category</label>
                <select className="form-control" onChange={handleChange("category")} value={category}>
                  {categories &&
                    categories.map((c, i) => (
                      <option key={i} value={c._id}>
                        {c.category_Name}
                      </option>
                    ))}
                </select>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="owner">Owner</label>
                <input type="text" className="form-control" id="owner" onChange={handleChange("owner")} value={owner} />
              </div> */}

              <div className="mb-3 text-center">
                <button className="btn btn-warning " onClick={onSubmit}>
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

// recipe_name;
// image;
// description;
// prep_time;
// cook_time;
// instructions;
// category;
// rating;
// owner;
