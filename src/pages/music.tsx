import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const MusicPage = () => {
    return (
        <Layout>
            <section className="container mt-28">
                <h1 className="serif text-6xl font-bold tracking-tighter">Listen.</h1>
            </section>
            <section className="mt-4 container">
                <p className="leading-relaxed">
                    I make music under the name <a target="_blank" className="font-bold hover:text-orange-500" href="https://soundcloud.com/jonathanchiu">Choo</a>.
                </p>
                <p className="leading-relaxed">
                    Take a listen below!
                </p>
            </section>
            <section className="mt-6 container">
                <p className="leading-relaxed">
                    <svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="5.12 25.095 52.916 22.972"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="1172.791" y1="-1533.878" x2="1172.791" y2="-1639.876" gradientTransform="matrix(.2065 0 0 -.2065 -210.547 -291.026)"><stop offset="0" stop-color="#f80"/><stop offset="1" stop-color="#f30"/></linearGradient><path fill="url(#a)" d="M15.835 47.9c-.083-.082-.145-.268-.145-.393 0-.145-.083-1.403-.186-2.807l-.186-2.561.207-4.521c.206-4.604.227-4.769.578-4.769.062 0 .186.041.269.124.124.103.186.681.392 4.562l.248 4.459-.248 2.911c-.145 1.61-.289 2.973-.351 3.034-.145.166-.393.145-.578-.02V47.9zm2.105-.061c-.103-.145-.186-1.012-.33-3.097-.165-2.478-.186-3.18-.103-5.037.041-1.178.124-3.51.186-5.183.062-1.672.124-3.138.145-3.303.083-.537.702-.619.826-.103.021.103.145 2.601.269 5.532l.227 5.348-.227 2.767a293.778 293.778 0 0 0-.227 2.87c0 .164-.269.392-.454.392-.104 0-.227-.083-.31-.206v.02zm2.148.041c-.145-.145-.186-.372-.227-1.445-.042-.702-.104-1.755-.145-2.333-.124-1.465-.104-3.365.041-7.887.083-2.146.145-4.314.145-4.851.021-1.094.104-1.424.393-1.507.351-.083.619.165.619.599 0 .207.103 2.89.207 5.946l.207 5.554-.207 2.787c-.104 1.527-.207 2.828-.207 2.891 0 .164-.269.392-.475.392-.103 0-.248-.083-.351-.165v.019zm2.147 0c-.103-.124-.165-.372-.207-.764-.31-4.707-.31-5.038-.165-9.951.186-6.771.227-7.412.392-7.577s.62-.165.764 0c.083.083.145 1.28.248 3.964.248 7.494.269 8.691.103 11.148-.186 2.787-.206 3.034-.392 3.199-.186.186-.516.166-.723-.041l-.02.022zm2.147-.021c-.103-.104-.186-.33-.186-.475s-.062-1.383-.145-2.746c-.145-2.291-.145-2.932 0-8.485.165-6.441.165-6.338.64-6.441.413-.083.682.268.682.908 0 .289.041 1.796.083 3.324.041 1.528.103 3.86.145 5.183.021 1.301.062 2.436.083 2.498.021.062-.042 1.362-.145 2.89a185.27 185.27 0 0 0-.186 2.974c0 .247-.33.578-.619.578a.569.569 0 0 1-.392-.207h.04zm2.209.021c-.186-.186-.207-.413-.392-3.716-.103-1.92-.083-3.943.103-10.488.104-3.509.104-3.571.661-3.571.186 0 .372.062.475.186.186.186.186.33.268 3.344.021.949.104 3.262.145 5.12.083 3.034.083 3.675-.083 6.173-.165 2.684-.186 2.787-.392 2.952-.269.206-.599.206-.826 0h.041zm2.188 0c-.124-.124-.186-.351-.227-.764-.145-1.59-.248-5.533-.207-7.866.021-1.445.083-3.654.104-4.955.103-5.223.145-6.048.33-6.234.227-.227.681-.227.888 0 .227.227.248.888.454 10.963.062 3.035-.145 8.361-.351 8.732-.186.352-.723.413-1.012.124h.021zm2.251-.021a.77.77 0 0 1-.289-.475c-.021-.166-.104-1.508-.186-2.994-.103-2.126-.124-3.406-.062-6.008.042-1.816.104-4.83.145-6.688.062-4.253.104-4.666.351-4.914.269-.248.661-.227.95.041.207.207.227.289.248 1.342 0 .619.021 1.238.041 1.362s.042 1.879.083 3.901c.042 2.023.083 3.696.104 3.717.103.165.021 6.152-.104 8.01a104.788 104.788 0 0 0-.145 2.271c0 .227-.413.619-.681.619-.125.002-.332-.08-.455-.184zm2.002-.041l-.228-.228V26.244l.248-.186c.289-.227 1.383-.578 2.478-.805 1.177-.227 3.097-.207 4.315.041 4.871 1.012 8.34 4.749 9.125 9.827l.062.33.806-.227c.681-.186.929-.227 1.816-.186 1.26.062 1.321.062 2.146.371 3.635 1.383 5.285 5.574 3.531 9.043-.806 1.61-1.962 2.621-3.717 3.262l-.66.248-9.827.021-9.827.021-.268-.186zm-19.365-.083c-.041-.103-.165-1.466-.289-3.015-.207-2.725-.207-2.849-.062-4.582.083-.971.166-2.168.207-2.643.062-.867.207-1.281.434-1.281.289 0 .372.331.62 2.953l.248 2.684-.248 2.85c-.124 1.568-.269 2.932-.31 3.055-.041.145-.145.207-.31.207s-.248-.062-.31-.207l.02-.021zm-2.064.042c-.021-.042-.165-1.363-.289-2.932l-.248-2.85.248-2.952c.124-1.631.289-3.015.331-3.076.124-.145.31-.145.434 0 .062.062.227 1.425.372 3.056l.268 2.932-.268 2.849c-.145 1.569-.289 2.891-.31 2.952-.041.124-.475.166-.537.041v-.02zm-2.044-.227c-.041-.062-.186-1.321-.31-2.808l-.248-2.705.227-2.56c.124-1.403.248-2.746.268-2.952.062-.413.248-.578.434-.393.062.062.227 1.28.393 2.911l.289 2.808-.269 2.705c-.145 1.486-.31 2.787-.351 2.91-.103.228-.31.269-.434.104v-.02zm-2.085-.867c-.021-.083-.165-1.218-.289-2.498l-.248-2.333.268-2.374c.248-2.271.289-2.374.475-2.415.227-.042.206-.145.578 2.725l.268 2.146-.268 2.251c-.145 1.239-.31 2.333-.351 2.456-.104.248-.331.27-.393.042h-.04zm-1.92-1.735a27.33 27.33 0 0 1-.248-1.548l-.186-1.404.207-1.486c.103-.826.248-1.549.289-1.61.206-.248.351.145.557 1.61l.227 1.486-.227 1.486c-.124.826-.289 1.527-.351 1.569-.165.103-.227.083-.289-.083l.021-.02z"/></svg>
                    <a className="hover:text-orange-500" href="https://soundcloud.com/jonathanchiu">Soundcloud</a>
                </p>
                <p className="leading-relaxed">
                    <svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" version="1.1" viewBox="0 0 168 168">
                        <path fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
                    </svg>
                    <a className="hover:text-green-500" href="https://open.spotify.com/artist/75XWZB98ncTvMwUP2sucIi">Spotify</a>
                </p>
                <p className="leading-relaxed">
                    <svg className="inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="16" viewBox="0 0 1080 1080"><rect height="760" rx="380" stroke="url(#paint0_linear)" stroke-width="27" width="760" x="157.5" y="159.5"/><path d="M667.041 338.5C674.374 337.167 680.874 338.833 686.541 343.5C692.208 348.167 695.041 354.167 695.041 361.5V618C695.041 641.667 688.374 660.167 675.041 673.5C661.708 686.5 643.374 693 620.041 693C604.041 693 590.874 688.833 580.541 680.5C570.208 671.833 565.041 661 565.041 648C565.041 631.667 571.541 618 584.541 607C597.541 596 614.374 590.5 635.041 590.5C642.708 590.5 650.874 591.833 659.541 594.5C659.874 594.5 660.208 594.333 660.541 594C660.874 594 661.041 593.833 661.041 593.5V428.5C661.041 427.5 660.541 426.667 659.541 426C658.541 425 657.541 424.667 656.541 425L469.041 461C466.374 461.667 465.041 463.333 465.041 466V668C465.041 691.667 458.374 710.167 445.041 723.5C431.708 736.5 413.374 743 390.041 743C374.041 743 360.874 738.667 350.541 730C340.208 721.667 335.041 711 335.041 698C335.041 681.667 341.541 668 354.541 657C367.541 646 384.374 640.5 405.041 640.5C412.708 640.5 420.874 641.833 429.541 644.5C429.874 644.5 430.208 644.333 430.541 644C430.874 644 431.041 643.833 431.041 643.5V411.5C431.041 403.167 433.541 395.833 438.541 389.5C443.874 382.833 450.541 378.833 458.541 377.5L667.041 338.5Z" fill="url(#paint1_linear)"/><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="902" x2="241.5" y1="893" y2="146"><stop stop-color="#5AC8FA"/><stop offset="0.523465" stop-color="#AF52DE" stop-opacity="0.922227"/><stop offset="0.818643" stop-color="#FF2D55" stop-opacity="0.74"/><stop offset="1" stop-color="#FF3B30"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="170" x2="866" y1="188" y2="892"><stop offset="0.0635411" stop-color="#FB413E"/><stop offset="0.381554" stop-color="#FF3C32"/><stop offset="0.520016" stop-color="#AD69E3" stop-opacity="0.75"/><stop offset="0.629314" stop-color="#5DC4F9"/><stop offset="0.962717" stop-color="#60C2F8"/></linearGradient></defs></svg>
                    <a className="hover:text-pink-400" href="https://music.apple.com/us/artist/choo/1457527982">Apple Music</a>
                </p>
            </section>
            <section className="mt-16">
                <div className="image max-w-md">
                    <StaticImage
                        src="../assets/who-cares.jpg"
                        alt="who cares"
                        placeholder="blurred"
                    />
                </div>
                <div className="mt-4">
                    <div className="embed-video max-w-md">
                        <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/xenN4iXpzJc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="mt-2 embed max-w-md">
                        <iframe src="https://open.spotify.com/embed/track/7xRDOYBTNTdK3IV3m3Ompo" width="100%" height="80" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
                    </div>
                    <p className="leading-relaxed italic font-bold mt-4">Who Cares?</p>
                    <p className="leading-relaxed">April 20th, 2021</p>
                </div>
            </section>
            <section className="mt-16">
                <div className="image max-w-md">
                    <StaticImage
                        src="../assets/fool.jpeg"
                        alt="who cares"
                        placeholder="blurred"
                    />
                </div>
                <div className="mt-4">
                    <div className="mt-2 embed max-w-md">
                        <iframe src="https://open.spotify.com/embed/track/45BBrk7dOwXpn45XpAEdp2" width="100%" height="80" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
                    </div>
                    <p className="leading-relaxed italic font-bold mt-4">Fool</p>
                    <p className="leading-relaxed">December 1st, 2019</p>
                </div>
            </section>
            <section className="mt-16">
                <div className="image max-w-md">
                    <StaticImage
                        src="../assets/breathe.jpeg"
                        alt="who cares"
                        placeholder="blurred"
                        imgStyle={{
                            transform: 'scale(1.7)'
                        }}
                    />
                </div>
                <div className="mt-4">
                    <div className="mt-2 embed max-w-md">
                        <iframe src="https://open.spotify.com/embed/track/5mxBxcYkeHCIcB7JG3zBuR" width="100%" height="80" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
                    </div>
                    <p className="leading-relaxed italic font-bold mt-4">Breathe</p>
                    <p className="leading-relaxed">April 25th, 2019</p>
                </div>
            </section>
            <section className="mt-16">
                <div className="image max-w-md">
                    <StaticImage
                        src="../assets/everytime.jpeg"
                        alt="who cares"
                        placeholder="blurred"
                    />
                </div>
                <div className="mt-4">
                    <div className="mt-2 embed max-w-md">
                        <iframe src="https://open.spotify.com/embed/track/2noh9YveFwU5ixj6vGP7gv" width="100%" height="80" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
                    </div>
                    <p className="leading-relaxed italic font-bold mt-4">Everytime</p>
                    <p className="leading-relaxed">March 25th, 2019</p>
                </div>
            </section>
        </Layout>
    );
};

export default MusicPage;
