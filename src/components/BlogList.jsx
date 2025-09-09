import { Cable, Mail, Milestone, Network, PcCase, Router } from "lucide-react"
import { Link } from "react-router-dom"
export default function BlogList() {
    return (
        <fieldset className="main_div blog_list">
            <legend>All Articles:</legend>
            <Link to="/how_internet_works" style={{"width":"100%",'gridColumn':'1/4'}}><Network style={{'display':"inline-block"}}/> How Internet Works</Link>
            <a href="/how_routers_works" style={{"width":"100%",'gridColumn':'1/4'}}><Router style={{'display':"inline-block"}}/> How Routers Works</a>
            <a href="/email_protocols" style={{"width":"100%",'gridColumn':'1/4'}}><Mail style={{'display':"inline-block"}}/> Email Protocols </a>
            <a href="/vms_containers" style={{"width":"100%",'gridColumn':'1/4'}}><PcCase style={{'display':'inline-block'}}/> Virtual Machines vs Containers </a>
            <a href="/tcp_udp" style={{"width":"100%",'gridColumn':'1/4'}}><Cable style={{'display':'inline-block'}}/> TCP vs UDP </a>
        </fieldset>
    )
}
