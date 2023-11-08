import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import CardList from "../components/cards/CardList";
import Spinner from "../components/Spinner";

function Products() {
  const { products } = useLoaderData();

  return (
    <>
      <h1 className="text-4xl text-center my-8">
        Retrouvez la liste de nos produits
      </h1>
      <h2 className="text-center my-8">Collection CrewStillant 2023</h2>

      <Suspense fallback={<Spinner />}>
        <Await resolve={products}>
          {(products) => <CardList apiProducts={products} />}
        </Await>
      </Suspense>
    </>
  );
}

export default Products;
