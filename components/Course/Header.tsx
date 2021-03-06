import React from 'react';

interface Props {
    children: string;
    author: {
        name: string;
        image: `http${'s' | ''}://${string}.${string}`;
        link: `http${'s' | ''}://${string}.${string}`;
    };
    date: Date;
    dateUpdated?: Date;
}

const Header = ({ children, author, date, dateUpdated }: Props): React.ReactElement<{
    children: React.ReactNode;
}, 'header'> => (
    <header>
        <p className="m-2">{ date.toLocaleDateString('en-GB') }
            { (dateUpdated?.getTime() ?? -Infinity) > date.getTime() && <span> - Last updated on { dateUpdated?.toLocaleDateString('en-GB') }</span> }</p>
        <h1 className="text-5xl text-center font-bold p-3.5">{ children }</h1>
        <p className="m-2 font-bold text-2xl p-2"><a href={author.link}>
            <img src={author.image} alt={author.name} className="inline-block rounded-full w-14" />
            <span className="p-2">{ author.name }</span>
        </a></p>
    </header>
);

export default Header;
