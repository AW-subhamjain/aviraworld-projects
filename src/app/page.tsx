import Image from "next/image";
import Web from "../app/web/page";
import Navbar from "../components/ui/Navbar";
export default function Home() {
  return (
    <div >
       <iframe
          src="../../Websites/avira-tech-revamp/index.html"
          width="100%"
          height="1000px"
          style={{ border: 'none' }}
          title="External Page"
        ></iframe>
    </div>
  );
}
