import meImage from '@/src/assets/images/me.webp';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";

export const HeroSection = () => {
  const t = useTranslations('Hero');
  return (
    <div className='py-32 md:py-52 lg:py-72 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none'>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <div className='size-[2020px] hero-ring'></div>
      </div>
      <div className="container">
        <div className='flex flex-col items-center'>
          <div className='size-24 bg-zinc-700 rounded-full inline-flex items-center justify-center overflow-hidden'>
            <Image src={meImage} alt={t('imageAlt')} />
          </div>
          {/* <div className='bg-zinc-950 border border-zinc-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Open to Full-Time Roles</div>
          </div>*/}
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>{t('title')}</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            {t('description')}
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <a href="#projects">
            <button className='inline-flex items-center gap-2 border border-white/15 hover:bg-white/5 hover:cursor-pointer px-6 h-12 rounded-xl transition duration-300'>
              <span className='font-semibold'>{t('exploreProjects')}</span>
              <FaArrowDown className='size-4 text-white' />
            </button>
          </a>
          <a href="mailto:hello@czimbercsik.com">
            <button className='btn-light'>
              <span>👋</span>
              <span className='font-semibold'>{t('letsConnect')}</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
