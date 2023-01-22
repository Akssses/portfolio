import { useRouter } from "next/router"
import Button from "../components/Button"

const Hero = () => {
  const router = useRouter()

  return (
    <section className="mt-16 flex justify-between items-center">
      <div>
        <h1 className="text-5xl sm:text-7xl font-bold">Hi I'm <span className="dark:text-primary-blue">Akbar</span></h1>
        <h3 className="text-3xl sm:text-4xl my-3">I am Front-End developer</h3>
        <p className="text-gray-700 mb-8 max-w-[600px]">Akbar, a junior front-end developer with a passion for creating beautiful and functional user interfaces. Having experience in web development, I am well versed in the principles of web development and well versed in various interface technologies, including HTML, CSS, JavaScript, React Js and others</p>
        <div>
          <Button onClick={(e) => router.push('/portfolio')} className="bg-primary-blue text-white px-6 mr-5">Портфолио</Button>
          <Button onClick={(e) => router.push('/resume')} className="bg-primary-blue text-white px-6">Резюме</Button>
        </div>
      </div>
      <div>
        <img className="w-[300px] rounded-full hidden sm:block" src="/images/david.png" alt="david" />
      </div>
    </section>
  )
}

export default Hero