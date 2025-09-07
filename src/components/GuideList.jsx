import { Milestone, Network, Smartphone, Terminal } from "lucide-react"
export default function GuideList() {
    return (
        <fieldset className="main_div blog_list">
            <legend>All Guides:</legend>
            <a href="/unlocking_bootloader" style={{"width":"100%",'grid-column':'1/4'}}><Smartphone style={{'display':"inline-block"}}/> How to unlock a smartphone bootloader</a>
            <a href='/getting_rid_of_bloatware' style={{'width':'100%', 'grid-column':'1/4'}}><Terminal style={{'display':"inline-block"}}/> How to get rid of Bloatware on your smartphone </a>
        </fieldset>
    )
}


