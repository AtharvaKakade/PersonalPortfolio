import ImageTrail from "./ImageTrail";
import Galaxy from "./Galaxy";
import ScrollReveal from "./ScrollReveal";
import CircularGallery from "./CircularGallery";
import GalaxyBackground from "./GalaxyBackground";
const Intrests = () => {
  const myImages = [
    { image: "/images/captures/gardensnap.jpg", text: "A Quiet Corner" },
    { image: "/images/captures/kaas.jpg", text: "Valley of Flowers" },
    { image: "/images/captures/kadakwasla.jpg", text: "Lake View Serenity" },
    { image: "/images/captures/lalbag.jpg", text: "Lalbaugh Palace" },
    { image: "/images/captures/lonavla.jpg", text: "Hill Station Escape" },
    { image: "/images/captures/mumbai.jpg", text: "City of Dreams" },
    {
      image: "/images/captures/mumbaiagain.jpg",
      text: "Exploring the Metropolis",
    },
    { image: "/images/captures/mumbaii.jpg", text: "Gateway to India" },
    { image: "/images/captures/terrace.jpg", text: "Rooftop Views" },
    { image: "/images/captures/terrace1.jpg", text: "Golden Hour Terrace" },
  ];

  return (
    <div>
      {/* <GalaxyBackground/> */}
      <div>
        <div>
          <h1 className="uppercase items-center text-center py-5 text-5xl font-bold tracking-wider bg-gradient-to-b  from-[#FFC300] to-[#a7e1e6 ] bg-clip-text text-transparent">
            hobbies & Interests !
          </h1>
        </div>
        <div className="relative h-[600px] ">
          <div>
            {/* <img src="images/cinema/absolute.jpg" alt="" /> */}
            <h1 className="absolute font-cinzel text-[#6a040f] inset-0 flex items-center justify-center  text-[100px] font-bold select-none pointer-events-none">
              CINEMA
            </h1>
          </div>
          <ImageTrail
            items={[
              "images/cinema/96.jpg",
              "images/cinema/BB2.jpg",
              "images/cinema/HarishchandrachiFactory.jpg",
              "images/cinema/Hridayam.jpg",
              "images/cinema/Kantara.jpg",
              "images/cinema/MPM.jpg",
              "images/cinema/OKK.jpg",
              "images/cinema/RRR.jpg",
              "images/cinema/Saaho.jpg",
              "images/cinema/Salaar.jpg",
              "images/cinema/Sita-Ramam.jpg",
              "images/cinema/Swades.jpg",
              "images/cinema/TimeStory.jpg",
              "images/cinema/Vikram.jpg",
            ]}
            variant={4}
          />
        </div>
        <div
          className=" flex-col justify-center text-center items-center"
          style={{ height: "600px", position: "relative" }}
        >
          <h1 className="uppercase text-center text-6xl text-[#e5b814] mt-7 font-bebas tracking-widest">
            Focal Art
          </h1>
          <CircularGallery
            items={myImages}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            font="bold 30px Figtree"
          />
          <a 
          href="https://www.instagram.com/serene_snaps_?igsh=bTJiNXMyZ3lmMmJq"
          className="group relative inline-flex items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-1 px-3 text-base font-medium text-black backdrop-blur-xs transition-all duration-300 hover:bg-transparent dark:border-white/10 dark:bg-white/10 dark:text-white">
      
      {/* Button Text */}
      <span className="z-10 pr-2 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
        Follow for More
      </span>
      
      {/* Hover Background Circle */}
      <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
      
      {/* Instagram Icon - Fixed with proper gradient */}
      <span className="z-10 flex items-center justify-center rounded-full p-2 transition-all duration-300 group-hover:scale-110 relative bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-5 h-5 fill-white transition-all duration-300"
        >
          <path d="M224.1 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 190c-41.6 0-75-33.4-75-75s33.4-75 75-75 75 33.4 75 75-33.4 75-75 75zm146.4-194.1c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.3-44.2-98.4-98.5-98.5H100.1C45.8 65.6 1.7 109.7 1.6 164v183c.1 54.3 44.2 98.4 98.5 98.5h247.9c54.3-.1 98.4-44.2 98.5-98.5V164zM398.8 347.1c0 41.3-33.5 74.8-74.8 74.9H124c-41.3 0-74.8-33.5-74.9-74.8V164.8c0-41.3 33.5-74.8 74.8-74.9h199.9c41.3 0 74.8 33.5 74.9 74.8v182.3z"/>
        </svg>
      </span>
    </a>

        </div>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="max-w-[1200px] text-center">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              The true measure of a man is not in his achievements alone, but in
              his ability to pursue what he loves with unwavering dedication.
              Interests and hobbies are the sparks that light up the routine of
              life, reminding him that joy lies in creation, exploration, and
              curiosity.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intrests;
