import './includesection.css';
import { useState } from 'react'; // Import useState
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { BiSolidChevronDown } from 'react-icons/bi';

const Includesection = () => {
  const cleanmethods = [
    {
      heading: 'General cleaning in all rooms',
      title: 'Our home cleaning includes the following cleaning services as a standard in all rooms:',
      description: [
        'Vacuuming of floors, moldings, electrical sockets, radiators, carpets, and upholstered textile furniture.',
        'Mopping of floors or other types of cleaning according to agreement.',
        'Wipe off doors and frames where we can access them.',
        'Dry dusting of windowsills and free surfaces.',
        'Dry dusting of lamps, shelves, and picture frames that we can access.',
        'Dry dusting of electronics (not the screen).',
        'Mirror polishing.',
        'Make the beds.',
        'Empty and wipe rubbish bins.',
      ],
      iconUrl:
      'https://images.ctfassets.net/37vwfxlcawdb/2R9E1GsuoX27qaAe1YO2gB/d6880e276d8f8e5ac2cbed8440a957bb/Hemfrid_Piktogram_Kontorssta__d_64x64px-01.svg',
    },
    {
      heading: 'Bathrooms',
      title: 'We perform general cleaning steps, as well as:',
      description: [
        'Cleaning bathtubs, showers, sinks, and toilets.',
        'Wipe off stains from walls.',
        'Wipe off bathroom cabinets and appliances.',
      ],
      iconUrl:'https://images.ctfassets.net/37vwfxlcawdb/NNOembCSzySTh6zEwVfCi/1f035c76c864d50936a3d2e36ee6a3f8/Hemfrid_Piktogram_Sta__dat_och_klart_64x64px-01.svg',
},

    {
      heading: 'Kitchen',
      title: 'We perform general cleaning steps, as well as:',
      description: [
        'Cleaning the sink and kitchen counter, stove, and wall behind the stove and sink.',
        'Cleaning microwave interior and exterior.',
        'Interior and exterior cleaning of cabinets where rubbish bins are located.',
        'Wipe off kitchen doors.',
        'Wipe off the kitchen fan and the outside of other appliances.',
        'Emptying the household rubbish.',
      ],
      iconUrl:'https://images.ctfassets.net/37vwfxlcawdb/lsgSreXcBk5IAF61oitpa/c140e462eeacdd57de4147f29141fdd6/Hemfrid_Piktogram_Boka_online_64x64px-01.svg',
    },{
      heading: 'Our own cleaning products',
      title: 'The cleaning service contract also includes our eco-friendly cleaning products which are delivered to your home and refilled when they run out.',
      iconUrl:'https://images.ctfassets.net/37vwfxlcawdb/2R9E1GsuoX27qaAe1YO2gB/d6880e276d8f8e5ac2cbed8440a957bb/Hemfrid_Piktogram_Kontorssta__d_64x64px-01.svg',    
},  ];
const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
    console.log("Mouse enter",index)
  };
  const handleMouseLeave = () => {
    setIsHovered(null);
  };
  return (
    <div className='py-14 bg-[#eae8e1]'>
      <div className=' relative'>
        <div className='pt-12 text-5xl font-bold'>
          What is included in our <span className='text-yellow-300'>Home</span> <span className='text-orange-600'>Cleaning</span>?
        </div>
        <div className='w-full mt-8 flex justify-center items-center'>
          <p className='border-black border-2 w-20 hover:w-[550PX] text-center transition-all duration-300 transform origin-center scale-100 delay-200 hover:border-gray-400'></p>
        </div>
        <div className='mt-8 text-lg leading-7 '>
          <p>It’s perfectly fine to need help sometimes, like with cleaning, for example. As one of our</p>
          <p>home cleaning customers, you will receive same-day cleaning, every week or every other</p>
          <p>week at a fixed monthly rate.</p>
        </div>
      </div>

      <div className='px-2 py-8 flex justify-center'>
        <Accordion allowMultiple className='grid lg:grid-cols-2 w-full max-w-6xl gap-8'>
          {cleanmethods.map((item, index) => 
           ( 
            <AccordionItem className='col-span-1 group' key={index}
            >
              <h2 className='font-xl font-semibold'>
                <AccordionButton
                 className='group'
                 onMouseEnter={() => handleMouseEnter(index)}
                 onMouseLeave={handleMouseLeave}
                  
                >
                  <Box as='span' flex='1' textAlign='left' className='text-3xl text-gray-800 hover:text-gray-500'>
                    <div className='flex hover:shake'>
                      <img src={item.iconUrl} alt='Icon' className='w-10 font-semibold pr-2' />
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
              <AccordionPanel
                pb={4}
                >
                <h3 className='text-start text-lg pb-1 font-semibold'>{item.title}</h3>
                <ul className='list-disc marker:text-blue-700 text-start pl-5 space-y-3 text-gray-700'>
                  {item?.description?.map((desc, i) => (
                    <li key={i}>{desc}</li> 
                  ))}
                </ul>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Includesection;
