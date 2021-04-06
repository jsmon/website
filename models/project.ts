import * as mongoose from 'mongoose';

import Project from '@custom-types/project';

export interface IProject extends mongoose.Document, Project {}

const ProjectSchema = new mongoose.Schema<IProject>({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

export default ProjectSchema;
