import React, { useRef } from 'react';

const Contact = (): React.ReactElement<{
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> => {
    const nameInput = useRef<HTMLInputElement>(null);
    const emailInput = useRef<HTMLInputElement>(null);
    const subjectInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);

    const successElement = useRef<HTMLDivElement>(null);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = nameInput.current!.value;
        const email = emailInput.current!.value;
        const subject = subjectInput.current!.value;
        const content = contentInput.current!.value;

        fetch(process.env.NODE_ENV === 'production' ? 'https://website.jsmon.vercel.app/api/email' : 'http://localhost:3000/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, content })
        })
            .then(() => successElement.current!.innerText = 'Email successfully sent')
            .catch(reason => {
                console.error(reason);
                successElement.current!.innerText = `An error occoured. Please try again.`;
            });
    };

    return (
        <form onSubmit={submitHandler} className="mt-8 max-w-md px-2">
            <h2 className="font-bold text-2xl">Contact Me</h2>
            <div ref={successElement} className="email-success"></div>
            <div className="grid grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Full name</span>
                    <input className="mt-1 block w-full dark:bg-gray-700" ref={nameInput} type="text" name="name" id="name" autoComplete="name" placeholder="Full name" />
                </label>
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Email Address</span>
                    <input className="mt-1 block w-full dark:bg-gray-700" ref={emailInput} type="email" name="email" id="email" autoComplete="email" placeholder="Email Address" />
                </label>
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Subject</span>
                    <input className="mt-1 block w-full dark:bg-gray-700" ref={subjectInput} type="text" name="subject" id="subject" placeholder="Subject" />
                </label>
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Content</span>
                    <textarea required className="mt-1 block w-full dark:bg-gray-700" ref={contentInput} name="content" id="content" placeholder="Content"></textarea>
                </label>
                <button type="submit" className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Submit</button>
            </div>
        </form>
    );
};

export default Contact;


(() => (
    <div className="mt-8 max-w-md">
        <div className="grid grid-cols-1 gap-6">
            <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="mt-1 block w-full" placeholder="" />
            </label>
            <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="mt-1 block w-full" placeholder="john@example.com" />
            </label>
            <label className="block">
                <span className="text-gray-700">When is your event?</span>
                <input type="date" className="mt-1 block w-full" />
            </label>
            <label className="block">
                <span className="text-gray-700">What type of event is it?</span>
                <select className="block w-full mt-1">
                    <option>Corporate event</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Other</option>
                </select>
            </label>
            <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="mt-1 block w-full" rows={3}></textarea>
            </label>
            <div className="block">
                <div className="mt-2">
                    <div>
                        <label className="inline-flex items-center">
                            <input type="checkbox" checked />
                            <span className="ml-2">Email me news and special offers</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
));
