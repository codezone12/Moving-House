import Navbar from "../../Gernal_Components/Navbar";
import DHero from "./Sections/D_Hero";
import Zipcode from "./Sections/D_zipcode";
import FAQ from "./Sections/Faq";
import Sabina from "./Sections/Sabina";
import Included from "./Sections/included";
import Tips from "./Sections/tips&news";
import Work from "./Sections/work";

const DHome=()=>{


    return (
        <div>
<DHero />
<Included />
<Work />
<FAQ />
{/* <Sabina /> */}
<Tips />
<Zipcode />
        </div>
    );

}

export default  DHome;