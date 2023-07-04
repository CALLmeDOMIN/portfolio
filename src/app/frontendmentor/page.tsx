import { FunctionComponent } from "react";
import FrontendMentor from "@/components/frontendmentor";
import Link from "next/link";

interface MentorProps {}

const Mentor: FunctionComponent<MentorProps> = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen flex-col">
                <div className="flex items-center justify-center">
                    <Link href={"/"} className="my-12">
                        <button>&larr; Back</button>
                    </Link>
                </div>
                <div className="">
                    <div className="max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 transition-all duration-1000 odd:delay-300 even:delay-700">
                        <FrontendMentor
                            image="/advice.jpg"
                            alt="advice generator"
                            github="https://github.com/CALLmeDOMIN/advice-generator"
                            vercel="https://advice-generator-gold-one.vercel.app/"
                            whiteText
                        />
                        <FrontendMentor
                            image="/newsletter.jpg"
                            alt="newsletter sign up"
                            github="https://github.com/CALLmeDOMIN/newsletter-sign-up"
                            vercel="https://newsletter-sign-up-delta.vercel.app/"
                            whiteText
                        />
                        <FrontendMentor
                            image="/tipcalc.jpg"
                            alt="tip calculator"
                            github="https://github.com/CALLmeDOMIN/tip-calculator"
                            vercel="https://tip-calculator-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/summarycomponent.png"
                            alt="summary component"
                            github="https://github.com/CALLmeDOMIN/summary-component"
                            vercel="https://summarycomponent-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/previewcard.png"
                            alt="preview card"
                            github="https://github.com/CALLmeDOMIN/preview-card"
                            vercel="https://previewcard-dominiksieron.vercel.app/"
                        />
                        <FrontendMentor
                            image="/qrcode.png"
                            alt="qrcode"
                            github="https://github.com/CALLmeDOMIN/qrcode"
                            vercel="https://qrcode-dominiksieron.vercel.app/"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mentor;
