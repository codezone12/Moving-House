import { MdOutlineCleaningServices } from 'react-icons/md'
import { BiSolidChevronDown } from 'react-icons/bi';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box
} from '@chakra-ui/react'

const Included = () => {
  const cleanmethods = [
    {
      heading: "General cleaning in all rooms",
      description: [
        "Dry dusting of walls.",
        "Vacuuming and wiping of carpentry, radiators, free surfaces, and on top of wardrobes and cabinets.",
        "Dry dusting of lamps, shelves, and picture frames.",
        "Dry dusting of electrical sockets.",
        "Vacuuming of upholstered textile furniture. ",
        "Vacuuming on and under rugs (where possible).",
        "Dry dusting of lamps.",
        "Dry dusting of electronics (not the screen).",
        "Mirror polishing.",
        "Empty and wipe rubbish bins.",
        "Vacuuming and mopping of floors.",
      ],
      iconUrl:
        'img/genral.svg'
    },
    {
      heading: "Kitchen",
      title: "In the kitchen, we perform general cleaning steps, as well as:",
      description: [
        "Cleaning the kitchen fan and fan filter (not the carbon filter).",
        "Cleaning on top of all cabinets and shelves.",
        "Wipe off kitchen doors interior and exterior.",
        "Cleaning the exterior of the fridge and freezer.",
        "Cleaning of the tiles/splash guard above the sink.",
        "Cleaning under cabinets (if possible) and wiping bases.",
        "Cleaning microwave interior and exterior.",
        "Cleaning the interior and exterior of the dishwasher, the rubber strip, the detergent compartment, and the filter.",
        "Wipe clean kitchenware, e.g. coffee machine, oils, salt and pepper shakers.",
        "Wipe the inside of the top cutlery drawer.",
        "Cleaning the interior and exterior of the cabinet where the rubbish bin is located.",
        "Empty the rubbish and wipe clean the rubbish bin.",
        "Polish the sink, faucet, stopper, and strainer.",
      ],
      iconUrl: 'img/kitichen.svg',
    },
    {
      heading: "Bathrooms",
      title: "In bathrooms, we perform general cleaning tasks, as well as:",
      description: [
        "Cleaning walls and floors.",
        "Polish faucets, pipes, and shower nozzles.",
        "Degrease and descale walls and joints in shower areas where possible.",
        "Cleaning of shower or bathtub (customer is responsible for removal of the bathtub front).",
        "Cleaning of floor drain (water lock not included).",
        "Cleaning the exterior of the bathroom cabinet.",
        "Cleaning of faucet and basin.",
        "Cleaning of the toilet.",
        "Cleaning the exterior of the bathroom appliances and the washing machine’s detergent holder.",
        "Cleaning of the filter in the tumble dryer.",
        "Wipe off soap bottles.",
      ],
      iconUrl:
        'img/bath.svg',
    },
    {
      heading: "Bedrooms",
      title: "In bedrooms, we perform general cleaning tasks, as well as:",
      description: [
        "Making the beds.",
        "Changing of bed linen if clean sheets are provided.",
        "Dry dusting or vacuuming of the headboard/-bed frame.",
      ],
      iconUrl:
        'img/ed.svg',
    },
    {
      heading: "Hallways",
      title: "In hallways, we perform general cleaning steps, as well as:",
      description: [
        "Dry dusting of handrails, banisters, and stair rails.",
        "Vacuuming and wiping of shoe racks.",
        "Wiping of the coat rack.",
        "Wiping of fuse cabinet.",
      ],
      iconUrl:
        'img/ha.svg',
    },
    {
      heading: "Additional services",
      title: "We can also help you with:",
      description: [
        "Window cleaning",
        "Cleaning window frames and sills.",
        "Cleaning the interior of the oven. ",
        "Cleaning the interior of the fridge.",
        "Cleaning the interior of the kitchen cabinets and drawers.",
        "Balcony- and garage cleaning. ",
        "Polishing of crystal chandelier.",
        "Polishing of brass or silver.",
        "Furniture care of leather sofas/chairs.",
        "Ironing.",
      ],
      iconUrl:
        'img/se.svg',
    },

  ]
  return (

    <div className="py-14 bg-[#eae8e1] ">
      <div className="   relative  ">

        <div className="pt-12 text-5xl font-bold">What is included in our <span className='text-purple-500'>Deep</span> <span className='text-sky-400'>cleaning?</span></div>
        <div className="w-full mt-8  flex justify-center items-center">
          <p className=" border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400" ></p>
        </div>
        <div className="mt-8 text-lg leading-7  ">
          <p>Sometimes your home needs a thorough overhaul, right down to every little detail. We</p>
          <p>make sure it’s really clean, here’s what goes into a deep cleaning job.</p>
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
                      <img src={item.iconUrl} alt='Icon' className='w-10 pr-2' />
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
              <AccordionPanel pb={4}>
                <h3 className='text-start text-xl pb-1 font-semibold'>{item?.title}</h3>
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

export default Included;
