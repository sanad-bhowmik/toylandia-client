import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Review = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="mb-24 mt-24">
            <div>
                <h1 className="text-6xl font-serif underline mb-16 text-center">Reviews</h1>
                <Marquee>
                    <div className="flex gap-6"  data-aos="fade-left">
                        {/* card-01  */}
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="px-4 py-5">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"><img src="https://media.istockphoto.com/id/897376172/vector/female-avatar-profile-icon-round-woman-face.jpg?s=170667a&w=0&k=20&c=SFNbMLT0owPBx1JTM-IjG-xbkdr6Rq5JEW72zRu9NtY=" alt="" /></div>
                                    <div class="ml-3">
                                        <h3 class="text-xl font-medium text-gray-800">Jessica Brown</h3>
                                        <span class="text-gray-600">May 18, 2023</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-gray-700">"Absolutely amazing! The service exceeded my expectations. I'll definitely be coming back!"</p>
                                </div>
                                <div class="mt-6 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="ml-2 text-gray-600">4.0</span>
                                </div>
                            </div>
                        </div>

                        {/* card-01  */}
                        {/* card-02  */}
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="px-4 py-5">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"><img src="https://media.istockphoto.com/id/1330293084/vector/female-avatar-icon.jpg?s=612x612&w=0&k=20&c=mUnM_INf_VG0BGTMZrpkwJrXG2lYadnawec-pNyABgg=" alt="" /></div>
                                    <div class="ml-3">
                                        <h3 class="text-xl font-medium text-gray-800">Sarah Johnson</h3>
                                        <span class="text-gray-600">May 18, 2023</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-gray-700">"Great experience! The staff was friendly and attentive. Highly recommended place!"</p>
                                </div>
                                <div class="mt-6 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="ml-2 text-gray-600">4.0</span>
                                </div>
                            </div>
                        </div>

                        {/* card-02  */}
                        {/* card-03  */}
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="px-4 py-5">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"><img src="https://media.istockphoto.com/id/1390783168/vector/the-girl-icon-avatar-of-a-light-skinned-brunette-girl-on-a-purple-background-vector.jpg?s=612x612&w=0&k=20&c=I_Wh1vEEdn4vs3SvSB3cSmyvsmR7bBoL874CBvOlpwY=" alt="" /></div>
                                    <div class="ml-3">
                                        <h3 class="text-xl font-medium text-gray-800">Michael Smith</h3>
                                        <span class="text-gray-600">May 18, 2023</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-gray-700">"Highly recommend! The product quality is top-notch. I'm extremely satisfied with my purchase."</p>
                                </div>
                                <div class="mt-6 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="ml-2 text-gray-600">4.0</span>
                                </div>
                            </div>
                        </div>

                        {/* card-03  */}
                        {/* card-04  */}
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="px-4 py-5">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"><img src="https://media.istockphoto.com/id/1331330324/vector/female-avatar-icon.jpg?s=612x612&w=0&k=20&c=-DFhryMhHkcdJ01b9On8PEOGb4ZvvGRgJ1xOQtkZZjM=" alt="" /></div>
                                    <div class="ml-3">
                                        <h3 class="text-xl font-medium text-gray-800">Emily Davis</h3>
                                        <span class="text-gray-600">May 18, 2023</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-gray-700">"Fantastic customer service! They went above and beyond to help me. Thank you so much!"</p>
                                </div>
                                <div class="mt-6 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="ml-2 text-gray-600">4.0</span>
                                </div>
                            </div>
                        </div>

                        {/* card-04 */}
                        <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                            <div class="px-4 py-5">
                                <div class="flex items-center">
                                    <div class="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"><img src="https://media.istockphoto.com/id/1331330324/vector/female-avatar-icon.jpg?s=612x612&w=0&k=20&c=-DFhryMhHkcdJ01b9On8PEOGb4ZvvGRgJ1xOQtkZZjM=" alt="" /></div>
                                    <div class="ml-3">
                                        <h3 class="text-xl font-medium text-gray-800">Emily Davis</h3>
                                        <span class="text-gray-600">May 18, 2023</span>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <p class="text-gray-700">"Fantastic customer service! They went above and beyond to help me. Thank you so much!"</p>
                                </div>
                                <div class="mt-6 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-yellow-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4 text-gray-300">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="ml-2 text-gray-600">4.0</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </Marquee>
            </div>
        </section>
    );
};

export default Review;