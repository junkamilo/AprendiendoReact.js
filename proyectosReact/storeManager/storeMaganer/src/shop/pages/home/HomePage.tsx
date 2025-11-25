import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mooks/products.mook"
import { Customjumbotron } from "@/shop/components/Customjumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
    <Customjumbotron title="todos los productos" subTitle=""/>

    <ProductsGrid products={products}/>

    <CustomPagination totalPage={7}/>
    </>
  )
}
