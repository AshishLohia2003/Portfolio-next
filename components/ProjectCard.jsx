import Image from "next/image";
import Link from "next/link";

import svs from "@/public/work/SVSPlayer.png";
import text_summarizer from "@/public/work/Text_summarizer.png";
import Sheets from "@/public/work/sheet.png";
import portfolio from "@/public/work/logo.png";
import Savior from "@/public/work/Savior.png";
import ICE2 from "@/public/work/ICE2.png";
import ondc from "@/public/work/ondc.png";
import jsontree from "@/public/work/jsontree.png";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: svs,
      title: "SVS Player",
      description: "Display SVS File on Browser",
      link: "https://digi-scan-svs.vercel.app/",
      target: "_self",
      bgcolor: "wheat",
    },
    {
      id: 2,
      image: text_summarizer,
      title: "Text Summarizer",
      description: "AI enhanced text summarizer",
      link: "",
      target: "_self",
      bgcolor: "#debbeb"
    },
    {
      id: 3,
      image: Sheets,
      title: "Spreadsheet",
      description: "A Google Spreadsheet Clone",
      link: "",
      target: "_self",
      bgcolor: "#45FFCA"
    },
    {
      id: 4,
      image: ondc,
      title: "Ondc",
      description: "ondc",
      link: "https://ondc-frontend-eight.vercel.app/",
      target: "_blank",
      bgcolor: "pink"
    },
    {
      id: 5,
      image: nike,
      title: "Nike Store",
      description: "Nike Store Landing Page",
      link: "",
      target: "_blank",
      bgcolor: ""
    },
    {
      id: 6,
      image: jsontree,
      title: "Json Tree",
      description: "A Visualizer to visualize json data",
      link: "",
      target: "_blank",
      bgcolor: "aliceblue"
    },
    {
      id: 7,
      image: portfolio,
      title: "Portfolio",
      description: "Portfolio made using Next.js and Tailwind CSS",
      link: "",
      target: "",
      bgcolor: "#d8dee5"
    },
    {
      id: 8,
      image: Savior,
      title: "Savior",
      description: "Expense Manager",
      link: "https://savior-1.netlify.app/",
      target: "_self",
      bgcolor: "#31E1F7"
    },
    {
      id: 9,
      image: ICE2,
      title: "Class Website",
      description: "Class website Of ICE(2025 Batch), Nsut",
      link: "https://ice-2.netlify.app/",
      target: "_self",
      bgcolor: "#00FFAB"
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
                style={{background: `${project.bgcolor}`, height:"200px"}}
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
