import Container from "@/components/Container";
import { stackProducts } from "@/app/utils/stackProducts";
import CardProducts from "../_components/CardsProducts";


const Drinks = () => {
    const stackDrinks = stackProducts[1].drinks;
    return ( 
        <Container>
        <div className="flex flex-col">
          <div className="mt-8">
            {stackDrinks?.map((product: any) => {
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
      </Container>
     );
}
 
export default Drinks;