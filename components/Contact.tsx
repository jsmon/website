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

        fetch(`${window.location.protocol}//${window.location.hostname}/api/email`, {
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
                <button type="submit" className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-800">Submit</button>
            </div>
        </form>
    );
};

export default Contact;
