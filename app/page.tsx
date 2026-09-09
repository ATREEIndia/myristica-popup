// import Image from "next/image";
// import { info } from "./Data/Info";
// import { infox } from "./Data/infox";

// export default function Home() {
//   return (
//     <div className="relative w-full">
//       {/* <div className="w-full h-screen relative">
//         <Image
//           src="/Swamps-Infographic7.jpg"
//           alt="swamp"
//           fill
//           loading="eager"
//           priority
          

//           className="block w-auto h-screen object-cover brightness-65"
//         />
//       </div> */}
//        <Image
//     src="/Swamps-Infographic.jpg"
//     alt="Annual Report 2025–2026"
//     width={775}
//     height={1000}
//     className="block w-full h-auto"
//   />





//       {/* Hotspot 1 */}
//       {infox.map((item, i) => (
//         <div key={i}
//           className="group absolute"
//           style={{
//             left: item.position.left,
//             top: item.position.top,
//           }}
//         >
//           <button
//             className="
//         relative
//         animate-pulse
//         w-5 h-5
//         rounded-full
//         bg-yellow-500
//         border-2 border-white
//         shadow-xl
//         cursor-pointer
//       "
//           >
//             <span className="
//         absolute
//         inset-0
//         rounded-full
//         bg-white
//         animate-ping
//         opacity-50
//       " />
//           </button>

//           {/* Popup */}
//           <div className={`
//       absolute
//       ${Number(item.position.left.split("%")[0]) > 40 ? "right-full" : "left-full"}
//       ${Number(item.position.top.split("%")[0]) > 40 ? "-translate-y-[50%]" : ""}
//       ${Number(item.position.top.split("%")[0]) > 70 ? "-translate-y-[70%]" : ""}
//       ${Number(item.position.top.split("%")[0]) > 75 ? "-translate-y-[100%]" : ""}
      
//       mb-4
      
//       hidden
//       group-hover:block
//       group-focus-within:block
//       w-[20vw]
//       rounded-lg
//       bg-white
      
//       shadow-xl
//       z-20
//     `}>

//             {/* <Image
//               src={item.img_url}
//               alt=""
//               width={200}
//               height={500}
//               className="w-auto h-auto"

//             /> */}
//             <img src={item.img_url} alt="" />




//             <div className="p-4 px-8">
//               <h3 className="font-bold text-xl text-green-700">{item.title}</h3>
//               <i className="text-green-700 text-sm">{item.sciName}</i>
//               <div className=" mt-1 text-sm">
//                 {item.content}
//               </div>
//             </div>

//           </div>
//         </div>

//       ))}





//       {/* <div
//     className="group absolute"
//     style={{
//       left: '47.1%',
//       top: '57%',
//     }}
//   >
//     <button
//       className="
//         relative
//         w-4 h-4
//         rounded-full
//         bg-white
//         border-2 border-black
//         shadow-lg
//         cursor-pointer
//       "
//       aria-label="Spotlight"
//     >
//       <span className="
//         absolute
//         inset-0
//         rounded-full
//         bg-white
//         animate-ping
//         opacity-50
//       " />
//     </button>

//     <div className="
//       absolute
//       left-1/2
//       top-full
//       mt-4
//       -translate-x-1/2
//       hidden
//       group-hover:block
//       group-focus-within:block
//       w-64
//       rounded-lg
//       bg-white
//       p-4
//       shadow-xl
//       z-20
//     ">
//       <h3 className="font-bold">Spotlight</h3>
//       <p className="text-sm mt-1">
//         Information about the light in the photograph.
//       </p>
//     </div>
//   </div> */}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { infox } from "./Data/infox";

