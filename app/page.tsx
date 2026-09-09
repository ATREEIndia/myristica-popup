import Image from "next/image";
import { info } from "./Data/Info";

export default function Home() {
  return (
    <div className="relative w-full">
      <div className="w-full h-screen relative">
        <Image
          src="/Swamps-Infographic7.jpg"
          alt="swamp"
          fill
          loading="eager"
          priority

          className="block w-auto h-screen object-cover"
        />
      </div>





      {/* Hotspot 1 */}
      {info.map((item, i) => (
        <div key={i}
          className="group absolute"
          style={{
            left: item.position.left,
            top: item.position.top,
          }}
        >
          <button
            className="
        relative
        w-4 h-4
        rounded-full
        bg-white
        border-2 border-gray-500
        shadow-lg
        cursor-pointer
      "
          >
            <span className="
        absolute
        inset-0
        rounded-full
        bg-white
        animate-ping
        opacity-50
      " />
          </button>

          {/* Popup */}
          <div className={`
      absolute
      ${Number(item.position.left.split("%")[0]) > 40 ? "right-full" : "left-full"}
      ${Number(item.position.top.split("%")[0]) > 40 ? "-translate-y-[50%]" : ""}
      ${Number(item.position.top.split("%")[0]) > 70 ? "-translate-y-[70%]" : ""}
      ${Number(item.position.top.split("%")[0]) > 75 ? "-translate-y-[100%]" : ""}
      
      mb-4
      
      hidden
      group-hover:block
      group-focus-within:block
      w-[20vw]
      rounded-lg
      bg-white
      
      shadow-xl
      z-20
    `}>

            {/* <Image
              src={item.img_url}
              alt=""
              width={200}
              height={500}
              className="w-auto h-auto"

            /> */}
            <img src={item.img_url} alt="" />




            <div className="p-4 px-8">
              <h3 className="font-bold text-xl text-green-700">{item.title}</h3>
              <i className="text-green-700 text-sm">{item.sciName}</i>
              <div className=" mt-1 text-sm">
                {item.content}
              </div>
            </div>

          </div>
        </div>

      ))}





      {/* <div
    className="group absolute"
    style={{
      left: '47.1%',
      top: '57%',
    }}
  >
    <button
      className="
        relative
        w-4 h-4
        rounded-full
        bg-white
        border-2 border-black
        shadow-lg
        cursor-pointer
      "
      aria-label="Spotlight"
    >
      <span className="
        absolute
        inset-0
        rounded-full
        bg-white
        animate-ping
        opacity-50
      " />
    </button>

    <div className="
      absolute
      left-1/2
      top-full
      mt-4
      -translate-x-1/2
      hidden
      group-hover:block
      group-focus-within:block
      w-64
      rounded-lg
      bg-white
      p-4
      shadow-xl
      z-20
    ">
      <h3 className="font-bold">Spotlight</h3>
      <p className="text-sm mt-1">
        Information about the light in the photograph.
      </p>
    </div>
  </div> */}
    </div>
  );
}
