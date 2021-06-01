import React from 'react';

import Head from 'next/head';

type Digit<N extends number = 10> = N extends 1 ? 0
    : (N extends 2 ? 0 | 1
        : (N extends 3 ? 0 | 1 | 2
            : (N extends 4 ? 0 | 1 | 2 | 3
                : (N extends 5 ? 0 | 1 | 2 | 3 | 4
                    : (N extends 6 ? 0 | 1 | 2 | 3 | 4 | 5
                        : (N extends 7 ? 0 | 1 | 2 | 3 | 4 | 5 | 6
                            : (N extends 8 ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
                                : (N extends 9 ? 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                                    : 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
                                )
                            )
                        )
                    )
                )
            )
        )
    );

// Unfortunately only works in the 21st and 22nd centuries...
type ISODateString = `2${Digit<2>}${Digit}${Digit}-\
${Exclude<`0${Digit}` | `1${Digit<3>}`, '00'>}-\
${Exclude<`${Digit<3>}${Digit<10>}` | `3${Digit<2>}`, '00'>}`;

interface Props {
    title: `${string} | ${string} - Lesson ${string}`;
    description: string;
    imageUrl: `${`https://${'next.' | ''}jsmon.dev` | 'http://localhost:3000'}/courses/${string}/thumbnails/lesson-${Digit | `${Exclude<Digit, 0>}${Digit}${Digit | ''}`}.svg`;
    imageAlt: string;
    url: `${`https://${'next.' | ''}jsmon.dev` | 'http://localhost:3000'}/courses/${string}/${string}`;
    tags: string[];
    datePublished: ISODateString;
    dateModified: ISODateString;
}

const MetaData = ({ title, description, imageUrl, imageAlt, url, tags, datePublished, dateModified }: Props): JSX.Element => (
    <Head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="subject" content="Course" />
        <meta name="language" content="en" />
        <meta name="author" content="James Simon, jsmon.dev@gmail.com" />
        <meta name="designer" content="James Simon, jsmon.dev@gmail.com" />
        <meta name="reply-to" content="jsmon.dev@gmail.com" />
        <meta name="owner" content="James Simon, jsmon.dev@gmail.com" />
        <meta name="url" content="https://jsmon.dev/" />
        <meta name="identifier-URL" content="https://jsmon.dev/" />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="James Simon Programming Tutorials" />
        <meta property="og:description" content={description} />
        <meta property="og:email" content="jsmon.dev@gmail.com" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:country-name" content="United Kingdom" />

        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content={imageAlt} />
        
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content="https://jsmon.dev/" />
        <meta property="article:section" content="Programming" />
        { tags.map((tag, index) => (
            <meta property="article:tag" content={tag} key={index} />
        )) }

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jsmondev" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageAlt} />
    </Head>
);

export default MetaData;
