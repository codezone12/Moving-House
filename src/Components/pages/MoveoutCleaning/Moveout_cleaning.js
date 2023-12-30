import Faq from "./sections/Faq";
import MHero from "./sections/Hero";
import Letus from "./sections/Letus";
import Movingtip from "./sections/Movingcleantips";
import Todo from "./sections/Todo";
import Include from "./sections/include";
import MWork from "./sections/work";

const MHome=()=>{

return (
    <div>
        <MHero />
        <Include />
        <Todo />
        <MWork />
        <Faq />
        <Movingtip />
        <Letus />
    </div>
)


}

export default MHome;