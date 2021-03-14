import type { NextApiRequest, NextApiResponse } from 'next';

import * as mongoose from 'mongoose';

import ProjectObj from '../../types/project';
import ProjectSchema, { IProject } from '../../models/project';

const handler = async (_req: NextApiRequest, res: NextApiResponse<ProjectObj[]>) => {
    const projectConnection = await mongoose.createConnection(process.env.DATABASE_URL!, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    const Project: mongoose.Model<IProject> = projectConnection.models.Project || projectConnection.model('Project', ProjectSchema);

    const projects = await Project.find();

    res.json(projects);
};

export default handler;
