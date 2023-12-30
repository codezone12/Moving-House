import { MdOutlineCleaningServices } from 'react-icons/md'
import { BiSolidChevronDown } from 'react-icons/bi';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box
} from '@chakra-ui/react'

const Includesection = () => {
  const cleanmethods = [
    {
      heading: "About our cleaning",
      title: "Specify when you book if you want the window frames cleaned for an additional cost.",
      description: [
        "We clean all sides of the window panes",
        "We clean skylights - if it’s a window that turns on its axis. We cannot do window cleaning that must be performed from the roof.",
        "We bring all window cleaning equipment and cleaning agents with us.",
        "If you do not have a suitable ladder, we can bring one with us for an additional cost. Please state it when booking.",
        "For best results, we also recommend that you add a frame washer, which means that we wash the window frames and frames.",
      ],
      iconUrl: 'img/wi.svg',
    },
    {
      heading: "What counts as a window?",
      description: [
        "We perform general cleaning steps, as well as:",
        "If your window has 1 window frame, it counts as one window. Also called 1 sash window.",
        "If your window has 2 frames (one that goes to the right and one that goes to the left), it counts as two windows. Also called 2 sash windows.",
      ],
      iconUrl: 'img/wi1.svg',
    },
    {
      heading: "Did you know that...",
      description: [
        "We can even clean if you have damage to a window - but we want to know before we arrive! So tell us if there are any scratches on windows, or broken locks or blinds, for example.",
        "We can even clean if it’s raining and snowing (we clean in temperatures down to 15 degrees below zero!)",
        "Our window cleaners are insured and we have liability insurance to cover any damage.",

      ],
      iconUrl: 'img/wi2.svg',
    },
    {
      heading: "Our own cleaning products",
      title: "The cleaning service contract also includes our eco-friendly cleaning products which are delivered to your home and refilled when they run out.",
      iconUrl: 'img/wi4.svg',
    },

  ]
  return (

    <div className="py-14 bg-[#eae8e1] ">
      <div className="   relative  ">

        <div className="pt-12 text-5xl font-bold">What is included in our <span className='text-green-500'>Window </span><span className='text-cyan-500'>Cleaning?</span></div>
        <div className="w-full mt-8  flex justify-center items-center">
          <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
        </div>
        <div className="mt-8 text-lg leading-7">
          <p>When you wash windows yourself, it’s hard to do it really well. Use our skilled window</p>
          <p>cleaners, armed with squeegees, to remove both splashes and dirt</p>

        </div>

      </div>

      <div className='px-2 py-8 flex justify-center text-gray-700'>
        <Accordion allowMultiple className='grid lg:grid-cols-2 w-full max-w-6xl gap-8' >
          {cleanmethods.map((item, index) => (
            <AccordionItem className='col-span-1 ' key={index}>
              <h2>
                <AccordionButton className='group'>
                  <Box as='span' flex='1' textAlign='left' className='text-3xl text-gray-800 hover:text-gray-500'>
                    <div className='flex hover:shake'>
                      <img src={item.iconUrl} alt='Icon' className='w-10 pr-2 h-7' />
                      <h4>{item.heading}</h4>
                    </div>
                  </Box>


                  <div className='text-3xl group-hover:rotate-180 transition duration-1500 ml-auto'>
                    <BiSolidChevronDown
                      className='w-8 h-8 border-2 rounded-full text-green-500 border-green-500 group-hover:border-yellow-400 group-hover:text-yellow-400'
                    />
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} >
                <h3 className='text-start text-xl pb-1 font-semibold'>{item.title}</h3>
                <ul className='list-disc marker:text-blue-700 text-start text-md pl-5 space-y-3'>
                  {item?.description?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>



    </div>
  );

}

export default Includesection;