import { useEffect, useState } from "react";
import Cards from "../../components/ui/Cards";
import { OrbitingCirclesDemo } from "../../components/ui/orbitingcirclesdemo";
import { useRouter } from "next/router";
import Navbar from "@/components/ui/Navbar";
import { OrbitingCirclesDemoApp } from "@/components/ui/orbitingcirclesdemoaapp";
import { OrbitingCirclesDemoSoftware } from "@/components/ui/orbitingcirclesdemosoftware";
import { OrbitingCirclesDemoCyberSecurity } from "@/components/ui/orbitingcirclesdemocs";

const Software = () => {
    const cyberSecurityData = [
        { image: '/assets/template-img/temp 1.gif', title: 'Penetration Testing', description: 'Threat Intelligence-driven adversary simulation demonstrating potential attack vectors and providing an overview of your security posture from an attacker standpoint.', designLink: '' },
        { image: '/assets/template-img/temp 2.gif', title: 'Application Security Assessment', description: 'EA thorough hunt for business logic flaws and implementation vulnerabilities in applications of any kind, from large cloud-based solutions to embedded and mobile applications.', designLink: '' },
        { image: '/assets/template-img/temp 3.gif', title: 'Payment Systems Security Assessment', description: 'Comprehensive analysis of hardware and software components of various payment systems to reveal potential fraud scenarios and vulnerabilities that can result in financial transactions manipulation.', designLink: '' },
        { image: '/assets/template-img/temp 3.gif',title: "ICS Security Assessment",
          description: 'Case-specific threat modelling and the vulnerability assessment of Industrial Control Systems and their components, providing an insight into the existing attack surface and the corresponding business impact of potential attacks.' ,designLink: '' },
        { image: '/assets/template-img/temp 3.gif',    title: "Transportation Systems Security Assessment",
          description: 'Specialized research focused on identifying security problems related to mission-critical components of modern transportation infrastructure from Automotive to Aerospace.',
       designLink: '' },
        { image: '/assets/template-img/temp 3.gif',    title: 'Smart Technologies and IoT Security Assessment',
          description: 'Detailed evaluation of modern highly-interconnected devices and their backend infrastructure, revealing vulnerabilities on firmware, network, and application layers.',       designLink: '' },
        { image: '/assets/template-img/temp 3.gif',    title:'Red Teaming',
          description: 'Threat Intelligence-driven adversary simulation helping to evaluate the effectiveness of your security monitoring capabilities and incident response procedures.'
      , designLink: '' },

    ];
   



    return ( 

      <><Navbar /><div className=" bg-black pt-9">
        <div className="flex justify-evenly items-center mx-3  pt-9">
          <OrbitingCirclesDemoCyberSecurity />

          <h1 className="text-4xl font-bold w-60 text-white">
            "Welcome to Our Cyber Security Section"
          </h1>
        </div>
        <div className="container mx-auto ">
          <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-black-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black my-9 py-9">
            Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {cyberSecurityData.map((data, index) => (
              <div key={index} className="">
                <Cards card={data} />
              </div>
            ))}
          </div>
        </div>        </div></>
    );
};
export default Software;
