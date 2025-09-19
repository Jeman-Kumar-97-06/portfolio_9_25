import {Mail, Github, Twitter} from 'lucide-react'
import SkillsTicker from './Skills';
import { Link } from 'react-router-dom';
import NewsTab from './NewsTab';
export default function MainPage(){
    return (
        <div className="main_div">
          {/* My Pic */}
        <fieldset className="mypic">
        </fieldset>
        {/* About ME */}
        <fieldset className="about_me">
          <legend><span className="first_letter">Name: </span>Jeman</legend>
          <p style={{"marginLeft":"10px"}}>Full Stack Developer • MERN + Python <br/> Freelancer by trade, explorer by choice. <br/>Currently leveling up in cybersecurity and networks.<br/></p>
        </fieldset>
        
        {/* My Projects */}
        <fieldset className="projects">
          <legend><span className="first_letter">P</span>rojects:</legend>
          <a target='_blank' href='https://github.com/Jeman-Kumar-97-06/E-Commerce_App_Refurbished_Phones' style={{"marginLeft":"10px"}}>Refurb Store</a><br/>
          <a target='_blank' href='https://capable-zuccutto-91acf1.netlify.app/' style={{"marginLeft":"10px"}}>Backgroundz</a><br/>
          <a target='_blank' href='#' style={{"marginLeft":"10px"}}>ImageGen</a><br/>
          <a target='_blank' href="#" style={{"marginLeft":"10px"}}>Notes</a><br/>
        </fieldset>
        {/* My Skills */}
        <fieldset className='skills'>
          <legend><span className='first_letter'>S</span>kills</legend>
          <SkillsTicker/>
        </fieldset> 
        {/* Blogs and Guides */}
        <fieldset className='g_and_b'>
          <legend><span className='first_letter'>My </span>Docs:</legend>
          <Link to='/article_list' className='blogs'><span className="first_letter">A</span>rticles </Link>
          <Link to='/guide_list' className='guides'><span className="first_letter">G</span>uides </Link>
        </fieldset>
        <fieldset className='news'>
          <legend><span className='first_letter'>Tech </span>News:</legend>
          {/* <NewsTab/> */}
          <img className='grind' alt='alt : github streak' src="https://github-readme-streak-stats.herokuapp.com/?user=Jeman-Kumar-97-06&theme=dark" /> <br/>
          <img className='grade' alt='github status' src="https://github-readme-stats.vercel.app/api?username=Jeman-Kumar-97-06&show_icons=true&theme=dark" />
        </fieldset>
        <fieldset className="links text-white text-xl">
          <legend><span className='first_letter'>C</span>ontact:</legend>
          {/* Mail */}
          <a href="mailto:youremail@example.com" className="hover:text-orange-500">
            <Mail />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <Github />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <Twitter />
          </a>
        </fieldset>
      </div>
    )
}