import kukaLogo from "@/src/assets/logos/kuka.webp";

export const getCompanies = async () => {
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations('About.Experiences.Companies');
  
  return [
    {
      name: "KUKA",
      logo: kukaLogo,
      from: 2025,
      to: null,
      position: t("KukaIntern.positionTitle"),
    },
  ] as const;
}