import Card from "../Card/Card";

const Products = ({productData,selectedProduct, setSelectedProduct}) => {
    
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {
        productData.map((product) => 
        <Card key={product.id} product={product} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}></Card>
        )
    }
    </div>
    
  );
};

export default Products;
