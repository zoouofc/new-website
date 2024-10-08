
// TODO: Update this object as required when new executives are elected

// Importing headshots
import president from "../../assets/execs/president.png"
import academic from "../../assets/execs/academic.png";
import academic2 from "../../assets/execs/academic2.png";
import events from "../../assets/execs/events.png";
import events2 from "../../assets/execs/events2.png";
import external from "../../assets/execs/external.png";
import external2 from "../../assets/execs/external2.png";
import finance from "../../assets/execs/finance.png";
import finance2 from "../../assets/execs/finance2.png";
import internal from "../../assets/execs/internal.png";

export const execInfo = [
  {
    execPosition: "President",
    execEmail: "president@zooengg.ca",
    execName: "Yashpreet Singh",
    execBio: "Hello! My name is Yashpreet, and I'm entering my final year of Electrical Engineering. I've been part of ZOO for the better part of my academic journey and have always loved being part of this close-knit community. This year, I'm excited to serve as the president of ZOO, and I look forward to ensuring everyone has the best experience possible. Feel free to message or email me if you have any concerns or just want to say hi!",
    image: president
  },
  {
    execPosition: "Co-VP Academic",
    execEmail: "academic@zooengg.ca",
    execName: "Jun Chao",
    execBio: "Hi everyone, I'm Jun, a third-year Electrical and Computer Engineering student, and I'm excited to be one of the Co-VPs Academics! I look forward to working with the ZOO council to create more academic events such as research nights, workshops, and other academic (or not) related events! If you see me in the hallway, feel free to come up and say hi. I love meeting people, and you can catch me at random events if there's food involved!",
    image: academic
  },
  {
    execPosition: "Co-VP Academic",
    execEmail: "academic@zooengg.ca",
    execName: "Simon Xu",
    execBio: "Hello! I'm Simon Xu, entering my final year of Electrical Engineering at the University of Calgary. Throughout my academic journey, I've been deeply involved in ZOO, a community I cherish. This year, alongside Jun Chao, I have the privilege of serving as Co-VP Academic for ZOO, where we are dedicated to enhancing our academic programs and ensuring everyone has a fantastic experience. Feel free to reach out via message or email with any questions or just to say hello!",
    image: academic2
  },
  {
    execPosition: "Co-VP Events",
    execEmail: "events@zooengg.ca",
    execName: "Aaryan Deshpande",
    execBio: "Hi! My name is Aaryan, I'm currently a third-year Electrical and Computer Engineering student, and I'm excited to take on the role of VP Events this year! I'm excited to bring the electrical and software community closer together with some exciting events, and I definitely look forward to bringing students with more opportunities to meet their peers, network, and have fun! If you ever have any questions, comments or suggestions, you can always reach out to our email and I'll be happy to chat. Cheers to a great year!",
    image: events
  },
  {
    execPosition: "Co-VP Events",
    execEmail: "events@zooengg.ca",
    execName: "Cody Diao",
    execBio: "Hello! My name is Cody, I'm currently a third-year Electrical Engineering student, and I'm thrilled to take on the role of VP Events this year! I'm excited about making an impact through the events we'll be hosting, by providing diverse opportunities for networking and fun. As part of ZOO, we're committed to bringing engaging activities and events to the community. If you have any questions or event suggestions, please feel free to reach out. Cheers to a fun and exciting year together!",
    image: events2
  },
  {
    execPosition: "Co-VP External",
    execEmail: "external@zooengg.ca",
    execName: "Arshiya Shaheen",
    execBio: "Hello everyone, my name is Arshiya and I'm going into my third year of Electrical Engineering. I'm super excited to be one of your Vice President Externals this year, and bring a diverse range of career oppurtunites for software and electrical engineering students! If you see me around don't hesitate to say hi (I love meeting new people :D)",
    image: external2
  },
  {
    execPosition: "Co-VP External",
    execEmail: "external@zooengg.ca",
    execName: "Muhammad Rafiuzzaman",
    execBio: "Hey there! I'm Rafi, and I'm thrilled to take on the role of one of your Vice President Externals this year! As I gear up for my third year in electrical engineering, I'm eager to channel my passion and expertise into this exciting opportunity. At ZOO, I'm all about fostering meaningful connections and partnerships with external stakeholders. Whether it's collaborating with industry leaders, seeking out sponsorship opportunities, or representing our organization in the wider community, I'm dedicated to ensuring that our initiatives thrive and make a lasting impact.",
    image: external
  },
  {
    execPosition: "Co-VP Finance",
    execEmail: "finance@zooengg.ca",
    execName: "Albert Tri",
    execBio: "Hello! My name is Albert, and I'm entering my third year of Electrical and Computer Engineering. I'm excited to take on the role of Vice President of Finance and look forward to this amazing opportunity to work with other team members this year. I will be working with the team to ensure that our finances run smoothly so that everyone can have the best experience possible. Feel free to reach out if you have any questions or concerns. See you around! 🙂",
    image: finance
  },
  {
    execPosition: "Co-VP Finance",
    execEmail: "finance@zooengg.ca",
    execName: "Tanveer Parhar",
    execBio: "Hi! I'm Tanveer, a third-year in Electrical and Computer Engineering, and I'm psyched to be part of the Zoo Council as Co-VP Finance! I'm looking forward to supporting the rest of the VPs with their events this year, and getting us lots of money for community outreach! I also have a bit of a bouldering addiction, so there's a very good chance you'll see me at the UofC wall. Don't be shy to say hi and ask me any questions if you see me around, I'm always happy to meet new people!",
    image: finance2
  },
  {
    execPosition: "VP Internal",
    execEmail: "internal@zooengg.ca",
    execName: "Ravindith Singarachchige",
    execBio: "Hello everyone! My name is Ravindith, but feel free to call me Ravi. I'm excited to serve as your VP Internal. As a Software Engineering student entering my third year, I'm passionate about technology and building a strong community. My goal is to increase our outreach and social media presence, ensuring everyone stays engaged with zoo. Don't hesitate to stop me for a chat if you see me around; I'm always eager to meet new people and hear your ideas. Looking forward to an amazing year together!",
    image: internal
  },
];

