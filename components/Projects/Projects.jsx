import { projectsData } from "../../utils/projectsData";
import Card from "../Card/Card";

const Projects = () => {
    const projects = [];
    // I stored my projects in a static file 
    const data = projectsData;
    data.forEach((project) => { projects.push( <Card data={project} key={project.id} /> ); });
    return(
      <>{projects}</>
    )
}

export default Projects; 