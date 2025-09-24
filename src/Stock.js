import React from 'react';
import { RefreshCw, Clock, Printer, FileText, FileSpreadsheet, BarChart3, Search,File, HelpCircle, } from 'lucide-react';
import Split from 'react-split';
import "./stock.css";
import { Star, Scan, Hash } from "lucide-react";
import { TagIcon } from "@heroicons/react/24/solid";


const StockComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="stock-page-exact">
      {/* Top Header - exactly like image */}
      <div className="stock-top-header">
        <div className="stock-nav-breadcrumb"></div>
      </div>

      <div className="stock-icon-toolbar">
        <button className="stock-icon-btn">
          <RefreshCw size={16} />
          <span className="icon-label">Refresh</span>
        </button>
        <button className="stock-icon-btn">
          <Clock size={16} />
          <span className="icon-label">Stock history</span>
        </button>
        <button className="stock-icon-btn">
          <Printer size={16} />
          <span className="icon-label">Print</span>
        </button>
        <button className="stock-icon-btn">
          <FileText size={16} />
          <span className="icon-label">Save as PDF</span>
        </button>
        <button className="stock-icon-btn">
          <FileSpreadsheet size={16} />
          <span className="icon-label">Excel</span>
        </button>
        <button className="stock-icon-btn">
          <BarChart3 size={16} />
          <span className="icon-label">Inventory count report</span>
        </button>
        <button className="stock-icon-btn">
          <Search size={16} />
          <span className="icon-label">Quick inventory</span>
        </button>
        <button className="stock-icon-btn">
          <HelpCircle size={16} />
          <span className="icon-label">Help</span>
        </button>
      </div>

      {/* Split container for products list and content area */}
      <Split 
        className="stock-split-container"
        sizes={[30, 100]}
        minSize={200}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        direction="horizontal"
      >
        {/* Left panel - Products list */}
        <div className="stock-products-panel">
          <div className="products-list-header">
            <h3 style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "2px 9px",
              border: "2px solid #3498db",
              borderRadius: "2px",
              backgroundColor: "#3498db",
              color: "#ffffff",
              fontWeight: "normal"
            }}>
              <File size={20} /> Products
            </h3>
          </div>
          <div className="products-list-content">
            <div className="empty-products-list">
              No products available
            </div>
          </div>
        </div>

        {/* Right panel - Table content */}
        <div className="stock-content-panel">
          {/* Blue Products button and filters - exactly like image */}
          <div className="stock-products-section">
            <div className="stock-filter-checkboxes">
              <label className="stock-checkbox-label">
                <input type="checkbox" />
                <span>Negative quantity</span>
              </label>
              <label className="stock-checkbox-label">
                <input type="checkbox" />
                <span>Non zero quantity</span>
              </label>
              <label className="stock-checkbox-label">
                <input type="checkbox" />
                <span>Zero quantity</span>
              </label>
            </div>
            <div className="stock-count-text">
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  marginRight: "5px"
                }}
              >
                0
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  marginRight: "5px"
                }}
              >
                0
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  textAlign: "center",
                  backgroundColor: "green",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px"
                }}
              >
                0
              </span>
            </div>
          </div>

          <div className="search-bar">
            <button className="search-tool"><Star size={16} /></button>
            <button className="search-tool"><Scan size={16} /></button>
            <button className="search-tool"><Hash size={16} /></button>
            <button className="search-tool">
              <TagIcon style={{ width: "16px", height: "16px", color: "blue" }} />
            </button>
            <div className="search-field">
              <input
                type="text"
                placeholder="Product name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button"><Search size={16} /></button>
            </div>
            <th style={{ fontWeight: "normal", fontSize: "12px" }}>
              Products count : 0
            </th>
          </div>

          {/* Table with exact columns - exactly like image */}
          <div className="stock-main-table">
            <table className="stock-table-exact">
              <thead>
                <tr className="white-header">
                  <th>Code</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Unit o...</th>
                  <th>Cost p...</th>
                  <th>Cost</th>
                  <th>Cost incl...</th>
                  <th>Value</th>
                  <th>Value incl...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="9" className="stock-no-data">
                    {/* Empty table content */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom summary - exactly like image */}
          <div
            className="stock-bottom-info"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "40px",
              padding: "10px"
            }}
          >
            <div className="stock-price-section" style={{ textAlign: "right" }}>
              <h4>Sale price</h4>
              <div>Total: 0.00</div>
              <div>Total inc. tax: 0.00</div>
            </div>
            <div className="stock-price-section" style={{ textAlign: "right" }}>
              <h4>Cost price</h4>
              <div>Total cost: 0.00</div>
              <div>Total cost inc. tax: 0.00</div>
            </div>
          </div>
        </div>
      </Split>
    </div>
  );
};

export default StockComponent;