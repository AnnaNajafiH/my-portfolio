import React from 'react';
import './Skills.css';
import { useContext } from 'react';
import { themeContext } from '../../Context/Context';
import { motion } from 'framer-motion';

// Importing technology logos
import JavaScriptLogo from '../../img/javascript.png';
import TypeScriptLogo from '../../img/typescript.png';
import ReactLogo from '../../img/react.png';
import NodeJsLogo from '../../img/nodejs.png';
import ExpressLogo from '../../img/express.png';
import SQLLogo from '../../img/sql.png';
import MongoDBLogo from '../../img/mongodb.png';
import PHPLogo from '../../img/php.png';
import TailwindLogo from '../../img/tailwind.png';
import BootstrapLogo from '../../img/bootstrap.png';
import GitLogo from '../../img/git.png';

function Skills() {
  const transition = { duration: 3.5, type: 'spring' }; // Animation

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const technologies = [
    { name: 'JavaScript', logo: JavaScriptLogo },
    { name: 'TypeScript', logo: TypeScriptLogo },
    { name: 'React', logo: ReactLogo },
    { name: 'Node.js', logo: NodeJsLogo },
    { name: 'Express', logo: ExpressLogo },
    { name: 'SQL', logo: SQLLogo },
    { name: 'MongoDB', logo: MongoDBLogo },
    { name: 'PHP', logo: PHPLogo },
    { name: 'Tailwind', logo: TailwindLogo },
    { name: 'Bootstrap', logo: BootstrapLogo },
    { name: 'Git & GitHub', logo: GitLogo }
  ];

  return (
    <div className='works' id='skills'>
      {/* left side */}
      <div className="w-left">
        <span style={{ color: darkMode ? 'white' : '' }}>My Skills</span>
        <span>Technologies & Tools</span>
        <span>
          Having expertise in a broad range of technologies,
          <br />
          enabling me to create seamless, full-stack web and app solutions.
          <br />
        </span>

        {/* <button className="button s-button">Hire Me</button> */}

        <div className="blur w-blur1" style={{ background: '#ABF1FF94' }}></div>
        <div className="blur w-blur2" style={{ background: "var(--purple" }}></div>

      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={transition}
          className="w-mainCircle"
        >
          {technologies.map((tech, index) => (
            <div key={index} className="w-secCircle">
              <img src={tech.logo} alt={tech.name} />
            </div>
          ))}
        </motion.div>

        {/* background circle */}
        {/* <div className="w-backCircle blueCircle"></div> */}
        {/* <div className="w-backCircle yellowCircle"></div> */}
      </div>
    </div>
  );
}

export default Skills;







// import React from 'react';
// import './Works.css';
// import ReactJs from '../../Img/react.png';
// import Fiverr from '../../img/fiverr.png';
// import Amzon from '../../img/amazon.png';
// import Shopify from '../../img/shopify.png';
// import Facebook from '../../img/facebook.png';
// import { useContext } from 'react';
// import { themeContext } from '../../Context/Context';
// import {motion} from 'framer-motion';   

// function Works() {
//   const transition = {duration: 3.5, type:'spring'};  //animation

//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className='works' id='skills'>
//         {/* left side */}
//         <div className="w-left">
//             <span style={{color:darkMode?'white': ''}}>My Skills</span>
//             <span>Technologies & Tools</span>
//             <span>Having expertise in a broad range of technologies, 
//                 <br/>
//                 enabling me to create seamless, full-stack web and app solutions. 
//                 <br />
//        </span>

//                 <button className="button s-button">Hire Me</button>

//                 <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
//         </div>
//         {/* right side */}
//         <div className="w-right">
//             <motion.div 
//             initial={{rotate: 45}}
//             whileInView={{rotate: 0}}
//             viewport={{margin: '-40px'}}
//             transition={transition}

//             className="w-mainCircle">
//                 <div className="w-secCircle">
//                 <img src={ReactJs} alt="" />
//                 </div>
//                 <div className="w-secCircle">
//                 <img src={Fiverr} alt="" />
//                 </div>
//                 <div className="w-secCircle">
//                 <img src={Amzon} alt="" />
//                 </div>
//                 <div className="w-secCircle">
//                 <img src={Shopify} alt="" />
//                 </div>
//                 <div className="w-secCircle">
//                 <img src={Facebook} alt="" />
//                 </div>
//                 <div className="w-secCircle">
//                 <img src={ReactJs} alt="" />
//                 </div>
                
//             </motion.div>

//         {/* background circle */}
//         <div className="w-backCircle blueCircle"></div>
//         <div className="w-backCircle yellowCircle"></div>
//         </div>
//     </div>
//   )
// }

// export default Works