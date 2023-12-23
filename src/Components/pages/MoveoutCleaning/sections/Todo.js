const Todo = () => {
    return (

        <>
            {/* first content */}
            <div className=" bg-[#f5f4f0] ">

                <div class="flex flex-col-reverse lg:flex-row items-center justify-between relative">

                    <div className="w-1/2 px-6 text-black font-medium font-['Young Serif']  lg:ml-28  xl:ml-16  2xl:ml-36">

                        <p class="text-start text-5xl mt-1">To do before the move</p>
                        <p class=" text-start text-5xl mt-1 ">out cleaning</p>

                        <div className="w-3/4 mt-10 flex items-start font-normal">

                            <ul className="list-disc text-start pl-4 space-y-1 text-lg">
                                <li>Turning off and defrosting the refrigerator and freezer.</li>
                                <li>Please pull out the refrigerator, freezer, stove and washing machine and dryer from the wall, if you want us to clean behind.</li>
                                <li>Clearing out drains.</li>
                                <li>Cleaning blinds.</li>
                                <li>Making sure that no furniture or loose objects remain in the apartment.</li>
                            </ul>
                        </div>
                        <p className="text-start w-3/4 mt-4 text-lg">Remember that secondary areas such as storerooms, garages and balconies are not included in our move-out cleaning, but you can of course schedule them!</p>
                    </div>

                    <div className="">
                        <img src="img/m1.jpeg" className="h-[650px] w-[600px]" />
                    </div>

                </div>



            </div>




        </>

    );

}
export default Todo;