import React from 'react';

import { ProjectObj } from './Projects';

interface ProjectProps {
    project: ProjectObj;
    theme: 'dark' | 'light';
}

const Project = ({ project, theme }: ProjectProps): React.ReactElement<{
    className: string;
}, 'section'> => (
    <section className="project p-6 max-w-min rounded-xl shadow-md space-x-4">
        <div className="w-96">
            <img className="rounded" src={project.img[theme]} alt={project.name} />
        </div>
        <div>
            <h3 className="font-bold text-md py-2"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            <p>{project.description}</p>
            <p className="technologies py-2">{project.technologies.map((technology, i) => (
                <span key={i}><span className="inline-block bg-gray-300 p-1 mt-1 rounded dark:bg-gray-600">{technology}</span>{' '}</span>
            ))}</p>
        </div>
    </section>
);

export default Project;
