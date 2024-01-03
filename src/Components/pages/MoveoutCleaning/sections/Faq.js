import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState();
    const handleSetIndex = (index) => {
        setActiveIndex(index);
    };
    const faqs = [
        {
            question: "What do I need to prepare for the move out cleaning?",
            answer:
                "Make sure that your home is completely empty so that we can access all areas. You can use our checklist for move out cleaning to make sure that you dont miss anything! Please make sure to inform us if you have any sensitive surfaces such as marble or brass in your home. Remember to not turn of the electricity or water before we come to clean your home. You can find more information in our service list for move out cleaning."
        },
        {
            question: "Can you clean a furnished appartment?",
            answer:
                "Absolutely, make sure to let us know before so that we can plan the assignment according to your circumstances. If there are furniture or objects left in the home we will not clean these or move them. We will clean the areas we can access according to whats included in a move-out cleaning."
        },
        {
            question: "What areas are cleaned in move out cleaning? ",
            answer:
                "A move out cleaning includes a deep cleaning of all the living space in your home, however cleaning of any additional areas such as the balcony, garage or any storage space is not included. Please contact us to book a cleaning of any additional areas in connection with your move out cleaning. "

        },
        {
            question: "Can you remove spots and stains from walls?",
            answer:
                " We dust all walls according to the general cleaning elements included in a move-out cleaning. This means that we do not have the ability to remove stains or spots that can't be removed with a dust rag. "
        },
        {
            question: "Do you bring cleaning products and materials with you?",
            answer:
                "Yes! We bring all cleaning products needed with us for an extra fee added to your invoice. We also bring all the materials needed to perform both the move-out cleaning and window cleaning. "
        },
        {
            question: "Do you provide a quality guarantee?",
            answer:
                "Of course! You always get a five (5) day guarantee on your move out cleaning from Hemfrid. "
        },
        {
            question: "When do I receive my invoice?",
            answer:
                "The move-out cleaning is billed after the service is performed and you receive your invoice about 2 weeks after we've cleaned your home."
        }
    ];
    return (
        <section id="faq">
            <div className="relative pt-24 bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
                <div>
                    <div className="relative bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
                        <h2 className="font-bold text-5xl mb-3">
                            FAQ about <span className="text-red-600">Move Out </span> <span className='text-red-600'>Cleaning</span>{" "}
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