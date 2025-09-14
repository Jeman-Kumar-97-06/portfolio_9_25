import { Cable, Mail, Milestone, Network, PcCase, Router } from "lucide-react"
import { Link } from "react-router-dom"
export default function BlogList() {
    return (
        <fieldset className="main_div blog_list">
            <legend>All Articles:</legend>
            <Link to='/initial_stages_of_internet' style={{"width":'100%','gridColumn':'1/4'}}><Network style={{'display':'inline-block'}}/> Initial Stages of The Internet </Link>
            <Link to="/how_internet_works" style={{"width":"100%",'gridColumn':'1/4'}}><Network style={{'display':"inline-block"}}/> How The Internet Works</Link>
        </fieldset>
    )
}
