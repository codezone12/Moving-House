import React from 'react';
import { NavLink } from 'react-router-dom';
import Image1 from '../../../Assets/images/Hemfridare-tradgard-1-1.webp'
import Image2 from '../../../Assets/images/Partner_page_Section2___Contact_us_section.jpg'
import Image3 from '../../../Assets/images/salary_benefit.avif'
import map from '../../../Assets/images/staticmap.png'
const Contact = () => {
    return (
        <>
            <div className="md:mx-auto h-screen w-screen max-w-full" style={{ background: '#d1dce7' }}>
                <div className='pt-20'>
                    <div className='text-center text-5xl font-medium mt-20 pt-20' style={{ fontFamily: 'Tiempos Headline,serif' }}>Would you like to contact us?</div>
                    <div className="w-full mt-8 flex justify-center items-center mb-5">
                        <p className="border-black border w-20 text-center"></p>
                    </div>
                    <p className='mx-auto text-xl text-bold'>Do you have a question about our services? Or are you wondering</p>
                    <p className='mx-auto text-xl text-bold'>how the RUT deduction actually works? Most questions and answers</p>
                    <p className='mx-auto text-xl text-bold'>can be found on our <NavLink to='/faq' className='front-black font-semibold text-2xl' style={{ textDecoration: 'underline' }}>FAQ-page</NavLink>. Otherwise, you are always welcome</p>
                    <p className='mx-auto text-xl text-bold'>to contact our customer service at <a href='tel:0105558500' className='front-black font-semibold text-2xl' style={{ textDecoration: 'underline' }}>010-555 85 00</a> or</p>
                    <p className='mx-auto text-xl text-bold'><NavLink to={`mailto:info@hemfrid.se`} className='front-black font-semibold text-2xl' style={{ textDecoration: 'underline' }}>info@hemfrid.se.</NavLink></p>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-2 max-w-full">
                <img src="img/img.jpeg" alt='hemfred-marketing gaurd' />
                <div className=' ps-9  flex align-center flex-col justify-center'>
                    <div className='text-left text-5xl font-medium' style={{ fontFamily: 'Tiempos Headline,serif' }}>Need to reach us on the <br /> weekend?</div>
                    <div className="w-full mt-8 flex justify-left items-left mb-5">
                        <p className="border-black border w-20 text-left"></p>
                    </div>
                    <p className='justify-left text-left font-normal text-base' style={{ width: '90%' }}>If you have a booked service on a Saturday, Sunday or holiday  and need to get in urgent contact with us, regarding your booking, you can reach us on our emergency number: <a href='tel:0704453773' className='front-black font-semibold text-xl' style={{ textDecoration: 'underline' }}>070 445 37 73</a> (Sat-Sun: 9.00-17.00 ). </p>
                    <br />
                    <p className='justify-left text-left font-normal text-base' style={{ width: '90%' }}>For other questions about invoices or bookings, please contact us the following weekday on our regular number:<a href='tel:0105558500' className='front-black font-semibold text-xl' style={{ textDecoration: 'underline' }}>010-555 85 00</a> or email <NavLink to={`mailto:info@hemfrid.se`} className='front-black font-semibold text-xl' style={{ textDecoration: 'underline' }}>info@hemfrid.se.</NavLink>.</p>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-2 max-w-full">
                <div className='ps-9   flex align-center flex-col justify-center'>
                    <div className='text-left text-5xl font-medium' style={{ fontFamily: 'Tiempos Headline,serif' }}>Are you our new <br /> partner?</div>
                    <div className="w-full mt-8 flex justify-left items-left mb-5">
                        <p className="border-black border w-20 text-left"></p>
                    </div>
                    <p className='justify-left text-left font-normal text-base' style={{ width: '90%' }}>Hemfrid is always open for new opportunities through new partners. If you can see a value in collaborating with us and therefore be an official partner of ours. Please click on the button to read more. </p>
                    <br />
                    <p className='justify-left text-left font-normal text-base flex item-center' style={{ width: '90%' }}>
                        <svg width="24" height="24" className="saBgkKB cfbsn65t"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572Z"></path><path d="M10.886 7.971a.849.849 0 0 0-1.2 1.2L12.497 12l-2.811 2.829a.822.822 0 0 0 0 1.2.823.823 0 0 0 1.2 0l3.428-3.429a.822.822 0 0 0 0-1.2l-3.428-3.429Z"></path></svg>
                        <NavLink to='/new-partener' className='font-semibold text-xl ps-2'>FIND OUT MORE</NavLink>.</p>
                </div>
                <img src="img/img1.jpeg" style={{ width: '666px', height: '650px' }} alt='hemfred-marketing section 2' />
            </div>
            <div class="grid gap-4 grid-cols-2 max-w-full">
                <img src="img/d.jpeg" style={{ width: '666px', height: '650px' }} alt='hemfred-marketing section 2' />
                <div className='ps-9   flex align-center flex-col justify-center'>
                    <div className='text-left text-5xl font-medium' style={{ fontFamily: 'Tiempos Headline,serif' }}>Home cleaning as <br /> salary benefit</div>
                    <div className="w-full mt-8 flex justify-left items-left mb-5">
                        <p className="border-black border w-20 text-left"></p>
                    </div>
                    <p className='justify-left text-left font-normal text-base' style={{ width: '90%' }}>Our home cleaning service is perfect for companies looking to offer their employees an invaluable benefit that will make their lives much easier. So why not surprise your employees with this amazing benefit today? Please click on the link to read more about how our professional home cleaning services can help you create a cleaner and more comfortable lifestyle for your employees.</p>
                    <br />
                    <p className='justify-left text-left font-normal text-base flex items-center' style={{ width: '90%' }}>
                        <svg width="24" height="24" className="saBgkKB cfbsn65t"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 22.286a10.286 10.286 0 1 1 0-20.572 10.286 10.286 0 0 1 0 20.572Z"></path><path d="M10.886 7.971a.849.849 0 0 0-1.2 1.2L12.497 12l-2.811 2.829a.822.822 0 0 0 0 1.2.823.823 0 0 0 1.2 0l3.428-3.429a.822.822 0 0 0 0-1.2l-3.428-3.429Z"></path></svg>
                        <NavLink to='/new-partener' className='font-semibold text-xl ps-2'>READ MORE</NavLink>.</p>
                </div>
            </div>
            <div class="grid gap-4 grid-cols-2 max-w-full">
                <div className='ps-9   flex align-center flex-col justify-center'>
                    <div className='text-left text-5xl font-medium' style={{ fontFamily: 'Tiempos Headline,serif' }}>Stockholm</div>
                    <div className="w-full mt-8 flex justify-left items-left mb-5">
                        <p className="border-black border w-20 text-left"></p>
                    </div>
                    <br />
                    <p className='justify-left text-left font-normal ps-5 text-base flex items-center' style={{ width: '90%' }}>
                        <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="#1e1e1e" viewBox="0 0 16 16"><path d="M8,15H8a.49.49,0,0,1-.42-.24L3.93,8.88c-.07-.1-.38-.64-.38-.64A4.91,4.91,0,0,1,3,6,5,5,0,0,1,13,6a4.88,4.88,0,0,1-.54,2.22v0s-.3.54-.39.66L8.42,14.76A.49.49,0,0,1,8,15ZM4.44,7.78s.24.44.32.54L8,13.55l3.23-5.2c.08-.12.3-.51.34-.58A3.91,3.91,0,0,0,12,6,4,4,0,1,0,4.44,7.78ZM12,8h0Z" /><path d="M8,8a2,2,0,1,1,2-2A2,2,0,0,1,8,8ZM8,5A1,1,0,1,0,9,6,1,1,0,0,0,8,5Z" /></svg>
                        <NavLink to='/new-partener' className='ps-9'>
                            <p className='font-semibold text-2xl'>ADDRESS</p>
                            <p className='text-2xl'>Rosenlundsgatan 40, Stockholm</p>
                        </NavLink>.
                    </p>
                    <br />
                    <br />
                    <p className='justify-left text-left font-normal ps-5 text-base flex items-center' style={{ width: '90%' }}>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#1E1E1E" /><path d="M7.5 5V8.5L10.5 11" stroke="#1E1E1E" stroke-linecap="round" stroke-linejoin="round" /></svg>
                        <NavLink to='/new-partener' className='ps-9'>
                            <p className='font-semibold text-2xl'>OPENING HOURS</p>
                            <p className='text-2xl'>Mo-Fr: 08-17, Sa-Su: Closed</p>
                        </NavLink>.
                    </p>
                    <br />
                    <br />
                    <p className='justify-left text-left font-normal ps-5 text-base flex items-center' style={{ width: '90%' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" fill="#1e1e1e" height="32" viewBox="0 0 32 32" ><clipPath id="a"><path d="m0 0h32v32h-32z" /></clipPath><g clip-path="url(#a)" fill="#1e1e1e"><path d="m32 15.9998c.0025-3.4936-1.1385-6.89206-3.2488-9.67629-2.1103-2.78424-5.074-4.80124-8.4382-5.742971-3.3643-.941734-6.9444-.75644-10.1935.527581-3.24913 1.28403-5.98867 3.59621-7.80027 6.58342-1.811608 2.98726-2.595697 6.48526-2.2325268 9.95996.3631698 3.4747 1.8536368 6.735 4.2437768 9.2831 2.39015 2.5481 5.54859 4.2438 8.99302 4.8282 3.4444.5844 6.9854.0255 10.0822-1.5916l7.1772 1.7829c.09.0222.1842.0222.2743 0 .1498.0018.2985-.0278.4362-.0868.1378-.0591.2617-.1463.3638-.2561.143-.1352.2478-.3056.304-.4942s.0617-.3887.016-.5801l-1.8058-7.1771c1.1906-2.2714 1.8177-4.7956 1.8286-7.36zm-4.16 7.5428 1.44 5.7372-5.7371-1.44c-.2864-.0679-.5877-.0272-.8457.1143-2.8893 1.6195-6.2671 2.1387-9.5093 1.4617-3.24231-.6771-6.13-2.5047-8.12963-5.1452s-2.97608-5.9155-2.74897-9.2199c.22712-3.3044 1.64245-6.415 3.98454-8.75709s5.45266-3.75742 8.75706-3.98454c3.3045-.22712 6.5794.74934 9.2199 2.74897s4.4681 4.88732 5.1452 8.12956c.6771 3.2423.1579 6.6201-1.4617 9.5093-.1415.2581-.1822.5594-.1143.8457z" /><path d="m9.14289 18.2858c1.26241 0 2.28571-1.0234 2.28571-2.2857 0-1.2624-1.0233-2.2857-2.28571-2.2857-1.26236 0-2.28571 1.0233-2.28571 2.2857 0 1.2623 1.02335 2.2857 2.28571 2.2857z" /><path d="m15.9999 18.2858c1.2624 0 2.2858-1.0234 2.2858-2.2857 0-1.2624-1.0234-2.2857-2.2858-2.2857-1.2623 0-2.2857 1.0233-2.2857 2.2857 0 1.2623 1.0234 2.2857 2.2857 2.2857z" /><path d="m22.8571 18.2858c1.2624 0 2.2857-1.0234 2.2857-2.2857 0-1.2624-1.0233-2.2857-2.2857-2.2857-1.2623 0-2.2857 1.0233-2.2857 2.2857 0 1.2623 1.0234 2.2857 2.2857 2.2857z" /></g></svg>
                        <NavLink to='/new-partener' className='ps-9'>
                            <p className='font-semibold text-2xl'>E-MAIL</p>
                            <p className='text-2xl'>info@hemfrid.se</p>
                        </NavLink>.
                    </p>
                    <br />
                    <br />
                    <p className='justify-left text-left font-normal ps-5 text-base flex items-center' style={{ width: '90%' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#1e1e1e" height="32" viewBox="0 0 20 32" width="32"><clipPath id="a"><path d="m.857056 0h18.2857v32h-18.2857z" /></clipPath><g clip-path="url(#a)" fill="#1e1e1e"><path d="m15.7149.00080005h-11.4286c-.45367-.01260945-.90515.06745315-1.32682.23529195-.42168.167839-.80469.419926-1.12561.740846-.32092.320922-.57301.703932-.74084 1.125602-.167843.42168-.247906.87316-.235296 1.32683v25.14283c-.01261.4537.067453.9052.235296 1.3269.16783.4216.41992.8046.74084 1.1256.32092.3209.70393.573 1.12561.7408.42167.1678.87315.2479 1.32682.2353h11.4286c.4537.0126.9051-.0675 1.3268-.2353s.8047-.4199 1.1256-.7408c.3209-.321.573-.704.7409-1.1256.1678-.4217.2479-.8732.2352-1.3269v-25.14283c.0127-.45367-.0674-.90515-.2352-1.32683-.1679-.42167-.42-.80468-.7409-1.125602-.3209-.32092-.7039-.573007-1.1256-.740846-.4217-.1678388-.8731-.2479014-1.3268-.23529195zm-11.4286 2.28570995h11.4286c.1536-.01405.3084.00586.4534.05833.1451.05246.2768.13619.3859.24526.109.10906.1927.24078.2452.38582.0525.14505.0724.29985.0583.45345v21.71433h-13.71425v-21.71433c-.01406-.1536.00586-.3084.05832-.45345.05246-.14504.1362-.27676.24526-.38582.10906-.10907.24079-.1928.38583-.24526.14504-.05247.29985-.07238.45344-.05833zm11.4286 27.42859h-11.4286c-.15359.014-.3084-.0059-.45344-.0583-.14504-.0525-.27677-.1362-.38583-.2453s-.1928-.2408-.24526-.3858c-.05246-.1451-.07238-.2999-.05832-.4535v-1.1428h13.71425v1.1428c.0141.1536-.0058.3084-.0583.4535-.0525.145-.1362.2767-.2452.3858-.1091.1091-.2408.1928-.3859.2453-.145.0524-.2998.0723-.4534.0583z" /><path d="m8.85709 6.85725h2.28571c.3031 0 .5938-.12041.8081-.33474.2144-.21433.3348-.50502.3348-.80812s-.1204-.59379-.3348-.80812c-.2143-.21433-.505-.33474-.8081-.33474h-2.28571c-.3031 0-.59379.12041-.80812.33474s-.33474.50502-.33474.80812.12041.59379.33474.80812.50502.33474.80812.33474z" /></g></svg>
                        <NavLink to='/new-partener' className='ps-9'>
                            <p className='font-semibold text-2xl'>PHONE</p>
                            <p className='text-2xl'>010-555 85 00</p>
                        </NavLink>.
                    </p>
                </div>
                <img src={map} style={{ width: '666px', height: '650px' }} alt='hemfred-marketing section 2' />
            </div>
            <div className="md:mx-auto w-screen max-w-full py-10" style={{ background: '#dde6e0' }}>
                <div className='flex items-center flex-col justify-center py-20'>
                    <div className='text-center text-6xl font-medium' style={{ fontFamily: 'Tiempos Headline,serif' }}>Hemfrid and sustainability</div>
                    <div className="w-full mt-8 flex justify-center items-center mb-5">
                        <p className="border-black border w-20 text-center"></p>
                    </div>
                    <p className='mx-auto text-2xl'>Vi jobbar kontinuerligt med hållbarhetsfrågor och vill ständigt förbättra</p>
                    <p className='mx-auto text-2xl'>och utveckla vårt arbete för en mer hållbar vardag.</p>
                    <br />
                    <button className='px-20 py-3 rounded border border-black'>LÄS MER</button>
                </div>
            </div>
        </>
    );
}

export default Contact;
