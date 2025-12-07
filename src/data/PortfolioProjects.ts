import htd from "@/src/assets/images/htd.png";

export const getPortfolioProjects = async () => {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations('Projects');
  
  return [
    {
      title: t('Htd.title'),
      results: [
        { title: t("Htd.description1") },
        { title: t("Htd.description2") },
        { title: t("Htd.description3") },
      ],
      githubLink: "https://github.com/czimbercsik/Human-Tower-Defense",
      image: htd,
    }
  ] as const;
};