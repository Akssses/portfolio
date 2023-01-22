import { AiOutlineMail } from "react-icons/ai"
import { FiHome, FiPhone } from "react-icons/fi"
import { FaTelegram } from 'react-icons/fa'


const Form = () => {
    return (
        <>
            <section className="mt-[100px] ">
                    <h1 className="text-4xl md:text-6xl font-bold dark:text-white">Contact me</h1>
                    <h2 className="text-gray-500 text-2xl">I will answer you in the next 24 hours</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-between">
                    <div className="mt-10 flex items-center gap-5">
                        <div className="bg-primary-blue p-5 rounded-2xl w-[80px]">
                            <FiHome size={40} color={"white"}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Location</h1>
                            <p>Planet Earth, Central Asia, Kyrgyzstan</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-5">
                        <div className="bg-primary-blue p-5 rounded-2xl w-[80px]">
                            <FiPhone size={40} color={"white"}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Phone Number</h1>
                            <p>+996 700 777 820</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-5">
                        <div className="bg-primary-blue p-5 rounded-2xl w-[80px]">
                            <AiOutlineMail size={40} color={"white"}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Email Address</h1>
                            <p>aksss7.kg@gmail.com</p>
                        </div>
                    </div>
                    <div className="mt-10 flex items-center gap-5">
                        <div className="bg-primary-blue p-5 rounded-2xl w-[80px]">
                            <FaTelegram size={40} color={"white"}/>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">Telegram</h1>
                            <p>@aksss_07</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form