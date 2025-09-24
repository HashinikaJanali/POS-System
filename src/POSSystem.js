import './POSSystem.css';
import AddProduct from './AddProduct';
import { MdSettings, MdHistory, MdShoppingCart, MdAttachMoney, MdCreditCard, MdSchedule, MdPerson, MdExitToApp, MdEvent, MdAccessTime } from 'react-icons/md';
import React, { useState, useRef, useEffect } from 'react';
import { TagIcon } from '@heroicons/react/24/solid';
import Split from 'react-split';
import Stock from './Stock';
import {
  Search, User, ArrowRightLeft, Tag, Plus, RotateCcw, Calculator,
  CreditCard, Menu, X, Hash, Star, Scan, Home, ChevronLeft,
  ChevronRight, SkipBack, SkipForward, Lock, LayoutDashboard,
  FileText, Package, Archive, BarChart3, Users, Heart, Key, Folder,
  Globe, Percent, Building, ArrowLeft, Settings, TrendingUp,
  Layers, ArrowUpNarrowWide, Briefcase, CheckSquare, LogOut, Volume2, RefreshCw,
  Clock, MoveDown, MoveUp, CircleQuestionMark, FileSpreadsheet, FolderPlus, FolderMinus, Printer, Save, HelpCircle, Eye,
  EyeOff, Check, ChartNoAxesCombined, Bell, FolderPen, PlusIcon, Pencil, SaveIcon, HashIcon, MessageSquare, Calendar, Trash2,
  HistoryIcon,
  CheckCheckIcon,
  Layers2,
  ChervronLeft,
  RefreshCwIcon,
  ArrowRight,
  Expand,
  Keyboard,
  Asterisk,
  Barcode,
  Power,
  Repeat,
  Layers3,
  DownloadIcon,
  DownloadCloudIcon,
  Wrench
} from 'lucide-react';
import { FcEndCall } from 'react-icons/fc';
import { GrSchedule } from 'react-icons/gr';
import { BiDownload } from 'react-icons/bi';
import { BsFillCloudDownloadFill } from 'react-icons/bs';