// TODO: Update this object as required when new commissioners are recruited or roles are added/removed
export const commInfo = [
  {
    commRole: "Academic Events Commissioner",
    commDescription:
      "In this role, you will coordinate with VP Academic to plan and host various academic-oriented events.",
    commNames: [
      "Akila Fernando",
      "Damon Mazurek",
      "Yu Xiang Sun",
      "Zehra Zaidi",
    ],
  },
  {
    commRole: "Artistic Commissioner",
    commDescription:
      "In this role, you will be responsible for creating various media for Society events & merchandise.",
    commNames: ["Ines Rosito", "Rostom Halouane"],
  },
  {
    commRole: "ENGG/Frosh Week Director",
    commDescription:
      "In this role, you will direct the Society's involvement in Frosh and ENGG week. Includes recruiting, participation, etc.",
    commNames: ["Sofi Tapias"],
  },
  {
    commRole: "Marketing Commissioner",
    commDescription:
      "In this role, you will assist the VP Internal with their duties of inter- and intra-Society communication.",
    commNames: ["Muskan Fatima", "Nooran Ahmed",],
  },
  {
    commRole: "Social Events Commissioner",
    commDescription:
      "In this role, you will coordinate with VP Events to plan and host various social-oriented events.",
    commNames: ["Yu Xiang Sun"],
  },
  {
    commRole: "Sponsorship Commissioner",
    commDescription:
      "In this role, you will coordinate with VP External & Finance to ensure that the financial needs of the Society are met by securing sponsorships.",
    commNames: [
      "Maheen Raza",
      "Marya Rachdi",
      "Yassin Shehata"
    ],
  },
  {
    commRole: "Trip Director",
    commDescription:
      "In this role, you will be responsible for assisting in the planning of various trips for the Society. Includes Silicon Valley Trip, CUSEC, etc.",
    commNames: [],
  },
  {
    commRole: "Webmaster",
    commDescription:
      "As Webmaster, you are the core individual responsible for maintaining all the Society's technologies, which include a website, webserver, fileserver, Council emails, and more.",
    commNames: ["Ines Rosito"],
  },
  {
    commRole: "ZOO Representative",
    commDescription:
      "Reps act as a bridge between the Society and its members, announcing major Society events to peers in your year.",
    commNames: [
      "Aadi Chauhan (3rd Year)",
      "Connor Hunszinger (4th Year)",
      "Keshaven Payen (2nd Year)"
    ],
  },
  {
    commRole: "Alumni Representative",
    commDescription:
      "Reps act as a bridge between the Society and alumni. Allowing for the opportunity for Alumni to assist in events like Internship Panels, Tech Fair, Engg Week, etc.",
    commNames: ["Ines Rosito"],
  },
];
