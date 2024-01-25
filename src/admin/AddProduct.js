import React from "react";
import AdminSidebar from "./AdminSidebar";

const AddProduct = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-6 mt-5">
            <form className="shadow-lg p-3 rounded-4">
              <h2 className="text-center">Add Recipe</h2>

              <div className="mb-3">
                <label htmlFor="recipe_name">Recipe Name</label>
                <input type="text" className="form-control" id="recipe_name" />
              </div>
              <div className="mb-3">
                <label htmlFor="image">Recipe Image</label>
                <input type="file" className="form-control" id="image" />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Recipe description</label>
                <input type="text" className="form-control" id="description" />
              </div>
              <div className="mb-3">
                <label htmlFor="prep_time">Preparation Time</label>
                <input type="number" className="form-control" id="prep_time" />
              </div>
              <div className="mb-3">
                <label htmlFor="cook_time">Cooking Time</label>
                <input type="number" className="form-control" id="cook_time" />
              </div>
              <div className="mb-3">
                <label htmlFor="instructions">Instructions</label>
                <input type="text" className="form-control" id="instructions" />
              </div>
              <div className="mb-3">
                <label htmlFor="category">Category</label>
                <select className="form-control">
                  <option value="">breakfast</option>
                  <option value="">dinner</option>
                </select>
              </div>

              <div className="mb-3 text-center">
                <button className="btn btn-warning ">Add Product</button>
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
