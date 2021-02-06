import type { NextApiRequest, NextApiResponse } from 'next';

import admin from '../../firebase';

import { ProjectObj } from '../../components/Projects';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    const db = admin.firestore();

    const projectsSnapshot = await db.collection('projects').get();
    const projectsData: ProjectObj[] = [];
    for (let project of projectsSnapshot.docs) {
        const data = project.data() as ProjectObj;
        data.img.dark = `https://firebasestorage.googleapis.com/v0/b/james-simon-s-website.appspot.com/o/${data.img.dark}?alt=media`;
        data.img.light = `https://firebasestorage.googleapis.com/v0/b/james-simon-s-website.appspot.com/o/${data.img.light}?alt=media`;
        data.id = project.id;
        projectsData.push(data);
    }
    res.status(200).json({ projects: projectsData });
};

export default handler;
