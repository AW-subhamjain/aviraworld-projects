import { useEffect, useState } from "react";
import Cards from "../../components/ui/Cards";
import { OrbitingCirclesDemo } from "../../components/ui/orbitingcirclesdemo";
import { useRouter } from "next/router";
import Navbar from "@/components/ui/Navbar";

const Web = () => {
    const webCardData = [
        { image: '/assets/template-img/temp 1.gif', title: 'Template 1', description: 'Enter Name of app', designLink: '../../Websites/Template 1/index1.html' },
        { image: '/assets/template-img/temp 2.gif', title: 'Template 2', description: 'Enter Name of app', designLink: '../../Websites/Template 2/index2.html' },
        { image: '/assets/template-img/temp 3.gif', title: 'Template 3', description: 'Enter Name of app', designLink: '../../Websites/Template 3/HTML/index3.html' },
        { image: '/assets/template-img/temp 4.gif', title: 'Template 4', description: 'Enter Name of app', designLink: '../../Websites/Template 4/index4.html' },
        { image: '/assets/template-img/temp 5.gif', title: 'Template 5', description: 'Enter Name of app', designLink: '../../Websites/Template 5/index5.html' },
        { image: '/assets/template-img/temp 6.gif', title: 'Template 6', description: 'Enter Name of app', designLink: '../../Websites/Template 6/index6.html' },
        { image: '/assets/template-img/temp 7.gif', title: 'Template 7', description: 'Enter Name of app', designLink: '../../Websites/Template 7/index7.html' },
        { image: '/assets/template-img/temp 8.gif', title: 'Template 8', description: 'Enter Name of app', designLink: '../../Websites/Template 8/index8.html' },
        { image: '/assets/template-img/temp 9.gif', title: 'Template 9', description: 'Enter Name of app', designLink: '../../Websites/Template 9/index9.html' },
        { image: '/assets/template-img/temp 10.gif', title: 'Template 10', description: 'Enter Name of app', designLink: '../../Websites/Template 10/index10.html' },
    ];
   



    return ( 
      <><Navbar /><div className=" bg-black pt-9">
        <div className="flex justify-evenly items-center mx-3  pt-9">
          <OrbitingCirclesDemo />

          <h1 className="text-4xl font-bold w-60 text-white">
            "Welcome to Our Web Devlopement Section"
          </h1>
        </div>
        <div className="container mx-auto ">
          <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-black-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black my-9 pt-9">
            Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {webCardData.map((data, index) => (
              <div key={index} className="">
                <Cards card={data} />
              </div>
            ))}
          </div>
        </div>        </div></>
    );
};
export default Web;
