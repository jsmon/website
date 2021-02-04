import React from 'react';

import { ProjectObj } from './Projects';

import styles from '../styles/Project.module.css';

interface ProjectsProps {
    project: ProjectObj;
}

const Project = ({ project }: ProjectsProps): React.ReactElement<{
    className: 'project';
}, 'section'> => (
    <section className="project">
        <img src={project.img} alt={project.name} />
        <h3><a href={project.link} target="_blank" rel="noopener noreferrer">{ project.name }</a></h3>
        <p>{ project.description }</p>
        <p>{ project.technologies.map((technology, i) => (
            <span key={i}><span className={styles.technology}>{ technology }</span>{ ' ' }</span>
        )) }</p>
    </section>
);

export default Project;
