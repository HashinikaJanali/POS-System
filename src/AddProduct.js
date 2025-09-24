import React from "react";
import "./AddProduct.css";
import { Check, X } from "lucide-react";

const AddProduct = ({ newProduct, setNewProduct, onSave, onCancel }) => {
  return (
    <div className="add-product-overlay" onClick={onCancel}>
      <div
        className="add-product-form"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header */}
        <div className="form-header">
          
          <h2>New product</h2>
          <button className="form-close" onClick={onCancel}>
            &#8594;
          </button>
        </div>

        {/* Tabs */}
        <div className="form-tabs">
          <button className="tab active">Details</button>
          <button className="tab">Price & tax</button>
          <button className="tab">Stock control</button>
          <button className="tab">Comments</button>
          <button className="tab">Image & color</button>
        </div>

        {/* Form Content */}
        <div className="form-content">
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className={`form-input ${
                !newProduct.name.trim() ? "name-required" : ""
              }`}
              placeholder="Enter product name"
            />
          </div>

          <div className="form-group">
            <label>Code</label>
            <input
              type="text"
              value={newProduct.code}
              onChange={(e) =>
                setNewProduct({ ...newProduct, code: e.target.value })
              }
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Barcode</label>
            <input
              type="text"
              value={newProduct.barcode}
              onChange={(e) =>
                setNewProduct({ ...newProduct, barcode: e.target.value })
              }
              className="form-input"
              placeholder="Scan or enter barcode"
            />
            <button className="generate-barcode">Generate barcode</button>
          </div>

          <div className="form-group">
            <label>Unit of measurement</label>
            <input
              type="text"
              value={newProduct.unitOfMeasurement}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  unitOfMeasurement: e.target.value,
                })
              }
              className="form-input"
              placeholder="e.g., pcs, kg, liter"
            />
          </div>

          <div className="form-group">
            <label>Group</label>
            <select
              value={newProduct.group}
              onChange={(e) =>
                setNewProduct({ ...newProduct, group: e.target.value })
              }
              className="form-select"
            >
              <option>Products</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Food & Beverages</option>
              <option>Home & Garden</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="form-checkboxes">
            <label className="checkbox-group">
              <input
                type="checkbox"
                checked={newProduct.active}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, active: e.target.checked })
                }
              />
              <span
                className={`checkmark ${newProduct.active ? "active" : ""}`}
              ></span>
              <span>Active</span>
            </label>

            <label className="checkbox-group">
              <input
                type="checkbox"
                checked={newProduct.defaultQuantity}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    defaultQuantity: e.target.checked,
                  })
                }
              />
              <span
                className={`checkmark ${
                  newProduct.defaultQuantity ? "active" : ""
                }`}
              ></span>
              <span>Default quantity</span>
            </label>

            <label className="checkbox-group">
              <input
                type="checkbox"
                checked={newProduct.service}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, service: e.target.checked })
                }
              />
              <span
                className={`checkmark ${newProduct.service ? "active" : ""}`}
              ></span>
              <span>Service (not using stock)</span>
            </label>
          </div>

          <div className="form-group">
            <label>Age restriction</label>
            <div className="age-restriction">
              <input
                type="number"
                value={newProduct.ageRestriction}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    ageRestriction: e.target.value,
                  })
                }
                className="form-input age-input"
                placeholder="0"
              />
              <span>year(s)</span>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="form-textarea"
              placeholder="Enter product description..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="form-footer">
          <button className="save-final-btn" onClick={onSave}>
            <Check size={16} /> Save
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            <X size={16} /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
