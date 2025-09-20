import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a ref={rydeRef}
              href="https://e-shopping-app-7fs2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
               className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/shopping-app.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
              🛒 Smart Shopping Made Simple with a Sleek, Full-Stack eCommerce Web App
              </h2>
              <p className="text-white-50 md:text-xl">
              Developed a full-featured eCommerce website using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
          
              <a
    href="https://mini-linkedin-uk4c.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project"
    ref={libraryRef}
  >
    <div className="image-wrapper bg-[#FFEFDB]">
      <img src="/images/mini.png" alt="Luxury Perfume Website" />
    </div>
    <h2>Mini linkedin website</h2>
  </a>

  <a
    href="https://online-ccode-editor.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="project"
    ref={ycDirectoryRef}
  >
    <div className="image-wrapper bg-[#FFE7EB]">
      <img src="/images/code-editor.png" alt="Task Management App" />
    </div>
    <h2>Online Code Editor</h2>
  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;