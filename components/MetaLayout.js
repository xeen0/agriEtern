import { Footer1, Footer2, Footer3 } from "./Layout/Footers"
import { Header1, Header2, Navbar } from "./Layout/Headers"

const MetaLayout = ({children}) => {
    return (
        <div>
           <Header1/>
           <Header2/>
           <Navbar/>
                {children}
           <Footer3/>
           <Footer2/>
           <Footer1/> 
        </div>
    )
}

export default MetaLayout
