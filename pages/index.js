import Layout from '../components/layout'
import ProductItems from '../components/productItems'
import data from '../utils/data'
// import SliderOfCardsProducts from '../components/SliderOfCardsProducts'

export default function Home() {
  return (
    // <Layout title={"Home page"}>Home page</Layout>
    <Layout title={"Home page"}>
      {/* amazom like products list */}
      <div className='grid drid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {data.products.map((product) => (
        <ProductItems product={product} key={product.slug}></ProductItems>
      ))}
      </div>


    {/* <SliderOfCardsProducts/> */}
    </Layout>
  )
}
