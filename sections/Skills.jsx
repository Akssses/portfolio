import { SiCss3, SiHtml5, SiJavascript, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { TbBrandNextjs } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'

const Skills = () => {
    return (
        <>
        <section className="mt-[100px]">
            <h1 className="text-center text-4xl mb-10 font-bold">My skills</h1>
            <main className='grid gap-10 items-center grid-rows-2 sm:grid-cols-3 lg:grid-cols-4'>
                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <SiHtml5 size={40} className="text-orange-400"/>
                        <h1 className='font-bold md:text-2xl'>HTML 5</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[95%]" >95%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <SiCss3 size={40} className="text-primary-blue"/>
                        <h1 className='font-bold md:text-2xl'>CSS</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]" >80%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <DiReact size={40} className="text-primary-blue"/>
                        <h1 className='font-bold md:text-2xl'>React JS</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[40%]" >40%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <SiJavascript size={40} className="text-yellow-300"/>
                        <h1 className='font-bold md:text-2xl'>Java Script</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]" >60%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <SiTypescript size={40} className="text-blue-500"/>
                        <h1 className='font-bold md:text-2xl'>Type Script</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[20%]" >10%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <TbBrandNextjs size={40} />
                        <h1 className='font-bold md:text-2xl'>Next JS</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]" >60%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <SiTailwindcss size={40} className="text-blue-400"/>
                        <h1 className='font-bold md:text-2xl'>Tailwind</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[90%]" >90%</div>
                    </div>
                </div>

                <div className='md:my-5'>
                    <div className='flex items-center gap-3 mb-2'>
                        <FiFigma size={40} className="text-blue-400"/>
                        <h1 className='font-bold md:text-2xl'>UX/UI</h1>
                    </div>
                    <div class="lg:w-[270px] bg-gray-200 rounded-full dark:bg-gray-700">
                        <div class="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]" >50%</div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
}

export default Skills