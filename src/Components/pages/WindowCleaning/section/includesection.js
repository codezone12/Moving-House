import { TbInfoSquareFilled } from 'react-icons/tb'
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
      ]
    },
    {
      heading: "What counts as a window?",
      description: [
        "We perform general cleaning steps, as well as:",
        "If your window has 1 window frame, it counts as one window. Also called 1 sash window.",
        "If your window has 2 frames (one that goes to the right and one that goes to the left), it counts as two windows. Also called 2 sash windows.",
      ]
    },
    {
      heading: "Did you know that...",
      description: [
        "We can even clean if you have damage to a window - but we want to know before we arrive! So tell us if there are any scratches on windows, or broken locks or blinds, for example.",
        "We can even clean if it’s raining and snowing (we clean in temperatures down to 15 degrees below zero!)",
        "Our window cleaners are insured and we have liability insurance to cover any damage.",

      ]
    },
    {
      heading: "Our own cleaning products",
      title: "The cleaning service contract also includes our eco-friendly cleaning products which are delivered to your home and refilled when they run out.",

    },

  ]
  return (

    <div className="py-14 bg-[#eae8e1] ">
      <div className="   relative  ">

        <div className="pt-12 text-5xl font-bold">What is included in our window cleaning?</div>
        <div className="w-full mt-8  flex justify-center items-center">
          <p className=" border-black border-2 w-20 text-center" ></p>
        </div>
        <div className="mt-8 text-lg leading-7  ">
          <p>When you wash windows yourself, it’s hard to do it really well. Use our skilled window</p>
          <p>cleaners, armed with squeegees, to remove both splashes and dirt</p>

        </div>

      </div>

      <div className='px-2 py-8 flex justify-center text-gray-700'>
        <Accordion allowMultiple className='grid lg:grid-cols-2 w-full max-w-6xl gap-8' >
          {cleanmethods.map((item, index) => (
            <AccordionItem className='col-span-1 ' key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' className='text-3xl text-gray-800'>
                    <div className='flex '>
                      <TbInfoSquareFilled className='w-10  pr-2' />
                      <h4>{item.heading}</h4>
                    </div>
                  </Box>
                  <AccordionIcon className="w-12" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <h3 className='text-start text-xl pb-1'>{item.title}</h3>
                <ul className='list-disc text-start text-xl pl-5 space-y-3'>
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