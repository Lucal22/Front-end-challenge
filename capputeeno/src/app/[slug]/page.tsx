import ProductDetails from '@/components/ProductDetails';

type ProductProps = {
  params: {
    slug: string;
  };
};

export default function Product({ params }: ProductProps) {
  return <ProductDetails />;
}
