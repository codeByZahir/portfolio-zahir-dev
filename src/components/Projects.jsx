import websiteImg1 from '../assets/currency.png'
import websiteImg2 from '../assets/food-ecommerce.jpg'
import websiteImg3 from '../assets/website-blog.jpg'
import weatherImg from '../assets/bmi.png'
import bmiImg from '../assets/ecommerce-websites.jpg'

export default function Projects(){
   const config={
      projects:[
         {
            image: websiteImg1,
            description:'this is my react currency convertor app using with real time Api',
            link:'https://codebyzahir.github.io/currency-convetor-react/'
         },
         {
            image: weatherImg,
            description:'this is my react weather app using with real time API',
            link:'https://codebyzahir.github.io/weather-app-react/'
         },
         {
            image: websiteImg3,
            description:'this is my react qrcode app',
            link:'https://codebyzahir.github.io/qrcode-app-react/'
         },
         {
            image: bmiImg,
            description:'this is my react BMI calculator app',
            link:'https://codebyzahir.github.io/calculator-app-react/'
         },
         {
            image: websiteImg2,
            description:'this is my react digital clock app',
            link:'https://codebyzahir.github.io/digital-clock-react/'
         },
         
      ]
   }
   
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col justify-center px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1> 
                <p>This is my recent projects using with some modern technologies</p> 
            </div>    
        </div>
        <div className="w-full">
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
              {config.projects.map((project)=>(
                  
                  <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={project.image}/>
                     <div className='project-desc'>
                        <p className='text-center py-5 px-5'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>view here code</a>
                        </div>
                     </div>
                     
                 </div>     

               ))}
                     
            </div>
             
         </div>
    </section>
}