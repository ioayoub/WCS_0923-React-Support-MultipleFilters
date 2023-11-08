import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({ image, description, name, category, id, price }) {
  return (
    <>
      <Link to={`/products/${id}`}>
        <div className="mx-auto my-3 max-w-md rounded overflow-hidden shadow-lg">
          <img src={image} className="w-full" alt="a platter of cookies" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-base text-gray-700 min-h-[3em]">{description}</p>
          </div>
          <div className="px-6 py-4 flex flex-row justify-between">
            <span className="inline-block bg-gray-300 px-3 py-2 text-sm font-semibold mr-2 text-gray-700 rounded-full">
              #{category}
            </span>
            <span className="text-xl font-bold">{price}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
