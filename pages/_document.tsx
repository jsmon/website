import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return (
            <Html lang="en-GB" className="dark">
                <Head />
                <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
