import { Link } from "react-router-dom";

// Icons
import { FiPlus } from "react-icons/fi";

function Burger(props) {
  const { product_name, price, img, prodt_weight } = props;

  return (
    <article className="bg-white inline-block rounded-md overflow-hidden drop-shadow-sm">
      <Link to="#">
        <div>
          <img
            src={img}
            alt={product_name}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
        <div className="p-4 text-lg">
          <p className="flex justify-between">
            <b>{product_name}</b>
            <b>${price}</b>
          </p>
          <div className="space-x-2 py-1">
            <span className="cursor-pointer">Small</span>
            <span className="cursor-pointer text-tw-yellow-500 font-bold">
              Medium
            </span>
            <span className="cursor-pointer">Large</span>
          </div>
          <div className="flex items-center justify-between">
            <span>
              <b>{prodt_weight} g</b>
            </span>
            {/* <Link to="#"> */}
            <div className="drop-shadow-sm rounded-full bg-tw-yellow-700 p-3 cursor-pointer">
              <FiPlus />
            </div>
            {/* </Link> */}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Burger;
