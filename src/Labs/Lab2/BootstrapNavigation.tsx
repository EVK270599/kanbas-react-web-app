export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className="nav-link active" type="button">
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">
            Link
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled" type="button" disabled>
            Disabled
          </button>
        </li>
      </ul>
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="images/stacked.jpg"
            className="card-img-top"
            alt="Stacked Starship" // Alt text for accessibility
          />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship</h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <button className="btn btn-primary" type="button">
              Boldly Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
