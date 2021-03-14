import React from 'react';

import Project from './Project';

import { IProject as ProjectObj } from '../models/project';

interface ProjectsProps {
    projects: ProjectObj[];
    theme: 'light' | 'dark';
}

const Projects = ({ projects, theme }: ProjectsProps): React.ReactElement<{
    id: 'projects';
    className: string;
}, 'section'> => {
    return (
        <section id="projects" className="p-2">
            <h2 className="font-bold text-2xl">Projects</h2>
            <div className="flex flex-wrap justify-around">
                { projects.map(project => (
                    <Project project={project} theme={theme} key={project.id} />
                )) }
            </div>
        </section>
    );  
};

export default Projects;
