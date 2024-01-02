import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState();
    const handleSetIndex = (index) => {
        setActiveIndex(index);
    };
    const faqs = [
        {
            question: "Do I get a guarantee on the deep cleaning?",
            answer:
                "Of course! You always get a (2) two-day guarantee on Deep cleaning from FlyttStad&Altervining."
        },
        {
            question: "Do I need to prepare anything before the deep cleaning?",
            answer:
                "To get the best cleaning results, we recommend that scattered items are removed in the home before we arrive. By doing so, we can focus on the cleaning during our assignment. You can find more information in our service list for deep cleaning."
        },
        {
            question: "Do you bring cleaning product? ",
            answer:
                "We bring all cleaning products needed at a cost which is added to your invoice. Don't own a vacuum cleaner, mop or bucket? We bring it at an additional cost!"

        },
        {
            question: " Can you remove stains and marks on the walls?",
            answer:
                " Dusting walls in all rooms are included in our deep cleaning. We do not have the possibility to remove stains or marks that do not go away with a duster."
        },
        {
            question: " When will I get the invoice?",
            answer:
                "We will send an invoice to you approximately 2 weeks after the service has been completed."
        }
    ];
    return (
        <section id="faq">
            <div className="relative pt-24 bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
                <div>
                    <div className="relative bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
                        <h2 className="font-bold text-5xl mb-3">
                            FAQ about <span className="text-purple-500">Deep </span><span className="text-sky-400">Cleaning</span>{" "}
                        </h2>
                        {faqs.map(({ question, answer }, i) => (
                            <div
                                className="bg-white rounded-lg  w-4/5 shadow-lg hover:shadow-2xl group gap-8"
                                onMouseLeave={() => setActiveIndex()}
                                onMouseEnter={() => handleSetIndex(i)}
                            >
                                <div className="flex justify-between items-center my-3  px-4 sm:px-8 h-10 cursor-pointer">
                                    <h3 className="lg:text-xl md:text-xl sm:text-xl text-xs  pb-2 text-black font-semibold">{question}</h3>
                                    <div className="text-3xl group-hover:rotate-180 transition duration-1500 ml-auto">
                                        {/* Right Icon */}
                                        <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  group-hover:border-yellow-400 group-hover:text-yellow-400 " />
                                    </div>
                                </div>
                                <div
                                    x-ref="tab"
                                    className={`border-l-2 rounded-bl-md border-yellow-500 dark:border-none overflow-hidden duration-[1500ms] transition-all ${activeIndex === i ? "max-h-[500px]" : "max-h-0 "
                                        }`}
                                >
                                    <p className="text-start px-4 sm:px-8 py-2  p-3 text-xl font-light text-gray-700">
                                        {answer}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}

export default FAQ;