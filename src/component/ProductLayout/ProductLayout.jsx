import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from "uuid";
import useFetchProductData from "../../hooks/useFetchProductData";
import withDiscount from "../ProductCard/withDiscount";

const ProductLayout = () => {
  const { data, isLoading } = useFetchProductData();


  const ProductWithDiscount = withDiscount(ProductCard)

  if (isLoading) {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1">
          <ShimmerSimpleGallery card imageHeight={300} caption />
        </div>
      </div>
    );
  } else {
    return (
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1  mg:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((items) => {
            return (
              <>
                <ProductWithDiscount
                  key={uuidv4()}
                  id={items.id}
                  name={items.title}
                  src={items.images[0]}
                  price={items.price}
                  rating={items.rating}
                  review={items.reviews.length}
                  tags={items.tags}
                  discount={items.discountPercentage}
                />
              </>
            );
          })}
        </div>
      </div>
    );
  }
};

export default ProductLayout;
