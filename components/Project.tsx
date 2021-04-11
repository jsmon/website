import React from 'react';

import Theme from '@custom-types/theme';
import ProjectObj from '@custom-types/project';

interface ProjectProps {
    project: ProjectObj;
    theme: Theme;
}

const Project = ({ project, theme }: ProjectProps): React.ReactElement<{
    className: string;
}, 'section'> => {
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/james-simon-s-website.appspot.com/o/${project.img}`;

    return (
        <section className="project p-6 max-w-min rounded-xl shadow-md space-x-4">
            <picture className="block w-96">
                <source className="rounded w-96" srcSet={`${imageUrl}%2F${theme}.webp?alt=media`} type="image/webp" />
                <source className="rounded w-96" srcSet={`${imageUrl}%2F${theme}.png?alt=media`} type="image/png" />

                <img className="rounded w-96" src={`${imageUrl}%2F${theme}.jpg?alt=media`} alt={project.name} />
            </picture>
            <div>
                <h3 className="font-bold text-md py-2"><a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
                <p>{project.description}</p>
                <p className="technologies py-2">{project.technologies.map((technology, i) => (
                    <span key={i}><span className="inline-block bg-gray-300 p-1 mt-1 rounded dark:bg-gray-600">{technology}</span>{' '}</span>
                ))}</p>
            </div>
        </section>
    );
};

export default Project;
