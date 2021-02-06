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

        fetch(process.env.NODE_ENV === 'production' ? 'https://jsmon.github.io/api/email' : 'http://localhost:3000/api/email', {
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
        <>
            <div ref={successElement} className="email-success"></div>
            <form onSubmit={submitHandler}>
                <input ref={nameInput} type="text" name="name" id="name" autoComplete="name" placeholder="Your name" />
                <input ref={emailInput} type="email" name="email" id="email" autoComplete="email" placeholder="Your email address" />
                <input ref={subjectInput} type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea ref={contentInput} name="content" id="content" placeholder="Email content"></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Contact;
