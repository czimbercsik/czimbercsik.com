import mapImage from "@/src/assets/images/map.jpg";
import smileMemoji from "@/src/assets/images/memoji-smile.webp";
import { Card } from "@/src/components/Card";
import { CardHeader } from "@/src/components/CardHeader";
import { SectionHeader } from "@/src/components/SectionHeader";
import { getCompanies } from "@/src/data/Companies";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { HobbiesSection } from "./Hobbies";

export const AboutSection = async () => {
  const t = await getTranslations('About');
  const companies = await getCompanies();

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-rows-2">
            <Card className="h-80 relative order-3 md:col-span-2 md:order-1 lg:order-3">
              <Image src={mapImage} alt="Map" className="h-full w-full object-cover" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-zinc-950/30">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-300 to-sky-500 -z-20 animate-ping animation-duration-[2s]" />
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-300 to-sky-500 -z-10" />
                <Image src={smileMemoji} alt="Smiling Memoji" className="size-20" />
              </div>
            </Card>
            <Card className="h-80 order-1 md:col-span-5 md:order-3 lg:order-2 lg:col-span-3 lg:row-span-2 lg:h-auto">
              <CardHeader title={t('Experiences.title')} />
              <div className="px-6 md:px-8">
                {companies.map(company => (
                  <div key={company.name + company.from} className="mt-4 md:mt-5 flex items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <div className='size-14 bg-zinc-700 rounded-full inline-flex items-center justify-center shrink-0'>
                        <Image src={company.logo} alt={`${company.name} logo`} />
                      </div>
                      <div>
                        <div className="font-semibold">{company.name}</div>
                        <div className="text-xs max-w-32 md:max-w-sm lg:max-w-full md:text-xs lg:text-base text-white/50">{company.position}</div>
                      </div>
                    </div>
                    <div className="text-xs lg:text-base text-white/50">{company.from} - {company.to ? company.to : t('Experiences.Companies.present')}</div>
                  </div>
                ))}
              </div>
            </Card>
            <HobbiesSection />
          </div>
        </div>
      </div>
    </div>
  )
};
