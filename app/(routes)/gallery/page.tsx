import React from 'react'
import Image from 'next/image'

type Props = {}

const GalleryPage = (props: Props) => {

  const Data = [
    {
    
            name: "Green Tourmaline",
            images: "/g1.jpeg", 
            desc: "Green Tourmaline, with its lush and vibrant hues, is a gemstone known for promoting creativity and balance. It resonates with the heart chakra, offering a sense of rejuvenation, renewal, and emotional healing. Its deep green color is a symbol of nature's beauty and vitality.",
    },
    {
    
            name: "Blue green Tourmaline",
            images: "/g2.jpeg", 
            desc: "Blue-Green Tourmaline, a captivating fusion of oceanic blue and refreshing green, evokes the tranquility of tropical waters. This gemstone is thought to bring inner peace and clear communication. Its stunning colors inspire serenity and harmonious self-expression.",
    },
    {
    
            name: "Spessartite Fanta Color",
            images: "/g3.jpeg", 
            desc: "Spessartite, often referred to as 'Fanta Color' due to its resemblance to the famous orange soda, is a gemstone that radiates warmth and energy. Its fiery orange tones symbolize passion and creativity, making it a vibrant choice for jewelry that exudes enthusiasm and zest for life.",
    },
    {
    
            name: "Cobalt Blue Spinel",
            images: "/g4.jpeg", 
            desc: "Cobalt Blue Spinel, with its deep and brilliant blue shades, is a gemstone associated with wisdom and insight. It's often chosen for its intense color, reminiscent of the deep sea or a starry night sky, making it a symbol of depth, trust, and confidence.",
    },
    {
    
            name: "Sperssartite",
            images: "/g5.jpeg", 
            desc: "Spessartite, in its pure orange splendor, represents enthusiasm and vitality. This gemstone's vivid hue brings a burst of energy and joy to those who wear it. Its vibrant color is a testament to the vibrancy of life and the pursuit of happiness.",
    },
    {
    
            name: "Natural Pink Morganite",
            images: "/g6.jpeg", 
            desc: "Natural Pink Morganite, with its soft and delicate pink tones, is a gemstone known for its connection to love and compassion. It's often chosen for its romantic and gentle appearance, symbolizing tenderness, emotional healing, and the nurturing qualities of the heart.",
    },
]
  return (
    <div className="flex flex-wrap justify-center"> {/* Use flex-wrap to allow items to wrap into a grid */}
      {Data.map((item, index) => {
        return (
          <div key={index} className=" w-auto lg:w-1/2 justify-center items-center p-4"> {/* Adjust column width based on screen size */}
            <div className="flex-col md:flex  justify-center items-center p-6 bg-slate-700 rounded-3xl text-slate-200">
              <div className='md:flex flex-col justify-center items-center'><Image src={item.images} alt="gem" width={254} height={84} className="rounded-3xl" />
              <div><h1 className="text-3xl font-bold m-3">{item.name}</h1>
              <p className="text-sm m-3">{item.desc}</p></div></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryPage