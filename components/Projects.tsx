import React from 'react';

import Project from './Project';

export interface ProjectObj {
    id: string;
    name: string;
    img: string;
    technologies: string[];
    description: string;
    link: string;
}

const Projects = ({ projects }: { projects: ProjectObj[] }) => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            { projects.map(project => (
                <Project project={project} key={project.id} />
            )) }
        </section>
    );  
};

export default Projects;
