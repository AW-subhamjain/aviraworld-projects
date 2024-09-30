import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
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
        <Icons.nodejs />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.AngularIcon />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={5}
        reverse
      >
        <Icons.tailwind />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent "
        radius={190}
        duration={20}
        delay={15}
        reverse
      >
        <Icons.vue />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.ReactIcon />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[60px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
        reverse
      >
        <Icons.nextJs />
      </OrbitingCircles>




    </div>
  );
}

const Icons = {

  nextJs: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <linearGradient id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1" x1="24" x2="24" y1="43.734" y2="4.266" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0a070a"></stop><stop offset=".465" stop-color="#2b2b2b"></stop><stop offset="1" stop-color="#4b4b4b"></stop></linearGradient><circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"></circle><rect width="3.023" height="15.996" x="15.992" y="16.027" fill="#fff"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2" x1="30.512" x2="30.512" y1="33.021" y2="18.431" gradientUnits="userSpaceOnUse"><stop offset=".377" stop-color="#fff" stop-opacity="0"></stop><stop offset=".666" stop-color="#fff" stop-opacity=".3"></stop><stop offset=".988" stop-color="#fff"></stop></linearGradient><rect width="2.953" height="14.59" x="29.035" y="15.957" fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"></rect><linearGradient id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3" x1="22.102" x2="36.661" y1="21.443" y2="40.529" gradientUnits="userSpaceOnUse"><stop offset=".296" stop-color="#fff"></stop><stop offset=".521" stop-color="#fff" stop-opacity=".5"></stop><stop offset=".838" stop-color="#fff" stop-opacity="0"></stop></linearGradient><polygon fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)" points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"></polygon>
    </svg>),


  vue: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="3bjInpNFK5hFbDC04bXOYa_tbleCw0ch6QC_gr1" x1="32" x2="32" y1="8.5" y2="59.263" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#3bjInpNFK5hFbDC04bXOYa_tbleCw0ch6QC_gr1)" d="M56.348,12L32,54L7.652,12h18.626L32,21.739L37.6,12H56.348z"></path><linearGradient id="3bjInpNFK5hFbDC04bXOYb_tbleCw0ch6QC_gr2" x1="32" x2="32" y1="11" y2="55" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#3bjInpNFK5hFbDC04bXOYb_tbleCw0ch6QC_gr2)" d="M57.214,11.501C57.035,11.191,56.705,11,56.348,11H38.6c-0.358,0-0.688,0.191-0.867,0.502	l-5.74,9.993l-5.851-10C25.962,11.188,25.634,11,25.278,11H7.652c-0.357,0-0.688,0.191-0.866,0.501s-0.179,0.691,0.001,1.001	l24.348,42C31.313,54.811,31.644,55,32,55s0.687-0.189,0.865-0.498l24.348-42C57.393,12.192,57.393,11.811,57.214,11.501z M32,52.006L9.388,13h7.307l14.441,24.824c0.179,0.308,0.508,0.497,0.864,0.497c0.001,0,0.001,0,0.002,0	c0.356-0.001,0.686-0.191,0.864-0.5L47.186,13h7.426L32,52.006z"></path>
</svg>  ),

  tailwind: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
    </svg>),

  ReactIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill="#74C0FC" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" /></svg>
  ),

  AngularIcon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
      <linearGradient id="SVGID_1__dSnah6CSCxRG_gr1" x1="32" x2="32" y1="6.872" y2="50.533" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_1__dSnah6CSCxRG_gr1)" d="M55.9,14.2L32.2,6.1C32,6,31.8,6,31.6,6.1L8.1,14.3c-0.4,0.2-0.7,0.6-0.7,1.1l3.7,30.8c0,0.3,0.2,0.6,0.5,0.8 l19.8,10.9c0.1,0.1,0.3,0.1,0.5,0.1c0.2,0,0.3,0,0.5-0.1l19.9-11c0.3-0.2,0.5-0.4,0.5-0.8l3.7-30.8C56.6,14.8,56.4,14.3,55.9,14.2z M51,45.3l-19,10.5L13,45.5L9.5,16l22.4-7.9l22.6,7.8L51,45.3z"></path><linearGradient id="SVGID_2__dSnah6CSCxRG_gr2" x1="31.999" x2="31.999" y1="6.872" y2="50.533" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#SVGID_2__dSnah6CSCxRG_gr2)" d="M12.4,17c-0.4,0.2-0.7,0.6-0.7,1.1l3.1,25.6c0,0.3,0.2,0.6,0.5,0.8l16.1,8.8c0.1,0.1,0.3,0.1,0.5,0.1 c0.2,0,0.3,0,0.5-0.1l16.2-9c0.3-0.2,0.5-0.4,0.5-0.8L52.2,18c0.1-0.5-0.2-0.9-0.7-1.1l-19.3-6.6c-0.2-0.1-0.4-0.1-0.7,0L12.4,17z M31.9,12.3l18.2,6.3l-2.9,24.3l-15.3,8.5L16.8,43l-2.9-24.3L31.9,12.3z"></path><linearGradient id="SVGID_3__dSnah6CSCxRG_gr3" x1="32.255" x2="32.255" y1="14.915" y2="40.065" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#SVGID_3__dSnah6CSCxRG_gr3)" d="M31.9,14.2L31.9,14.2L31.9,14.2L31.9,14.2L31.9,14.2L20,41h4.4l2.4-6h10.9l2.6,6h4.4L31.9,14.2z M32,22.4	l4.1,8.6l-7.7,0L32,22.4z"></path>
    </svg>
  ),
  nodejs: () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
      <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
    </svg>
  ),
 
  
};
