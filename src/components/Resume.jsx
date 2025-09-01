import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    const config={
        link:'/portfolio-zahir-dev/resume-v1.pdf',
        download:'Zahir-Resume.pdf'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 text-white'>
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view resume <a className='btn-view mr-2' href={config.link} target='_blank'>View</a><a className='btn-download' href={config.link} download={config.download}>Download</a></p>
           </div> 
        </div>

    </section>    
}