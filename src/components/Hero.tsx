import { IoBagHandleOutline } from "react-icons/io5"
import HeroImg from "../assets/fruit-plate.png"
import Leaf from "../assets/leaf.png"

const Hero = () => {
  return (
    <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
            <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
                <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
                    <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">Yummy<br/> <span className="text-secondary">MilkShake</span></h1>
                    <p className="text-2xl tracking-wide">
                        Order now for fresh Healthy Life
                    </p>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus tempora ducimus perferendis deserunt architecto iusto eveniet recusandae sint adipisci.
                    </p>
                    <button className="primary-btn flex items-center gap-2">
                        <span>
                            <IoBagHandleOutline />
                        </span>
                        Order Now
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={HeroImg} alt="" className="w-[350px] md:w-[550px] drop-shadow" />
            </div>
            <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
                <img src={Leaf} alt="" className="w-full md:max-w-[300px]" />
            </div>
        </div>
    </div>
  )
}

export default Hero