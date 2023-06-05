import Burger from "./Burger";

const BurgerList = (props) => {
  const { products, setProducts } = props;

  return (
    <main className="my-10">
      <section className="mb-10">
        <h1>
          <strong className="text-6xl font-bold">Favourite Burgers</strong>
        </h1>
        <p className="text-xl text-neutral-400">
          Now you can order any meal from our menu to your door.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {!products.length ? (
          <p>No available burger.</p>
        ) : (
          products.map((product) => {
            return <Burger key={product._id} {...product} />;
          })
        )}
      </section>
    </main>
  );
};

export default BurgerList;
