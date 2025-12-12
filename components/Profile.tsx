import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfbf9] py-16 px-6 md:px-12 border-b border-stone-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Photo Column */}
        <div className="md:col-span-4 lg:col-span-5 relative">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-sm grayscale contrast-125 filter">
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Bonita Rizka D" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-between">
          
          <div className="mb-12 flex justify-between items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-stone-400 mb-2">BONITA</h2>
              <h3 className="text-xl md:text-2xl font-medium tracking-wide text-stone-800">RIZKA D.</h3>
            </div>
            <div className="hidden md:block">
               <span className="text-xs uppercase border border-stone-300 rounded-full px-3 py-1 text-stone-500">
                 Indonesia, March 1997
               </span>
            </div>
          </div>

          <div className="mb-12">
             <p className="text-sm md:text-base leading-relaxed text-stone-600 max-w-xl text-justify">
               Three years as a graphic designer/layouter have been a wild ride. I've tackled tons of challenges and learned so much more than just design. From translating ideas to crafting designs that resonate with our target audience, and pushing creative boundaries within tight frames and guidelines — it's been incredibly valuable experience.
             </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            
            {/* Education */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Education</h4>
              <p className="text-sm text-stone-600">Institut Teknologi Sepuluh Nopember</p>
              <p className="text-xs text-stone-400 italic">Industrial Design | GPA 3.27 of 4</p>
            </div>

            {/* Language */}
             <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Language</h4>
              <p className="text-sm text-stone-600 flex justify-between"><span>Indonesia</span> <span className="text-stone-400">Mother tongue</span></p>
              <p className="text-sm text-stone-600 flex justify-between"><span>English</span> <span className="text-stone-400">Communicative</span></p>
            </div>

            {/* Skills */}
            <div className="col-span-2">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Skills</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-stone-600">
                 <ul className="space-y-1">
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>After Effect</li>
                 </ul>
                 <ul className="space-y-1">
                    <li>Figma</li>
                    <li>Canva</li>
                    <li>Capcut</li>
                 </ul>
                 <ul className="space-y-1">
                    <li>Adaptive</li>
                    <li>Teamwork</li>
                    <li>Time Management</li>
                 </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-span-2 border-t border-stone-200 pt-6 mt-2">
              <h4 className="font-bold text-lg mb-4 uppercase tracking-wider">Contact</h4>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm text-stone-600">
                <a href="mailto:bonitarizkad@gmail.com" className="hover:text-black hover:underline transition-colors">bonitarizkad@gmail.com</a>
                <a href="#" className="hover:text-black hover:underline transition-colors">linkedin.com/in/bonitarizkad</a>
                <a href="#" className="hover:text-black hover:underline transition-colors">behance.net/bonitarizkad</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;