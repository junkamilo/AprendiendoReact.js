import { Outlet } from "react-router"
import { Customheader } from "../components/Customheader"
import { CustomFooter } from "../components/CustomFooter"

export const ShopLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Customheader/>


      <Outlet/>

      <CustomFooter/>
    </div>
  )
}
