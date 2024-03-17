import Container from "@/components/Container";
import FilterProducts from "../_components/FilterProducts";


const Drinks = () => {
    return ( 
        <Container>
          <FilterProducts position={1} typeProduct="drinks"/>
      </Container>
     );
}
 
export default Drinks;