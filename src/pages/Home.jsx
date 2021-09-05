import Card from "../components/Card";
function Home({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToCart,
  onAddToFavorites,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center  justify-between mb-40">
        <h1>
          {searchValue ? `Search for : "${searchValue}"` : "All Sneakers"}
        </h1>
        <div className="search-block d-flex">
          <img
            width={15}
            height={15}
            src="/img/loupe.svg"
            alt="search"
            style={{ marginTop: 14 }}
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={14}
              height={14}
              src="/img/close.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavorite={(obj) => onAddToFavorites(obj)}
              onClickPlus={(obj) => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}
export default Home;
