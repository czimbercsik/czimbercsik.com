import { Card } from "@/src/components/Card";
import { SectionHeader } from "@/src/components/SectionHeader";
import { getPortfolioProjects } from "@/src/data/PortfolioProjects";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export const ProjectsSection = async () => {
  const t = await getTranslations('Projects');
  const portfolioProjects = await getPortfolioProjects();

  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="container">
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, idx) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${idx * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50 items-center">
                        <FaRegCheckCircle className="size-5 md:size-6 shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn-light mt-8">
                      <span>{t("viewSourceCode")}</span>
                      <FiArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
