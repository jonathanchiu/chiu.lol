import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <section className="container mt-28">
                <h1 className="serif text-6xl font-bold tracking-tighter">Hello.</h1>
            </section>
            <section className="container">
                <p className="mt-4 mb-6 leading-relaxed">
                    I'm <span className="text-red-300">Jon</span>athan.
                </p>
                <p className="leading-relaxed">
                    🎸 Music at <a target="_blank" className="font-bold hover:text-orange-500" href="https://soundcloud.com/jonathanchiu">Choo</a>.
                </p>
                <p className="leading-relaxed">
                    👨‍💻 Senior Software Engineer at <a target="_blank" className="font-bold hover:text-green-500" href="https://skillshare.com">Skillshare</a>.
                </p>
                <p className="leading-relaxed">
                    🎓 Computer Science at <a className="font-bold hover:text-red-500" href="https://www.northeastern.edu/">Northeastern University</a>.
                </p>
                <p>
                    🏡 Based in <span className="font-bold">New York City</span>
                </p>
                <p>
                    📧 Email at <a className="hover:text-cyan-500 font-bold" href="mailto:jonathan@chiu.lol">jonathan@chiu.lol</a>
                </p>
            </section>
            <div className="container mt-28">
                <h1 className="serif text-6xl font-bold tracking-tighter">Goodbye.</h1>
                <p className="mt-4 mb-4 leading-relaxed">
                    This site was built using&nbsp;
                    <a target="_blank" className="font-bold hover:text-violet-400" href="https://www.gatsbyjs.com/">Gatsby</a>,&nbsp;
                    <a target="_blank" className="font-bold hover:text-indigo-200" href="https://tailwindcss.com/">Tailwind</a>, and&nbsp;
                    <a target="_blank" className="font-bold hover:text-blue-400" href="https://www.netlify.com/">Netlify</a>.
                </p>
                <p className="mt-6 mb-4 leading-relaxed">
                    👋 Goodbye.
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;