const POSApplication = () => {
  const [currentView, setCurrentView] = useState('pos');
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSave = () => {
    if (!newProduct.name.trim()) {
      alert('Product name is required!');
      return;
    }
    setProducts([...products, newProduct]);
    setNewProduct({
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
      productImage: null,
    });
    setShowAddProduct(false);
  };

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
    productImage: null,
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
    { id: 'company', label: 'My company', icon: Building },
  ];

  const adminMenuItems = [
    { id: 'management', label: 'Management', icon: Wrench, action: () => { setCurrentView('management'); setActiveSection('dashboard'); } },
    { id: 'sales-history', label: 'View sales history', icon: CheckCheckIcon },
    { id: 'open-sales', label: 'View open sales', icon: Layers3 },
    { id: 'cash-in-out', label: 'Cash In / Out', icon: BsFillCloudDownloadFill },
    { id: 'credit-payments', label: 'Credit payments', icon: CreditCard },
    { id: 'end-of-day', label: 'End of day', icon: GrSchedule },
  ];

  const POSSystem = () => (
    <div className="pos-container">
      <div className="top-bar-functions">
        <div className="function-groups">
          <div className="function-group">
            <button className="function-btn"><Search size={16} /><span>Search</span></button>
            <button className="function-btn"><User size={16} /><span>Customer</span></button>
            <button className="function-btn"><ArrowRightLeft size={16} /><span>Transfer</span></button>
            <button className="function-btn"><Percent size={16} /><span>Discount</span></button>
          </div>
          <div className="function-group">
            <button className="function-btn"><Plus size={16} /><span>New sale</span></button>
            <button className="function-btn"><RotateCcw size={16} /><span>Refund</span></button>
            <button className="function-btn"><Calculator size={16} /><span>Cash drawer</span></button>
            <button className="function-btn"><span className="function-key">F9</span><span>Save sale</span></button>
          </div>
          <div className="function-group">
            <button className="function-btn payment-btn"><span className="function-key">F10</span><span>Payment</span></button>
            <button className="function-btn"><span className="function-key">F12</span><span>Cash</span></button>
            <button className="function-btn"><CreditCard size={16} /><span>Card</span></button>
          </div>
          <div className="function-group-single">
            <button className="function-btn check-btn"><CreditCard size={16} /><span>Check</span></button>
          </div>
        </div>
        <button className="admin-menu-trigger" onClick={() => setShowAdminMenu(!showAdminMenu)}><Menu size={16} /></button>
      </div>
      <Split className="main-content" sizes={[30, 70]} minSize={100} expandToMin={false} gutterSize={10} gutterAlign="center" direction="horizontal">
        <div className="left-panel">
          <div className="cart-controls">
            <button className="delete-btn"><X size={14} />Delete</button>
            <div className="quantity-control">
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="quantity-input"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="items-area">
            <div className="no-items">No items</div>
          </div>
          <div className="totals-section">
            <div className="total-line"><span>Subtotal</span><span>0.00</span></div>
            <div className="total-line"><span>Tax</span><span>0.00</span></div>
            <div className="total-divider"></div>
            <div className="total-line total-main"><span>Total</span><span>0.00</span></div>
          </div>
          <div className="action-buttons">
            <button className="action-button void-button">
              <Trash2 size={14} color="white" />Void order
            </button>
            <button className="action-button lock-button"><Lock size={14} />Lock</button>
            <button className="action-button repeat-button"><Repeat size={14} />Repeat order</button>
          </div>
        </div>
        <div className="right-panel">
          <div className="search-bar">
            <button className="search-tool"><Asterisk size={16} /></button>
            <button className="search-tool"><Barcode size={16} /></button>
            <button className="search-tool"><Hash size={16} /></button>
            <button className="search-tool">
              <TagIcon style={{ width: '16px', height: '16px', color: 'blue' }} />
            </button>
            <div className="search-field">
              <input
                type="text"
                placeholder="Search products by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button"><Search size={16} /></button>
            </div>
            <button className="search-tool"><Keyboard size={16} /></button>
          </div>
          <div className="products-area">
            <div className="empty-products">
              <TagIcon style={{ width: '48px', height: '48px', color: 'red' }} />
              <h2 className="empty-title" style={{ color: '#ff0000' }}>No products available</h2>
              <p className="empty-desc" style={{ color: '#ff0000' }}>Please, add products or set sale price to existing ones to continue</p>
            </div>
          </div>
        </div>
      </Split>
    </div>
  );

  const ManagementDashboard = () => {
    const renderSidebar = () => (
      <div className={`management-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        {/* Header */}
        <div className="sidebar-header">
          <button onClick={() => setCurrentView('pos')} className="back-btn">
            <ArrowLeft size={20} />
          </button>
          {!sidebarCollapsed && (
            <span>
              Management • {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
              title={sidebarCollapsed ? item.label : ''}
            >
              <item.icon size={20} />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse button at bottom */}
        <div className="sidebar-footer">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="collapse-btn"
          >
            {sidebarCollapsed ? '»' : '«'}
          </button>
        </div>
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

    const renderProducts = () => (
      <div className="products-page">
        {/* Toolbar */}
        <div className="products-toolbar">
          {/* First row */}
          <div className="toolbar-row">
            <button className="toolbar-btn"><RefreshCw size={16} /> Refresh</button>
            <button className="toolbar-btn"><FolderPlus size={16} /> New group</button>
            <button className="toolbar-btn"><FolderPen size={16} /> Edit group</button>
            <button className="toolbar-btn"><FolderMinus size={16} /> Delete group</button>
            <button className="toolbar-btn"><Plus size={16} /> New product</button>
            <button className="toolbar-btn"><Pencil size={16} /> Edit product</button>
            <button className="toolbar-btn"><Trash2 size={16} /> Delete product</button>
            <button className="toolbar-btn"><Printer size={16} /> Print</button>
            <button className="toolbar-btn"><Save size={16} /> Save as PDF</button>
            <button className="toolbar-btn"><FileSpreadsheet size={16} /> Excel</button>
            <button className="toolbar-btn"><Tag size={16} /> Price tags</button>
            <button className="toolbar-btn"><ArrowUpNarrowWide size={16} /> Sorting</button>
            <button className="toolbar-btn"><TrendingUp size={16} /> Mov. avg. price</button>
          </div>

          {/* Second row */}
          <div className="toolbar-row">
            <button className="toolbar-btn"><DownloadCloudIcon size={16} /> Import</button>
            <button className="toolbar-btn"><BiDownload size={16} /> Export</button>
            <button className="toolbar-btn"><HelpCircle size={16} /> Help</button>
          </div>
        </div>

        {/* Split layout */}
        <div className="products-body">
          <Split
            className="products-split"
            sizes={[25, 75]}
            minSize={150}
            gutterSize={8}
            direction="horizontal"
          >
            {/* Left panel */}
            <div className="products-left">
              <div className="group-item active">📂 Products</div>
            </div>

            {/* Right panel */}
            <div className="products-right">
              {/* Search bar */}
              <div className="products-search">
                <button className="search-tool">✱</button>
                <button className="search-tool">|||</button>
                <button className="search-tool">#</button>
                <button className="search-tool">🏷️</button>
                <input
                  type="text"
                  placeholder="Product name"
                  className="product-search-input"
                />
                <div className="products-count">Products count: {products.length}</div>
              </div>

              {/* Empty state */}
              {products.length === 0 ? (
                <div className="products-empty">
                  <EyeOff size={64} className="empty-icon" />
                  <p>Selected group contains no products</p>
                  <div className="empty-links">
                    <button
                      className="link-btn"
                      onClick={() => setShowAddProduct(true)}
                    >
                      Add new product
                    </button>
                    <span> or </span>
                    <button className="link-btn">new product group</button>
                  </div>
                </div>
              ) : (
                <div className="products-list">
                  {products.map((p, i) => (
                    <div key={i} className="product-item">
                      {p.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Split>
        </div>
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
      switch (activeSection) {
        case 'dashboard': return renderDashboard();
        case 'documents': return renderDocuments();
        case 'products': return renderProducts();
        case 'stock': return <Stock searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
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

  const AdminMenuOverlay = () => {
    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setShowAdminMenu(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      showAdminMenu && (
        <div className="admin-overlay">
          <div className="admin-menu" ref={menuRef}>
            {/* Header */}
            <div className="admin-header">
              <h3>POS - Admin</h3>
              <button className="close-btn" onClick={() => setShowAdminMenu(false)}>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Menu Items */}
            <ul className="admin-list">
              {adminMenuItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    if (item.action) item.action();
                    setShowAdminMenu(false);
                  }}
                >
                  <item.icon className="admin-icon" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            {/* User Section */}
            <div className="admin-user">
              <h4>User</h4>
              <button onClick={() => setShowAdminMenu(false)}>
                <User className="admin-icon" /> User info
              </button>
              <button onClick={() => setShowAdminMenu(false)}>
                <LogOut className="admin-icon" /> Sign out
              </button>
              <button onClick={() => setShowAdminMenu(false)}>
                <MessageSquare className="admin-icon" /> Feedback
              </button>
            </div>

            {/* Date */}
            <div className="admin-date">{new Date().toLocaleDateString()}</div>

            {/* Bottom Controls */}
            <div className="admin-footer">
              <Settings className="admin-icon" />
              <Expand className="admin-icon" />
              <Power className="admin-icon" />
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div className="app-container">
      {currentView === 'pos' && <POSSystem />}
      {currentView === 'management' && <ManagementDashboard />}
      {showAdminMenu && <AdminMenuOverlay />}
      {showAddProduct && (
        <AddProduct
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          onSave={handleSave}
          onCancel={() => setShowAddProduct(false)}
        />
      )}
    </div>
  );
};

export default POSApplication;