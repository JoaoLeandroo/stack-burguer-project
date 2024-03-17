import { stackProducts } from "@/app/utils/stackProducts";
import CardProducts from "../_components/CardsProducts";

interface FilterProductsProps {
  position: number;
  typeProduct: string;
}

const FilterProducts: React.FC<FilterProductsProps> = ({
  position,
  typeProduct,
}) => {
  let x = position;
  let stack
  if(typeProduct === "burguers") {
    stack = stackProducts[x].burguers
  }
  if(typeProduct === "drinks"){
    stack = stackProducts[x].drinks
  }
  if(typeProduct === "candy"){
    stack = stackProducts[x].candy
  }
  return (
    <div className="flex flex-col">
      <div className="mt-8">
        {stack?.map((product: any) => {
          return (
            <div key={product.name}>
              <CardProducts
                src={product.urlImg}
                alt={product.name}
                title={product.name}
                price={product.price}
              />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterProducts;
