import React from 'react';

import MetaData from '@components/Course/MetaData';
import Header from '@components/Course/Header';

const HTMLInstallationAndSetup = (): React.ReactElement<{
    children: React.ReactNode;
    className: string;
}, 'div'> => {
    const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ( process.env.NODE_ENV as string === 'preview' ? 'https://next.jsmon.dev' : 'https://jsmon.dev');
    const description = 'What software do you need to be a web developer?';
    const imageUrl = '/courses/basic-html/thumbnails/lesson-0.png';
    const imageAlt = "The thumbnail for the first lesson in James Simon's Basic HTML Course.";

    return (
        <div className="max-w-5xl my-0 mx-auto">
            <MetaData
                title="Installation and setup | Basic HTML Course - Lesson 0"
                description={description}
                imageUrl={`${domain}/${imageUrl}` as `${typeof domain}${typeof imageUrl}`}
                imageAlt={imageAlt}
                url={`${domain}/courses/basic-html/installation-and-setup` as `${typeof domain}/courses/basic-html/installation-and-setup`}
                tags={['Programming', 'Web Development', 'HTML']}
                datePublished="2021-05-15"
                dateModified="2021-05-15"
            />

            <Header
                author={{
                    name: 'James Simon',
                    image: '/images/me.svg',
                    link: 'https://www.youtube.com/channel/UCtwZM_In4nRrNn1Zd5qjupw'
                }}
                date={new Date(2021, 4, 15)}
            >Installation and setup</Header>

            <img
                src={imageUrl}
                alt={imageAlt}
            />

            <main className="max-w-3xl my-0 mx-auto">
                <section id="description" className="py-5">
                    <p className="text-3xl">{ description }</p>
                </section>

                <section id="main-lesson" className="text-xl">
                    <p className="py-2">Before you start learning HTML and web development, make sure you have installed all of the correct software.</p>
                    <p className="py-2">I'm guessing if you're here, you already have a web browser, but if you don't, I recommend <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:underline">Google Chrome</a>. Any other modern web browser will also work. We will be using the web browser to view our HTML files.</p>
                    <p className="py-2">Now that you have a browser installed, we also need somewhere to write our code. Any text editor will work fine, however I recommend <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline focus:underline">Visual Studio Code</a> since it was originally created for web development and it has loads of helpful features for developers.</p>
                    <p className="py-2">Now that you've installed a browser and code editor, you can learn what HTML even is by clicking "Next Lesson" below.</p>
                </section>
            </main>

            <footer className="max-w-full flex justify-between py-10">
                <p className="cursor-default select-none py-2 px-4 font-semibold rounded-lg shadow-md text-gray-500 bg-gray-600">&lt; Previous Lesson</p>
                <p className="cursor-default select-none py-2 px-4 font-semibold rounded-lg shadow-md text-gray-500 bg-gray-600">Next Lesson &gt;</p>
            </footer>
        </div>
    );
};

export default HTMLInstallationAndSetup;
