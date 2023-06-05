import { Link } from "react-router-dom";

// Icons
import { FaHamburger } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { loginModalHandler } from "../loginModal";

const BurgerHeader = (props) => {
  const { wallet_balance, item_cart } = props;

  return (
    <header className="grid grid-cols-8 grid-rows-2 sm:grid-rows-1 gap-y-2">
      <article className="flex-grow flex-shrink-0 col-start-1 col-end-6">
        <Link
          to="#"
          className="inline-flex items-center space-x-2 bg-tw-yellow-700 px-3 py-2 rounded-full md:mb-0"
        >
          <FaHamburger className="text-xl" />
          <h1>
            <strong>Food Shack</strong>
          </h1>
        </Link>
      </article>

      <div className="lg:col-start-6 lg:col-end-8 self-center row-start-2 lg:row-start-1 col-start-1 col-end-9 flex justify-center">
        <ul className="flex lg:space-x-5 space-x-12">
          <li>
            <Link to="#">
              <b>Restaurants</b>
            </Link>
          </li>
          <li>
            <Link to="#">
              <b>ShackClub</b>
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-start-8 place-self-end">
        <ul className="flex space-x-5 items-center">
          <li>
            <div className="flex space-x-2 bg-tw-yellow-700 px-3 py-2 rounded-full">
              <Link to="#">
                <b>{wallet_balance}$</b>
              </Link>
              <Link to="#">
                <span className="relative">
                  {item_cart === 0 ? (
                    true
                  ) : (
                    <span className="absolute bg-red-600 rounded-full w-5 h-5 p-1 text-[10px] text-white -top-3 left-2 flex items-center justify-center drop-shadow-sm">
                      {item_cart}
                    </span>
                  )}
                  <HiOutlineShoppingBag className="text-xl" />
                </span>
              </Link>
            </div>
          </li>
          <li>
            <Link
              onClick={() => loginModalHandler()}
              to="#"
              className="p-2 hover:bg-red-100 inline-block rounded-full"
            >
              <FiUser className="text-xl" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default BurgerHeader;