export default function Home() {
  const [activeItem, setActiveItem] = useState<typeof infox[0] | null>(null);

  return (
    <div className="">
      {/* mobile  */}

       <div className="lg:hidden  w-full min-h-screen bg-stone-900 flex flex-col items-center justify-start">
      {/* Container takes full width on mobile so image stays large */}
      <div 
        className="relative w-full max-w-5xl"
        style={{ aspectRatio: "775 / 1000" }}
      >
        <Image
          src="/Swamps-Infographic.jpg"
          alt="Annual Report 2025–2026"
          fill
          priority
          sizes="100vw"
          className="object-contain block"
          onClick={() => setActiveItem(null)}
        />

        {/* Hotspots overlay */}
        {infox.map((item, i) => {
          const isSelected = activeItem?.title === item.title;

          return (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: item.position.left,
                top: item.position.top,
              }}
            >
              {/* 44x44px touch target area for easy tapping on mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItem(isSelected ? null : item);
                }}
                aria-label={item.title || "Hotspot"}
                className="relative flex items-center justify-center w-11 h-11 focus:outline-none"
              >
                <span className="relative animate-pulse w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 border-2 border-white shadow-xl">
                  <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-50" />
                </span>
              </button>

              {/* Desktop-only floating tooltip */}
              {isSelected && (
                <div
                  className={`
                    hidden sm:block absolute
                    ${Number(item.position.left.split("%")[0]) > 50 ? "right-full mr-2" : "left-full ml-2"}
                    ${Number(item.position.top.split("%")[0]) > 50 ? "-translate-y-full" : "top-0"}
                    w-64 rounded-lg bg-white shadow-2xl z-30 p-4 text-gray-900
                  `}
                >
                  {item.img_url && (
                    <img src={item.img_url} alt="" className="w-full h-auto rounded-md mb-2" />
                  )}
                  <h3 className="font-bold text-base text-green-700">{item.title}</h3>
                  {item.sciName && <i className="text-green-700 text-xs block">{item.sciName}</i>}
                  <p className="mt-1 text-xs">{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile-only Bottom Sheet Drawer */}
      {activeItem && (
        <div 
          className="sm:hidden fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl p-5 shadow-2xl border-t border-gray-200 max-h-[45vh] overflow-y-auto"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-green-700">{activeItem.title}</h3>
              {activeItem.sciName && <i className="text-green-700 text-sm block">{activeItem.sciName}</i>}
            </div>
            <button 
              onClick={() => setActiveItem(null)}
              className="p-1 text-gray-500 font-bold text-xl"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {activeItem.img_url && (
            <img src={activeItem.img_url} alt="" className="w-full h-36 object-cover rounded-lg mb-3" />
          )}
          <p className="text-sm text-gray-800">{activeItem.content}</p>
        </div>
      )}
    </div>

    {/* laptop */}

     <div className=" hidden w-full min-h-screen bg-[#f9f8f3] lg:flex justify-center">
      {/* Takes 100% width, height expands proportionally with native scrolling */}
      <div 
        className="relative w-full"
        style={{ aspectRatio: "775 / 1000" }}
      >
        <Image
          src="/Swamps-Infographic.jpg"
          alt="Annual Report 2025–2026"
          fill
          priority
          sizes="100vw"
          className="object-contain block"
        />
      

        {/* Hotspots */}
        {infox.map((item, i) => (
          <div
            key={i}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: item.position.left,
              top: item.position.top,
            }}
          >
            <button
              aria-label={item.title || "Hotspot"}
              className="
                relative
                animate-pulse
                w-4 h-4 sm:w-5 sm:h-5
                rounded-full
                bg-yellow-500
                border-2 border-white
                shadow-xl
                cursor-pointer
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-white
                  animate-ping
                  opacity-50
                "
              />
            </button>

            {/* Popup */}
            <div
              className={`
                absolute
                ${Number(item.position.left.split("%")[0]) > 50 ? "right-full mr-2" : "left-full ml-2"}
                ${Number(item.position.top.split("%")[0]) > 50 ? "-translate-y-full" : "-translate-y-0"}
                hidden
                group-hover:block
                group-focus-within:block
                w-[220px] sm:w-[280px]
                rounded-lg
                bg-white
                shadow-2xl
                z-30
              `}
            >
              {item.img_url && (
                <img src={item.img_url} alt="" className="w-full h-auto rounded-t-lg block" />
              )}
              <div className="p-3">
                <h3 className="font-bold text-base text-green-700">{item.title}</h3>
                {item.sciName && (
                  <i className="text-green-700 text-xs block">{item.sciName}</i>
                )}
                <div className="mt-1 text-xs text-gray-800">{item.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



    
    </div>
   
    
  );
}





// import Image from "next/image";
// import { infox } from "./Data/infox";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen bg-[#f9f8f3] flex justify-center">
//       {/* Takes 100% width, height expands proportionally with native scrolling */}
//       <div 
//         className="relative w-full"
//         style={{ aspectRatio: "775 / 1000" }}
//       >
//         <Image
//           src="/Swamps-Infographic.jpg"
//           alt="Annual Report 2025–2026"
//           fill
//           priority
//           sizes="100vw"
//           className="object-contain block"
//         />
      

//         {/* Hotspots */}
//         {infox.map((item, i) => (
//           <div
//             key={i}
//             className="group absolute -translate-x-1/2 -translate-y-1/2"
//             style={{
//               left: item.position.left,
//               top: item.position.top,
//             }}
//           >
//             <button
//               aria-label={item.title || "Hotspot"}
//               className="
//                 relative
//                 animate-pulse
//                 w-4 h-4 sm:w-5 sm:h-5
//                 rounded-full
//                 bg-yellow-500
//                 border-2 border-white
//                 shadow-xl
//                 cursor-pointer
//               "
//             >
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   rounded-full
//                   bg-white
//                   animate-ping
//                   opacity-50
//                 "
//               />
//             </button>

//             {/* Popup */}
//             <div
//               className={`
//                 absolute
//                 ${Number(item.position.left.split("%")[0]) > 50 ? "right-full mr-2" : "left-full ml-2"}
//                 ${Number(item.position.top.split("%")[0]) > 50 ? "-translate-y-full" : "-translate-y-0"}
//                 hidden
//                 group-hover:block
//                 group-focus-within:block
//                 w-[220px] sm:w-[280px]
//                 rounded-lg
//                 bg-white
//                 shadow-2xl
//                 z-30
//               `}
//             >
//               {item.img_url && (
//                 <img src={item.img_url} alt="" className="w-full h-auto rounded-t-lg block" />
//               )}
//               <div className="p-3">
//                 <h3 className="font-bold text-base text-green-700">{item.title}</h3>
//                 {item.sciName && (
//                   <i className="text-green-700 text-xs block">{item.sciName}</i>
//                 )}
//                 <div className="mt-1 text-xs text-gray-800">{item.content}</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


