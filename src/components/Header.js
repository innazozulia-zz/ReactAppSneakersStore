import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
      <div className="d-flex align-center">
        
        <img width={50} height={50} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">The best choise</p>
        </div>
      </div>
      </Link>
      <ul className="d-flex ">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            width={18}
            height={18}
            src="/img/shopping-cart.svg"
            alt="shopping-cart"
          />
          <span>167 $</span>
        </li>

        <li className="mr-15  cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="/img/heart.svg" alt="heart" />{" "}
          </Link>
        </li>

        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
