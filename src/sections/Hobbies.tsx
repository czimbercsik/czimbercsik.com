'use client'
import { hobbies } from "@/src/data/Hobbies";
import { motion } from "motion/react";
import { useTranslations } from 'next-intl';
import { useRef } from "react";
import { Card } from "../components/Card";
import { CardHeader } from "../components/CardHeader";

export const HobbiesSection = () => {
    const constraintRef = useRef(null);
    const t = useTranslations('About.Hobbies');
    
    return (
        <Card className="h-80 flex flex-col order-2 md:col-span-3 lg:col-span-2">
            <CardHeader 
                title={t('title')} 
                description={t('description')} 
                className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map(hobby => (
                <motion.div 
                key={hobby.title}
                className="inline-flex items-center gap-2 px-3 md:px-6 bg-linear-to-r from-blue-300 to-sky-500 rounded-full py-1 md:1.5 absolute"
                style={{
                    left: hobby.left,
                    top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                dragElastic={0.2}
                >
                <span className="font-medium text-zinc-950">{t(hobby.title)}</span>
                <span>{hobby.emoji}</span>
                </motion.div>
            ))}
            </div>
        </Card>
    )
}
