import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <header>
        <h1>Cromwell</h1>
        <div className="info">
          <ul>
            <li>
              Next Day Delivery<span>across the UK*</span>
            </li>
            <li>
              New<span>Products</span>
            </li>
            <li>
              Best Prices<span>with a Trade Account</span>
            </li>
          </ul>
        </div>
      </header>
      <div className="quickLinks">
        <ul>
          <li>PPE & Clothing</li>
          <li>Hand Tools</li>
          <li>Cutting Tools</li>
          <li>Power Tools</li>
          <li>Abrasives</li>
          <li>Cleaning</li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
