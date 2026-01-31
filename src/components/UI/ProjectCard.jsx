import './ProjectCard.css'
import Projects from '../section/Projects'

function ProjectCard({img, title, desc, techUsed, gitLink, demoLink}) {
    return (
        <div className='project-card'>
            <div className='project-img'>
                <img src={img}></img>
            </div>
            <div className='project-info'>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='tech-used'>
                    {techUsed.map((tech) => {
                        return <button>{tech}</button>
                    })}
                </div>
                <div className='cta-btn'>
                    <a href={gitLink} target='_blank'><button><i class="fa-brands fa-github"></i> GitHub</button></a>
                    <a href={demoLink} target='_blank'><button><i class="fa-solid fa-globe"></i> LiveDemo</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard