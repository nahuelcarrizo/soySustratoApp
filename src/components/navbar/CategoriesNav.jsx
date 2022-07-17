import { Link } from "react-router-dom";
import productosData from "../../json/productosData.json";

export default function CategoriesNav() {
  const prods = productosData;
  const categories = prods.map((el) => el.categoria);
  const uniqueCategories = Array.from(new Set(categories));

  return (
    <>
      <div className="d-flex justify-content-center pt-4">
        <nav>
          {uniqueCategories.map((categoryId) => (
            <Link
              className="m-1 categories-nav"
              key={categoryId}
              to={`/ItemListContainer/${categoryId}`}
            >
              {categoryId}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}