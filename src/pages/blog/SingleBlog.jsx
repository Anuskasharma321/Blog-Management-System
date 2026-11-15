import React from 'react'

const SingleBlog = () => {
  return (
    <Layout>
      
<section class="bg-gray-100 py-12 sm:py-16 min-h-screen">
    <div class="lg:px-16 px-4">
        <div class="mx-auto max-w-7xl">

            <div class="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-8 lg:gap-12 items-start">

                
                <main class="lg:border-r lg:border-gray-300 lg:pr-12">
                    <link to ='/blog/edit' class="text-indigo-600 text-sm font-semibold mb-4 inline-block">Edit</link>

                    
                    <div class="mb-3">
                        <span class="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-indigo-600 text-white">
                            Architecture
                        </span>
                    </div>

                    
                    <h1 class="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                        Blog Title Goes Here
                    </h1>


                    
                    <div class="flex items-center gap-1.5 text-gray-400 mb-6">
                        <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time class="text-xs text-gray-500">Oct 11, 2026</time>
                    </div>

                    
                    <div class="relative w-full  overflow-hidden bg-gray-900 mb-8">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
                             alt="Modern Architecture Trend"
                             class="w-full h-full object-cover" />
                    </div>

                    
                    <article class="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p class="text-sm sm:text-base leading-relaxed">
                            This year, architectural design embraces concepts that blend seamlessly with the surrounding natural environment. While studios worldwide compete to construct high-aesthetic structures, modern tropical design increasingly prioritizes the balance between luxury and sustainability.
                        </p>

                        <p class="text-sm sm:text-base leading-relaxed">
                            Utilizing eco-friendly materials such as reclaimed wood and local natural stone, combined with integrated green open spaces, has become the defining element of current residential aesthetics.
                        </p>

                        <h2 class="text-lg sm:text-xl font-bold text-gray-900 pt-2">
                            1. Sustainable and Natural Materials
                        </h2>
                        <p class="text-sm sm:text-base leading-relaxed">
                            Incorporating recycled timber and indigenous stones not only minimizes the building's carbon footprint, but also creates a distinct, warm visual identity tailored for contemporary tropical living.
                        </p>

                        <h2 class="text-lg sm:text-xl font-bold text-gray-900 pt-2">
                            2. Natural Air Circulation and Daylight Harvesting
                        </h2>
                        <p class="text-sm sm:text-base leading-relaxed">
                            Spatial planning focuses heavily on maximizing cross-ventilation and natural daylight openings, drastically reducing reliance on artificial cooling and electrical lighting systems.
                        </p>
                    </article>

                    
                    <div class="mt-12 pt-6 border-t border-gray-200 flex items-center gap-4">
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-900">Share:</span>
                        <div class="flex items-center gap-2">
                            
                            <a href="#" aria-label="Share on Facebook" class="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition duration-200">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            
                            <a href="#" aria-label="Share on WhatsApp" class="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition duration-200">
                                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                </svg>
                            </a>
                            
                            <a href="#" aria-label="Share on X" class="w-8 h-8 rounded-full bg-gray-200 text-gray-600 hover:bg-black hover:text-white flex items-center justify-center transition duration-200">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                </main>

                
                <aside class="space-y-8 lg:sticky lg:top-8">

                    
                    <div class="bg-white p-5 border border-gray-200 shadow-sm">
                        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4 pb-2 border-b border-gray-100">
                            Related Articles
                        </h3>

                        <div class="space-y-4">
                            
                            <a href="#" class="group flex items-start gap-3">
                                <div class="w-16 h-16 shrink-0 overflow-hidden bg-gray-900">
                                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=300&auto=format&fit=crop" 
                                         alt="Design Award"
                                         class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-semibold tracking-wider uppercase text-indigo-600 mb-0.5">
                                        News
                                    </span>
                                    <h4 class="text-xs font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-gray-600 transition">
                                        Studio Wins International Sustainable Design Award
                                    </h4>
                                    <span class="text-[10px] text-gray-400 mt-1">Sep 25, 2026</span>
                                </div>
                            </a>

                            
                            <a href="#" class="group flex items-start gap-3">
                                <div class="w-16 h-16 shrink-0 overflow-hidden bg-gray-900">
                                    <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=300&auto=format&fit=crop" 
                                         alt="Site Visit"
                                         class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-semibold tracking-wider uppercase text-indigo-600 mb-0.5">
                                        Activity
                                    </span>
                                    <h4 class="text-xs font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-gray-600 transition">
                                        Behind the Scenes: On-Site Inspection & Progress
                                    </h4>
                                    <span class="text-[10px] text-gray-400 mt-1">Sep 24, 2026</span>
                                </div>
                            </a>

                           
                            <a href="#" class="group flex items-start gap-3">
                                <div class="w-16 h-16 shrink-0 overflow-hidden bg-gray-900">
                                    <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=300&auto=format&fit=crop" 
                                         alt="Eco Materials"
                                         class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[9px] font-semibold tracking-wider uppercase text-indigo-600 mb-0.5">
                                        Guide
                                    </span>
                                    <h4 class="text-xs font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-gray-600 transition">
                                        Selecting Sustainable Materials for Modern Homes
                                    </h4>
                                    <span class="text-[10px] text-gray-400 mt-1">Sep 18, 2026</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    
                    <div class="bg-indigo-600 text-white p-6 border border-indigo-600 shadow-sm">
                        <span class="text-[10px] font-semibold tracking-widest uppercase text-white/60 block mb-2">
                            Have a Project in Mind?
                        </span>
                        <h3 class="text-lg font-bold leading-snug mb-3">
                            Let's Build Something Great Together
                        </h3>
                        <p class="text-xs text-white/80 leading-relaxed mb-6">
                            Consult your architectural ideas with our expert design team today.
                        </p>
                        <a href="#" 
                           class="inline-flex items-center justify-center w-full bg-white text-gray-900 hover:bg-gray-100 text-xs font-bold py-3 uppercase tracking-wider transition">
                            Get in Touch
                        </a>
                    </div>

                </aside>

            </div>

        </div>
    </div>
</section>
    </Layout>
  )
}

export default SingleBlog
