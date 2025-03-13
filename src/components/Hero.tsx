import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-6 pb-6 pt-[63px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Gambar */}
            <div className="h-full">
            <img 
                src="https://preview.redd.it/s1-spoilers-what-is-your-opinion-of-silco-v0-9jgndqriq2za1.jpg?width=640&crop=smart&auto=webp&s=10221a76d6317775eb681492b7c3df47b3bcc7c4" 
                alt="Silco" 
                className="w-full h-full object-cover"
            />
            </div>

            {/* Teks */}
            <div className="text-left md:px-6 whitespace-normal">
                <h1 className="text-4xl md:text-7xl font-normal mb-6 leading-normal">If you’re reading this, call me Syam</h1>
                <p className="text-base md:text-xl leading-normal">
                    You’ve gotten this far and now I consider us friends. It’s nice to meet you! I'm a designer passionate about creating visuals that tell stories and designing brand experiences that improve everyday lives, especially within the direct-to-consumer market. Previously, I was a designer at Herman-Scheer. Currently, I'm a freelance brand designer and creative lead at Hyper. 

                    I come from a very multidisciplinary background (I studied sustainable environmental design at UC Berkeley and took some wacky classes - I know how to calculate the rate at which energy flows through rooms, how to sustainably retrofit old buildings, and how to make maps with programs like ArcGIS!) but my specialties lie within brand design.
                    <br /><br />
                    I'm a big fan of powerful branding and communication. I taught a class on Brand Identity and Graphic Design at UC Berkeley! During my free time, you can find me learning how to use gouache paints, filming my friends, or eating chicken wings. Please do not hesitate to talk to me about all of the above, or anything else. Check my Instagram @edgykatrina for more. I also started a YouTube channel where I make fun videos. Thanks for stopping by. I hope you enjoyed my website. If you didn't, here's a little something special to make up for it.
                </p>
            </div>
        </div>
    </section>

  );
};

export default Hero;