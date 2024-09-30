import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemoApp() {
  return (
    <div className="relative flex h-[500px]  w-96 flex-col items-center justify-center  rounded-3xl  bg-black ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Avira
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.andStudio />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.ionic />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={5}
        reverse
      >
        <Icons.swift />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.roid />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.kotlin />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.flutter />
      </OrbitingCircles>




    </div>
  );
}

const Icons = {

  flutter: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"></rect><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon><polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
</svg>),


  roid: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
<rect width="6" height="29.363" x="19.522" y="20.331" fill="#4343bf" transform="rotate(-35.27 22.523 35.015)"></rect><rect width="32.202" height="6" x="60.399" y="33" fill="#4343bf" transform="rotate(-53.83 76.5 35.999)"></rect><path fill="#4343bf" d="M50,30.324c-20.953,0-38,17.277-38,38.514V76l6.162-1h63.676H88v-6.162 C88,47.601,70.953,30.324,50,30.324L50,30.324z"></path><path fill="#4b4dff" d="M50,36.486c-17.583,0-31.838,14.484-31.838,32.351h63.676C81.838,50.971,67.583,36.486,50,36.486z"></path><rect width="76" height="10" x="12" y="69" fill="#3abcf8"></rect><circle cx="37" cy="56" r="4" fill="#edf7f5" fill-rule="evenodd" clip-rule="evenodd"></circle><circle cx="63" cy="56" r="4" fill="#edf7f5" fill-rule="evenodd" clip-rule="evenodd"></circle>
</svg> ),

  swift: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="e32o0t5zubGPVIxGcWXWla_61901_gr1" x1="31" x2="31" y1="14" y2="48" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#e32o0t5zubGPVIxGcWXWla_61901_gr1)" d="M40.644,45.942c-1.451,0.72-3.008,1.337-4.675,1.704C34.931,47.874,33.851,48,32.727,48 c-1.176,0-2.369-0.093-3.577-0.299c-1.737-0.296-3.506-0.814-5.303-1.583C18.83,43.989,14.668,40.261,12,36 c1.341,1.25,6.469,5,12.722,5c6.379,0,8.787-2.521,8.785-2.523C26.378,33.227,17.626,22.875,15,19 c4.909,4.473,13.294,10.124,16.069,11.722C25.199,24.544,20,17,20,17c9.285,9.373,18.802,15.006,18.98,15.125 c0.875-1.75,1.001-4.19,1.001-5.625c0-4.5-2.229-9.75-4.981-12.5c7.284,4.397,11.96,12.046,11.985,19.25 c0.005,1.346-0.147,2.677-0.483,3.969l-0.079,0.232c0,0,0.417,0.482,0.442,0.513c4.313,5.29,3.095,10.971,2.561,9.905 c-1.217-2.376-2.979-2.83-4.692-2.87C43.186,44.965,41.649,45.443,40.644,45.942z"></path><linearGradient id="e32o0t5zubGPVIxGcWXWlb_61901_gr2" x1="32" x2="32" y1="6.667" y2="57.872" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#e32o0t5zubGPVIxGcWXWlb_61901_gr2)" d="M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z"></path>
</svg>),

  kotlin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<polygon fill="#0d91d6" points="24,6 17.99,12.35 11.97,18.69 6,25 6,6"></polygon><polygon fill="#f88909" points="24,6 23.96,6 17.97,12.33 11.96,18.68 6,24.97 6,25 6,25.09 6,42 14.69,33.31 20.87,27.13 27.06,20.94 33.25,14.75 42,6"></polygon><polygon fill="#c757bc" points="14.69,33.31 6,42 6,25.09"></polygon><polygon fill="#d3638f" points="20.87,27.13 14.69,33.31 6,25.09 6,25 11.97,18.69"></polygon><polygon fill="#e07063" points="27.06,20.94 20.87,27.13 11.97,18.69 17.99,12.35"></polygon><polygon fill="#ec7d36" points="33.25,14.75 27.06,20.94 17.99,12.35 24,6"></polygon><polygon fill="#f88909" points="42,6 33.25,14.75 24,6"></polygon><polygon fill="#0095d5" points="11.51,19.15 7.99,22.88 6,21 6,13.94"></polygon><polygon fill="#2b88da" points="15.03,15.42 11.51,19.15 6,13.94 6,6.87"></polygon><polygon fill="#557bde" points="18.56,11.7 15.03,15.42 6,6.87 6,6 12.53,6"></polygon><polygon fill="#806ee3" points="22.08,7.97 18.56,11.7 12.53,6 24,6"></polygon><polygon fill="#0095d5" points="23,25 6,42 9.35,42 17.52,42 40,42"></polygon><polygon fill="#2b88da" points="25.68,42 17.52,42 11.76,36.25 15.84,32.17"></polygon><polygon fill="#557bde" points="33.86,42 25.68,42 15.84,32.17 19.92,28.09"></polygon><polygon fill="#806ee3" points="42,42 33.86,42 19.92,28.09 24,24"></polygon>
</svg>),

  ionic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="9" fill="#448aff"></circle><circle cx="37" cy="11" r="4" fill="#448aff"></circle><path fill="#448aff" d="M41.706,14.715c-0.842,1.064-2.034,1.836-3.405,2.139C39.379,19.007,40,21.429,40,24	c0,8.837-7.163,16-16,16S8,32.837,8,24S15.163,8,24,8c2.571,0,4.993,0.621,7.145,1.699c0.303-1.371,1.075-2.564,2.139-3.405	C30.509,4.835,27.354,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,20.646,43.165,17.491,41.706,14.715	z"></path>
</svg>
  ),
  andStudio: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#00c853" d="M4,23C4,11.954,12.954,3,24,3s20,8.954,20,20l-20,2L4,23z"></path><path fill="#00e676" d="M44,23c0,11.046-8.954,20-20,20S4,34.046,4,23H44z"></path><path fill="#c2eafd" d="M39.29,42.34v3.16c0,0.19-0.1,0.35-0.25,0.43c-0.14,0.09-0.33,0.1-0.5,0l-2.72-1.59l-4.68-8.15	l-2-3.47l-3.75-6.52l2.93-2.93l3.99,6.94l2.07,3.6L39.29,42.34z"></path><path fill="#9addfb" d="M31.231,28.335c-0.814,1.101-1.869,2.011-3.092,2.648l3.991,6.941	c1.185-0.648,2.272-1.446,3.265-2.346L31.231,28.335z"></path><path fill="#c2eafd" d="M39,23c0,4.24-1.77,8.08-4.62,10.81c-0.96,0.93-2.05,1.73-3.24,2.38C29.02,37.34,26.59,38,24,38	c-2.53,0-4.96-0.62-7.14-1.81l-4.68,8.15l-2.72,1.59c-0.17,0.1-0.36,0.09-0.5,0c-0.15-0.08-0.25-0.24-0.25-0.43v-3.16l10.97-19.07	l2.93,2.93l-3.75,6.53C20.43,33.56,22.18,34,24,34c1.86,0,3.61-0.46,5.14-1.28c1.21-0.63,2.28-1.49,3.17-2.51	C33.99,28.27,35,25.76,35,23H39z"></path><path fill="#37474f" d="M28.5,13H26v-3h-4v3h-2.5c-0.828,0-1.5,0.672-1.5,1.5V23l4.932,4.932c0.59,0.59,1.546,0.59,2.135,0	L30,23v-8.5C30,13.672,29.328,13,28.5,13z M24,22c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5	C26.5,20.881,25.381,22,24,22z"></path>
</svg>
  ),
 
  
};
