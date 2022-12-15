import { IconGitHub, IconProject } from '../../common/icons-svg'

interface PropsCardProject {
    title:string;
    description:string;
    technologies:string[]
}

export const CardProject = ({title,description,technologies}:PropsCardProject) => {
  return (
    <div className="projects__card cursor-pointer" >
                   
         
        <div className="projects__card-content">
            <header>
                <div className="projects__head">
                
                    <IconProject />
                    
                </div>
                <div className="projects__card-body">
                    <h3>
                    {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>
            </header>
        
            <footer>
                <ul>
                    {
                        technologies.map((technology,index)=>(
                            <li key={index}>{technology}</li>
                        ))
                    }
                </ul>
            </footer>
            
        </div>
        <div className="projects__links">
            <a href="#">
                <IconGitHub />
            </a>
        </div>
    </div>
  )
}
