const MHero = () => {

    return (
        <div className="bg-cover" style={{ backgroundImage: "url('https://images.ctfassets.net/37vwfxlcawdb/69hHyQMNuGaEhmbFyirlC6/2e0e16f5ea1ed0bcc81df72e8e50ef68/Badrum-handfat-16-9.jpg?q=60&fm=jpg&w=2560')" }}>


            <div className=" mr-auto pt-48 md:px-28 px-10 text-white text-5xl font-medium font-['Young Serif'] ">

                <p className="text-start">Get help with</p>

                <p class="  text-start mt-1 text-gray-700 ">Cleaning when</p>
                <p class="  text-start mt-1 text-fuchsia-800 ">Moving</p>
                <div className="flex justify-start w-1/2 md:w-2/5">
                <input className="bg-white focus:border-none focus:outline-none w-full text-black text-center text-lg p-3 rounded-md mt-10 placeholder-black font-bold cursor-pointer bg-opacity-80 hover:shadow-lg hover:shadow-black hover:bg-white transform hover:scale-90 transition-transform delay-200 hover:placeholder-gray-500" placeholder="ENTER ZIPCODE" />
                </div>
                <div className="flex justify-center items-center  w-1/2 md:w-2/5 bg-opacity-80 hover:shadow-lg hover:shadow-black bg-[#1e1e1e] text-lg font-bold mt-4 p-5 rounded-md hover:text-green-500 transform hover:scale-90 transition-transform delay-200">

                    <p className="text-center text-['#fff'] ">CONTINUE</p>

                </div>
                <div className="text-2xl mt-10 pb-8 flex items-start font-normal">
                    <div className="text-xl mt-10 flex items-start font-normal">
                        <ul>
                            <li> <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>       Window cleaning included  </li>
                            <li className="mt-4"> <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block  mr-2" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>      Collective agreement &nbsp; &nbsp; &nbsp; &nbsp; </li>
                            <li className="mt-4 ">    <svg height="24" width="24" viewBox="0 0 24 24" color='white' class="uiyb_O3 cfwk5OWE inline-block mr-3" style={{ fill: "white" }}><g><path d="m12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572z"></path><path d="m17.4 7.114-6.257 6.24-2.828-2.81a.848.848 0 1 0 -1.2 1.2l3.428 3.428a.824.824 0 0 0 1.2 0l6.857-6.858a.849.849 0 0 0 -1.2-1.2z"></path></g></svg>                Insured &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </li>

                        </ul>
                    </div>





                </div>

            </div>

        </div>);
}

export default MHero;