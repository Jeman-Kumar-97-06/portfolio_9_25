import { SiPython, SiJavascript, SiHtml5, SiCss3, SiMysql, SiRedis } from "react-icons/si";

function SkillsTicker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="python"></div>
        <div className="javascript"></div>
        <div className="html"></div>
        <div className="css"></div>
        <div className="react"></div>
        <div className='sql'></div>
        <div className="bash"></div>
        <div className='linux'></div>
        <div className='redis'></div>
        <div className="docker"></div>
        <div className="mongodb"></div>

        {/* Duplicate for infinite loop effect */}
        <div className="python"></div>
        <div className="javascript"></div>
        <div className="html"></div>
        <div className="css"></div>
        <div className="react"></div>
        <div className='sql'></div>
        <div className="bash"></div>
        <div className="linux"></div>
        <div className='redis'></div>
        <div className="docker"></div>
        <div className="mongodb"></div>
      </div>
    </div>
  );
}

export default SkillsTicker;
