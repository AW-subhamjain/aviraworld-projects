import { OrbitingCirclesDemo } from "./orbitingcirclesdemo";

const HeroSection = () => {
    return ( 
        <div className="flex justify-evenly items-center bg-black mx-3  rounded-3xl">
            <OrbitingCirclesDemo/>

            <h1 className="text-4xl font-bold w-60 text-white">
                "Welcome to Our Web Devlopement Section"
            </h1>

        </div>
    );
};
export default HeroSection;
