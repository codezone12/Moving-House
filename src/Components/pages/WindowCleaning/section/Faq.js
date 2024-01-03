import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState();
    const handleSetIndex = (index) => {
        setActiveIndex(index);
    };
    const faqs = [
        {
            question: "Do I have to be home when you clean the windows?",
            answer:
                "No, you do not have to be at home if you hand in keys at our office or let us in via code lock. In order for us to be able to clean, you need to move furniture that stands in the way. Also empty the window sills. If the windows have window locks, present the keys so we can unlock them. You can find more information in our service list for window cleaning."
        },
        {
            question: "Can you clean even during winter?",
            answer:
                "Yes! We will clean your windows, even if it rains or snow and down to minus 15 degrees Celsius."
        },
        {
            question: "How is the price for window cleaning calculated?",
            answer:
                "When you book, you state how many windows you have and what type of window it is. The price is based on the information you have entered. In order for us to make a correct assessment, it is important that you provide the correct information about your windows in your booking."

        },
        {
            question: "When will I get the invoice?",
            answer:
                " We will send an invoice to you approximately 2 weeks after the service has been completed."
        }
    ];
    return (
        <section id="faq">
            <div className="relative pt-24 bg-gray-100  w-full flex flex-col items-center gap-8 ">
                <div>
                    <div className="relative bg-gray-100 min-h-full lg:min-h-screen w-full flex flex-col items-center gap-8 ">
                        <h2 className="font-bold text-5xl mb-3">
                            FAQ about <span className="text-red-600">Window </span> <span className='text-red-600'>Cleaning</span>{" "}
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