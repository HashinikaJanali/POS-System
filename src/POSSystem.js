import './POSSystem.css';

import React, { useState } from 'react';
import { 
  Search, User, ArrowRightLeft, Tag, Plus, RotateCcw, Calculator, 
  CreditCard, Menu, X, Hash, Star, Scan, Home, ChevronLeft, 
  ChevronRight, SkipBack, SkipForward, Lock, LayoutDashboard, 
  FileText, Package, Archive, BarChart3, Users, Heart, Key, 
  Globe, Percent, Building, ArrowLeft, Settings, TrendingUp, 
  Layers, Briefcase, CheckSquare, LogOut, Volume2, RefreshCw, 
  Clock, FileSpreadsheet, Printer, Save, HelpCircle, Eye, 
  EyeOff, Check, Bell, MessageSquare, Calendar, Trash2
} from 'lucide-react';

const POSApplication = () => {
  const [currentView, setCurrentView] = useState('pos');
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    code: '1',
    barcode: '',
    unitOfMeasurement: '',
    group: 'Products',
    active: true,
    defaultQuantity: true,
    service: false,
    ageRestriction: '',
    description: '',
    salePrice: '',
    costPrice: '',
    taxRate: '0',
    taxIncluded: false,
    trackStock: true,
    minimumStock: '0',
    maximumStock: '',
    reorderPoint: '0',
    comments: '',
    internalNotes: '',
    productColor: '#ffffff',
    productImage: null
  });

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'stock', label: 'Stock', icon: Archive },
    { id: 'reporting', label: 'Reporting', icon: BarChart3 },
    { id: 'customers', label: 'Customers & suppliers', icon: Users },
    { id: 'promotions', label: 'Promotions', icon: Heart },
    { id: 'users', label: 'Users & security', icon: Key },
    { id: 'payment', label: 'Payment types', icon: CreditCard },
    { id: 'countries', label: 'Countries', icon: Globe },
    { id: 'tax', label: 'Tax rates', icon: Percent },
    { id: 'company', label: 'My company', icon: Building }
  ];

  const adminMenuItems = [
    { id: 'management', label: 'Management', icon: Settings, action: () => { setCurrentView('management'); setActiveSection('dashboard'); } },
    { id: 'sales-history', label: 'View sales history', icon: TrendingUp },
    { id: 'open-sales', label: 'View open sales', icon: Layers },
    { id: 'cash-in-out', label: 'Cash In / Out', icon: Briefcase },
    { id: 'credit-payments', label: 'Credit payments', icon: CreditCard },
    { id: 'end-of-day', label: 'End of day', icon: CheckSquare }
  ];

  const POSSystem = () => (
    <div className="pos-container">
      <div className="title-bar">
        <div className="title-left">
          <div className="app-icon"></div>
          <span className="app-name">Aronium Lite</span>
        </div>
        <div className="window-controls">
          <button className="window-btn minimize-btn">−</button>
          <button className="window-btn maximize-btn">□</button>
          <button className="window-btn close-btn">
            <X size={12} />
          </button>
        </div>
      </div>
      <div className="top-bar-functions">
        <div className="button-grid-4">
          <button className="function-btn"><Search size={16} /><span>Search</span></button>
          <button className="function-btn"><User size={16} /><span>Customer</span></button>
          <button className="function-btn"><ArrowRightLeft size={16} /><span>Transfer</span></button>
          <button className="function-btn"><Tag size={16} /><span>Discount</span></button>
        </div>
        <div className="button-grid-4">
          <button className="function-btn"><Plus size={16} /><span>New sale</span></button>
          <button className="function-btn"><RotateCcw size={16} /><span>Refund</span></button>
          <button className="function-btn"><Calculator size={16} /><span>Cash drawer</span></button>
          <button className="function-btn"><span className="function-key">F9</span><span>Save sale</span></button>
        </div>
        <div className="button-grid-3">
          <button className="function-btn payment-btn"><span className="function-key">F10</span><span>Payment</span></button>
          <button className="function-btn"><span className="function-key">F12</span><span>Cash</span></button>
          <button className="function-btn"><CreditCard size={16} /><span>Card</span></button>
        </div>
        <div className="button-single">
          <button className="function-btn check-btn"><span>Check</span></button>
        </div>
      </div>
      <div className="main-content">
        <div className="left-panel">
          <div className="control-section">
            <div className="control-row">
              <button className="delete-btn"><X size={14} />Delete</button>
              <div className="quantity-section">
                <span className="quantity-label">Quantity</span>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="quantity-input"
                />
              </div>
            </div>
          </div>
          <div className="items-section">
            <div className="no-items">No items</div>
          </div>
          <div className="total-section">
            <div className="total-row"><span>Subtotal</span><span>0.00</span></div>
            <div className="total-row"><span>Tax</span><span>0.00</span></div>
            <div className="total-divider"></div>
            <div className="total-row total-final"><span>Total</span><span>0.00</span></div>
          </div>
          <div className="bottom-actions">
            <button className="action-btn void-btn"><span>Void o...</span></button>
            <button className="action-btn lock-btn"><Lock size={16} /><span>Lock</span></button>
            <button className="action-btn repeat-btn"><span>Repeat ro...</span></button>
          </div>
        </div>
        <div className="content-area">
          <div className="search-section">
            <div className="search-toolbar">
              <button className="toolbar-btn"><Star size={16} /></button>
              <button className="toolbar-btn"><Scan size={16} /></button>
              <button className="toolbar-btn"><Hash size={16} /></button>
              <button className="toolbar-btn"><Tag size={16} /></button>
              <div className="search-input-container">
                <input
                  type="text"
                  placeholder="Search products by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn"><Search size={16} /></button>
              </div>
              <button className="toolbar-btn" onClick={() => setShowAdminMenu(true)}><Menu size={16} /></button>
            </div>
          </div>
          <div className="product-display">
            <div className="empty-state">
              <div className="empty-icon"><Tag size={24} /></div>
              <h2 className="empty-title">No products available</h2>
              <p className="empty-description">Please, add products or set sale price to existing ones to continue</p>
            </div>
          </div>
          <div className="bottom-nav">
            <div className="page-info"><span>Page 1 / 0</span></div>
            <div className="nav-controls">
              <button className="nav-btn"><Home size={16} /></button>
              <button className="nav-btn"><SkipBack size={16} /></button>
              <button className="nav-btn"><ChevronLeft size={16} /></button>
              <button className="nav-btn"><ChevronRight size={16} /></button>
              <button className="nav-btn"><SkipForward size={16} /></button>
            </div>
            <div className="time-display"><div>7:54 PM</div><div>9/7/2025</div></div>
          </div>
        </div>
      </div>
    </div>
  );

  const ManagementDashboard = () => {
    const renderSidebar = () => (
      <div className={`management-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <button onClick={() => setCurrentView('pos')} className="back-btn"><ArrowLeft size={20} /></button>
          {!sidebarCollapsed && <span>Management • {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</span>}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="collapse-btn">{sidebarCollapsed ? '»' : '«'}</button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`} onClick={() => setActiveSection(item.id)} title={sidebarCollapsed ? item.label : ''}>
              <item.icon size={20} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
    );

    const renderDashboard = () => (
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="admin-btn" onClick={() => setShowAdminMenu(true)}>POS - Admin</button>
        </div>
        <div className="dashboard-grid">
          <div className="sales-card">
            <h2>Total Sales (Amount)</h2>
            <div className="sales-amount">0</div>
          </div>
          <div className="stats-card">
            <h3>Quick Stats</h3>
            <div className="stat-item"><span>Products: </span><span>0</span></div>
            <div className="stat-item"><span>Customers: </span><span>0</span></div>
            <div className="stat-item"><span>Today's Sales: </span><span>0</span></div>
            <div className="stat-item"><span>Active Users: </span><span>1</span></div>
          </div>
          <div className="actions-card">
            <h3>Quick Actions</h3>
            <button className="quick-btn" onClick={() => setActiveSection('products')}><Package size={16} />Add Product</button>
            <button className="quick-btn" onClick={() => setCurrentView('pos')}><Calculator size={16} />Open POS</button>
            <button className="quick-btn" onClick={() => setActiveSection('stock')}><Archive size={16} />View Stock</button>
            <button className="quick-btn" onClick={() => setActiveSection('customers')}><Users size={16} />Customers</button>
          </div>
        </div>
      </div>
    );

    const renderDocuments = () => (
      <div className="documents-content">
        <div className="content-header">
          <h1>Documents</h1>
          <button className="add-btn"><Plus size={16} />New Document</button>
        </div>
        <div className="documents-list">
          <div className="empty-state">
            <FileText size={48} />
            <h3>No documents found</h3>
            <p>Create your first document to get started</p>
          </div>
        </div>
      </div>
    );

    const renderStock = () => (
      <div className="stock-content">
        <div className="stock-header">
          <div className="breadcrumb"><ArrowLeft size={16} /><span>Management • Stock</span></div>
          <button className="close-btn" onClick={() => setCurrentView('pos')}><X size={16} /></button>
        </div>
        <div className="stock-toolbar">
          <div className="toolbar-left">
            <button className={`toolbar-btn ${activeSection === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveSection('dashboard')}><LayoutDashboard size={16} />Dashboard</button>
            <button className={`toolbar-btn ${activeSection === 'documents' ? 'active' : ''}`} onClick={() => setActiveSection('documents')}><FileText size={16} />Documents</button>
            <button className={`toolbar-btn ${activeSection === 'products' ? 'active' : ''}`} onClick={() => setActiveSection('products')}><Package size={16} />Products</button>
            <button className={`toolbar-btn ${activeSection === 'stock' ? 'active' : ''}`}><Archive size={16} />Stock</button>
          </div>
          <div className="toolbar-right">
            <button className="icon-btn" title="Refresh"><RefreshCw size={16} /></button>
            <button className="icon-btn" title="Stock History"><Clock size={16} /></button>
            <button className="icon-btn" title="Print"><Printer size={16} /></button>
            <button className="icon-btn" title="Save as PDF"><Save size={16} /></button>
            <button className="icon-btn" title="Excel"><FileSpreadsheet size={16} /></button>
            <button className="icon-btn" title="Inventory Count Report"><BarChart3 size={16} /></button>
            <button className="icon-btn" title="Quick Inventory"><Search size={16} /></button>
            <button className="icon-btn" title="Help"><HelpCircle size={16} /></button>
          </div>
        </div>
        <div className="stock-filters">
          <button className="filter-btn active">Products</button>
          <div className="quantity-filters">
            <label className="quantity-filter"><input type="checkbox" /><span>Negative quantity</span><span className="count red">0</span></label>
            <label className="quantity-filter"><input type="checkbox" /><span>Non zero quantity</span><span className="count blue">0</span></label>
            <label className="quantity-filter"><input type="checkbox" /><span>Zero quantity</span><span className="count green">0</span></label>
          </div>
          <div className="products-count">Products count: 0</div>
        </div>
        <div className="stock-search">
          <div className="search-tools">
            <button className="search-tool">⭐</button>
            <button className="search-tool">|||</button>
            <button className="search-tool">#</button>
            <button className="search-tool">🏷️</button>
            <input type="text" placeholder="Product name" className="product-search" />
          </div>
        </div>
        <div className="stock-table">
          <table>
            <thead>
              <tr>
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
                <td colSpan="9" className="empty-stock">No stock data available</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="stock-summary">
          <div className="summary-section">
            <h4>Cost price</h4>
            <div>Total cost: 0.00</div>
            <div>Total cost inc. tax: 0.00</div>
          </div>
          <div className="summary-section">
            <h4>Sale price</h4>
            <div>Total: 0.00</div>
            <div>Total inc. tax: 0.00</div>
          </div>
        </div>
      </div>
    );

    const renderProducts = () => (
      <div className="products-content">
        <div className="products-toolbar">
          <button className="toolbar-btn active">Products</button>
          <div className="search-tools">
            <button className="search-tool">⭐</button>
            <button className="search-tool">|||</button>
            <button className="search-tool">#</button>
            <button className="search-tool">🏷️</button>
            <input type="text" placeholder="Product name" className="product-search" />
          </div>
          <div className="products-count">Products count: {products.length}</div>
        </div>
        {products.length === 0 ? (
          <div className="empty-products">
            <div className="empty-icon"><EyeOff size={48} /></div>
            <h3>Selected group contains no products</h3>
            <div className="empty-actions">
              <button className="add-product-btn" onClick={() => setShowAddProduct(true)}>Add new product</button>
              <span> or </span>
              <button className="add-group-btn">new product group</button>
            </div>
          </div>
        ) : (
          <div className="products-list">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <p>Code: {product.code}</p>
                  <p>Group: {product.group}</p>
                </div>
                <div className="product-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn"><Trash2 size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );

    const renderCustomers = () => (
      <div className="customers-content">
        <div className="content-header">
          <h1>Customers & Suppliers</h1>
          <button className="add-btn"><Plus size={16} />Add Customer</button>
        </div>
        <div className="customers-list">
          <div className="empty-state">
            <Users size={48} />
            <h3>No customers found</h3>
            <p>Add your first customer to get started</p>
          </div>
        </div>
      </div>
    );

    const renderReporting = () => (
      <div className="reporting-content">
        <div className="content-header">
          <h1>Reporting</h1>
          <button className="generate-btn"><BarChart3 size={16} />Generate Report</button>
        </div>
        <div className="reports-grid">
          <div className="report-card">
            <h3>Sales Report</h3>
            <p>Daily, weekly, monthly sales data</p>
            <button className="view-btn">View Report</button>
          </div>
          <div className="report-card">
            <h3>Inventory Report</h3>
            <p>Stock levels and movements</p>
            <button className="view-btn">View Report</button>
          </div>
          <div className="report-card">
            <h3>Customer Report</h3>
            <p>Customer analytics and trends</p>
            <button className="view-btn">View Report</button>
          </div>
        </div>
      </div>
    );

    const renderContent = () => {
      switch(activeSection) {
        case 'dashboard': return renderDashboard();
        case 'documents': return renderDocuments();
        case 'products': return renderProducts();
        case 'stock': return renderStock();
        case 'customers': return renderCustomers();
        case 'reporting': return renderReporting();
        case 'promotions': return (
          <div className="promotions-content">
            <div className="content-header"><h1>Promotions</h1><button className="add-btn"><Plus size={16} />New Promotion</button></div>
            <div className="empty-state"><Heart size={48} /><h3>No active promotions</h3><p>Create promotions to boost sales</p></div>
          </div>
        );
        default: return (
          <div className="default-content">
            <div className="content-header"><h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1></div>
            <div className="empty-state"><Settings size={48} /><h3>Section under construction</h3><p>This section is being developed</p></div>
          </div>
        );
      }
    };

    return (
      <div className="management-container">
        {renderSidebar()}
        <div className="management-main">
          {renderContent()}
        </div>
      </div>
    );
  };

  const AdminMenuOverlay = () => (
    <div className="admin-menu-overlay" onClick={() => setShowAdminMenu(false)}>
      <div className="admin-menu" onClick={e => e.stopPropagation()}>
        <div className="admin-header">
          <h3>POS - Admin</h3>
          <button className="close-admin" onClick={() => setShowAdminMenu(false)}><X size={16} /></button>
        </div>
        <div className="admin-section">
          {adminMenuItems.map(item => (
            <button key={item.id} className="admin-item" onClick={() => {if (item.action) item.action(); setShowAdminMenu(false);}}>
              <item.icon size={20} /><span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="admin-section">
          <h4>User</h4>
          <button className="admin-item"><User size={20} /><span>User info</span></button>
          <button className="admin-item"><LogOut size={20} /><span>Sign out</span></button>
          <button className="admin-item"><Volume2 size={20} /><span>Feedback</span></button>
        </div>
        <div className="admin-footer"><span>9/7/2025</span></div>
      </div>
    </div>
  );

  const AddProductForm = () => {
    const handleSave = () => {
      if (newProduct.name.trim()) {
        setProducts([...products, { ...newProduct, id: Date.now() }]);
        setNewProduct({
          name: '', code: (products.length + 2).toString(), barcode: '', unitOfMeasurement: '', group: 'Products', active: true, defaultQuantity: true, service: false, ageRestriction: '', description: ''
        });
        setShowAddProduct(false);
      }
    };
    
    return (
      <div className="add-product-overlay" onClick={() => setShowAddProduct(false)}>
        <div className="add-product-form" onClick={e => e.stopPropagation()}>
          <div className="form-header">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <h2>New product</h2>
            <button className="form-close" onClick={() => setShowAddProduct(false)}>&#8594;</button>
          </div>
          <div className="form-tabs">
            <button className="tab active">Details</button>
            <button className="tab">Price & tax</button>
            <button className="tab">Stock control</button>
            <button className="tab">Comments</button>
            <button className="tab">Image & color</button>
          </div>
          <div className="form-content">
            <div className="form-group">
              <label>Name *</label>
              <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} className={`form-input ${!newProduct.name.trim() ? 'name-required' : ''}`} placeholder="Enter product name"/>
            </div>
            <div className="form-group">
              <label>Code</label>
              <input type="text" value={newProduct.code} onChange={(e) => setNewProduct({...newProduct, code: e.target.value})} className="form-input"/>
            </div>
            <div className="form-group">
              <label>Barcode</label>
              <input type="text" value={newProduct.barcode} onChange={(e) => setNewProduct({...newProduct, barcode: e.target.value})} className="form-input" placeholder="Scan or enter barcode"/>
              <button className="generate-barcode">Generate barcode</button>
            </div>
            <div className="form-group">
              <label>Unit of measurement</label>
              <input type="text" value={newProduct.unitOfMeasurement} onChange={(e) => setNewProduct({...newProduct, unitOfMeasurement: e.target.value})} className="form-input" placeholder="e.g., pcs, kg, liter"/>
            </div>
            <div className="form-group">
              <label>Group</label>
              <select value={newProduct.group} onChange={(e) => setNewProduct({...newProduct, group: e.target.value})} className="form-select">
                <option>Products</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Food & Beverages</option>
                <option>Home & Garden</option>
              </select>
            </div>
            <div className="form-checkboxes">
              <label className="checkbox-group">
                <input type="checkbox" checked={newProduct.active} onChange={(e) => setNewProduct({...newProduct, active: e.target.checked})}/>
                <span className={`checkmark ${newProduct.active ? 'active' : ''}`}></span><span>Active</span>
              </label>
              <label className="checkbox-group">
                <input type="checkbox" checked={newProduct.defaultQuantity} onChange={(e) => setNewProduct({...newProduct, defaultQuantity: e.target.checked})}/>
                <span className={`checkmark ${newProduct.defaultQuantity ? 'active' : ''}`}></span><span>Default quantity</span>
              </label>
              <label className="checkbox-group">
                <input type="checkbox" checked={newProduct.service} onChange={(e) => setNewProduct({...newProduct, service: e.target.checked})}/>
                <span className={`checkmark ${newProduct.service ? 'active' : ''}`}></span><span>Service (not using stock)</span>
              </label>
            </div>
            <div className="form-group">
              <label>Age restriction</label>
              <div className="age-restriction">
                <input type="number" value={newProduct.ageRestriction} onChange={(e) => setNewProduct({...newProduct, ageRestriction: e.target.value})} className="form-input age-input" placeholder="0"/>
                <span>year(s)</span>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea value={newProduct.description} onChange={(e) => setNewProduct({...newProduct, description: e.target.value})} className="form-textarea" placeholder="Enter product description..."/>
            </div>
          </div>
          <div className="form-footer">
            <button className="save-final-btn" onClick={handleSave}><Check size={16} />Save</button>
            <button className="cancel-btn" onClick={() => setShowAddProduct(false)}><X size={16} />Cancel</button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="app-container">
      {currentView === 'pos' && <POSSystem />}
      {currentView === 'management' && <ManagementDashboard />}
      {showAdminMenu && <AdminMenuOverlay />}
      {showAddProduct && <AddProductForm />}
    </div>
  );
};

export default POSApplication;