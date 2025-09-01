import HeroImg from '../assets/mypic.jpg'
import { AiOutlineFacebook,AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config={
         subtitle:'Im a full-stack developer, UI/UX designer and Tech Enthusiast',
         social:{
            github:'https://github.com/codeByZahir',
            facebook: 'https://www.facebook.com/share/1HxnFrm1vD/',
            linkedin: 'https://www.linkedin.com/in/zahir-mohamed-16a792301'
         }
    }

    return <section id='hero' className='flex flex-col md:flex-row justify-center px-5 py-32 bg-primary'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-6xl font-sri text-white'>Hi, <br/>I'm <span className='text-amber-300'>Zahir</span> Mohamed
              <p className='text-2xl pt-5'>{config.subtitle}</p>
            </h1>
            <did className='flex py-10'>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </did>
        </div>  
        
        <img className="w-64 h-64 flex justify-end md:w-80 md:h-80 object-cover rounded-full border-4 border-amber-300 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative z-10"src={HeroImg} />
        
    </section>
}