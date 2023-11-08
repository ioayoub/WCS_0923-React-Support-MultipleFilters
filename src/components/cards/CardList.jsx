import PropTypes from "prop-types";
import Card from "./Card";
import { useState } from "react";

function CardList({ apiProducts }) {
  const products = apiProducts;

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categorySelected, setCategorySelected] = useState("All");
  const [searchValue, setSearchValue] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    setCategorySelected(category);

    setFilteredProducts(
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(searchValue)
      )
    );
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();

    setSearchValue(searchInput);

    setFilteredProducts(
      products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchInput) &&
          (categorySelected === "All" || p.category === categorySelected)
      )
    );
  };

  return (
    <>
      <div className="flex flex-row justify-center my-6 gap-4">
        <select name="selectFilter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Mode">Mode</option>
          <option value="Maison">Maison</option>
          <option value="Électronique">Électronique</option>
        </select>
        <input
          type="text"
          placeholder="Votre saisie ici"
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {filteredProducts.length ? (
          filteredProducts.map((p) => (
            <Card
              image={p.picture_resized}
              description={p.description}
              name={p.name}
              category={p.category}
              id={p.id}
              price={`${p.price}  €`}
              key={p.id}
            />
          ))
        ) : (
          <h1 className="text-2xl my-16">
            Aucun article ne correspond à votre recherche
          </h1>
        )}
      </div>
    </>
  );
}

CardList.propTypes = {
  apiProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,

      category: PropTypes.string.isRequired,
      picture_resized: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CardList;
