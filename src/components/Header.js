import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div onClick={() => props.handleShow(false)}>Global Farm Shopping</div>
      </div>
        
  );
}

export default Header;
