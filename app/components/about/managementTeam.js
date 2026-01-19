import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const ManagementTeam = () => {
  const teamMembersLevelOne = [
    {
      name: 'Christina Arulraj',
      title: 'Managing Director',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/christy.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/christina-arulraj-24178b60/'
    },
  
    {
      name: 'Mathumitha',
      title: 'Executive Director',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/mathu.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/mathumitha-chennakesavan-027892168/'
    },
       {
      name: 'Trinita Rex',
      title: 'Director of Business Development',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/tirinita.png',
      linkedinUrl: 'https://www.linkedin.com/in/trinita-rex/'
    },

    {
      name: 'Archana Arun',
      title: 'Director',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/archana.JPG',
      linkedinUrl: 'https://www.linkedin.com/company/codeworkai'
    },
    {
      name: 'Senthil Kumar',
      title: 'Manager- Product Delivery',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/senthil.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/senthil-kumar-l-t-26a9b1132/'
    },
  {
      name: 'Sainath Haridass',
      title: 'Vice President of Growth & Delivery',
      imgSrc: 'https://codework-ebook.s3.us-east-1.amazonaws.com/codework-media/our_team/sainathH.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/sainath27/'
    },
  ];

  return (
    <div className="bg-primary text-secondary relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Decorative Elements */}
     
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-secondary">
            <span className="text-secondary">Management </span>
            <span className="text-secondary">
              Team
            </span>
          </h2>
          
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-secondary/90 lg:pl-8 font-light">
                Our management team boasts over <span className="text-secondary font-medium">15 years of experience</span> in driving business excellence and fostering innovation. With a deep understanding of industry trends and a commitment to strategic growth, they ensure <span className="text-secondary font-medium">Codework remains a trusted partner</span> for cutting-edge AI and technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembersLevelOne.map((member, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              {/* Glowing background effect */}
              <div className="absolute -inset-4  rounded-full blur-2xl md:blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Enhanced Card */}
              <div className="relative w-full max-w-sm">
                <div className="  border-2 border-secondary rounded-none p-4 md:p-6  hover:border-secondary/60 transition-all duration-500 group-hover:scale-105 shadow-2xl ">
                  
                  {/* Image Container - REMOVED Position Badge and Corner Decorations */}
                  <div className="relative w-full h-80 md:h-96 bg-primary rounded-none border-2 border-secondary overflow-hidden mb-6">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* LinkedIn Overlay */}
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group absolute inset-0 flex items-center justify-center bg-secondary/80 backdrop-blur-sm text-secondary text-4xl md:text-5xl rounded-none opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-secondary/90"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-300">
                        <FaLinkedin className="text-secondary group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </a>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto mb-3"></div>
                    <p className="text-secondary/80 text-sm md:text-base font-medium">
                      {member.title}
                    </p>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Enhanced Bottom Decoration */}
      <div className="absolute bottom-0 right-0 opacity-20">
        <div className="w-32 h-16 md:w-64 md:h-32 bg-gradient-to-l from-secondary/30 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default ManagementTeam;
