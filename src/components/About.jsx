import AboutImg from '../assets/hero.png';
export default function About(){
    

    const config ={
        line1:'Im a passionate and self-driven tech enthusiast with hands-on experience in web development, web design and basic automation testing. I enjoy creating real-world projects that solve meaningful problems and improve user experiences.',
        line2:'My core focus areas include software development, quality assurance and full-stack technologies with growing expertise in Java Selenium MySQL and modern frameworks like the Laravel. I’m eager to continuously learn experiment and tackle new challenges in my journey to becoming a skilled IT professional.',
        line3:'Built several full-stack web applications using React.js, Node.js, and Express.js. Automated web tasks using Selenium WebDriver. Designed professional UI/UX prototypes using Figma and Canva.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 py-5 flex justify-center'>
            <img className='90' src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center '>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
               


            </div>   
        </div>
    </section>
}