function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30 ">
          Shopping Cart{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            width={13}
            height={13}
            src="/img/close.svg"
            alt="close"
          />
        </h2>
        {items.length > 0 ? (
          <div>
            {" "}
            <div className="items">
              {items.map((obj) => (
                <div key={obj.price} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  />

                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    width={13}
                    height={13}
                    src="/img/close.svg"
                    alt="cancel"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Sum:</span>
                  <div></div>
                  <b>280 $</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>14 $</b>
                </li>
              </ul>
              <button className="greenButton">Сheckout </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20 basket"
              width={80}
              height={80}
              src="/img/shopping-basket.svg"
              alt="empty-cart"
            />
            <h2>Shopping Cart is Empty </h2>
            <p className="opacity-6">Please, add Sneakers to Shopping Cart</p>
            <button onClick={onClose} className="greenButtonBack">
              <img
                className="ArrowBack"
                width={20}
                height={20}
                src="/img/left-arrow.svg"
                alt="Arrow"
              />
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Drawer;
