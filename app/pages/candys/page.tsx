import Container from "@/components/Container";
import CardProducts from "../_components/CardsProducts";
import { stackProducts } from "@/app/utils/stackProducts";

const Candys = () => {
    const stackCandys = stackProducts[2].candy
    return ( 
        <Container>
        <div className="flex flex-col">
          <div className="mt-8">
            {stackCandys?.map((product: any) => {
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
 
export default Candys;