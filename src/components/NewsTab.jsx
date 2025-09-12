import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

export default function NewsTab(){

    const [news,setNews] = useState(null)

    const fetchNews = async ()=>{
        const news = await fetch('http://localhost:4000/get_news')
        const newsr= await news.json()
        setNews(newsr)
    }

    useEffect(()=>{fetchNews()},[])

    return(
        <div>
            <ul>
                {news && news.map(x=>(
                    <li><Link to={x.url} target="_blank"><ExternalLink style={{'display':"inline-block"}}/>&nbsp;&nbsp;{x.title}</Link><hr/></li>
                ))}
            </ul>
        </div>
    )
}