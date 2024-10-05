import { useEffect, useState } from "react";
import Cards from "../../components/ui/Cards";
import { OrbitingCirclesDemo } from "../../components/ui/orbitingcirclesdemo";
import { useRouter } from "next/router";
import Navbar from "@/components/ui/Navbar";
import { OrbitingCirclesDemoApp } from "@/components/ui/orbitingcirclesdemoaapp";
import { OrbitingCirclesDemoSoftware } from "@/components/ui/orbitingcirclesdemosoftware";

const Software = () => {
    const appCardData = [
        { image: '/assets/template-img/temp 1.gif', title: 'Template 1', description: 'Enter Name of app', designLink: '../../Websites/inventory/index.html' },

    ];
   



    return ( 

      <><Navbar /><div className=" bg-black pt-9">
        <div className="flex justify-evenly items-center mx-3  pt-9">
          <OrbitingCirclesDemoSoftware />

          <h1 className="text-4xl font-bold w-60 text-white">
            "Welcome to Our Software Section"
          </h1>
        </div>
        <div className="container mx-auto ">
          <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-black-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black my-9 py-9">
            Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {appCardData.map((data, index) => (
              <div key={index} className="">
                <Cards card={data} />
              </div>
            ))}
          </div>
        </div>        </div></>
    );
};
export default Software;
