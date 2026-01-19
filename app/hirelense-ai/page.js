import HirelensLanding from "../components/hirelens/HirelensLanding"
import HirelensAi from "../components/hirelens/HirelensAi"
function page(){
    return(
        <div className="bg-secondary text-primary">
          <HirelensLanding/>
          <HirelensAi/>
        </div>
    )
}
export default page;
