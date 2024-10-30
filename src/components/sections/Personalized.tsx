import Image, { StaticImageData } from "next/image";

interface Service {
    title: string;
    description: string;
}

interface PersonalizedProps {
    imageSrc: StaticImageData | string;
    imgClassName?: string;
    upTitle: string;
    title: string;
    subtitle: string;
    services: Service[];
    headingColor?: string;
    mainClassName?: string;
    contentClassName?: string;
}

export default function Personalized({
    imageSrc,
    imgClassName,
    upTitle,
    title,
    subtitle,
    services,
    mainClassName,
    contentClassName
}: PersonalizedProps) {
    return (
        <div className={`flex max-md:flex-col-reverse max-xl:gap-16 ${mainClassName}`}>
            <div className={imgClassName}>
                <Image width={599} height={1079} src={imageSrc} alt={"mobile"} />
            </div>
            <div className={`flex flex-col max-xl:px-4 px-20 max-md:text-center max-w-[1180px] max-h-[610px] ${contentClassName}`}>
                <div className="mb-12">
                    <p className="font-medium text-xl text-[#D97706]" >{upTitle}</p>
                    <h2 className="font-extrabold text-3xl md:text-6xl mb-6 mt-2">{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <article className="grid grid-cols-2 gap-12 max-w-[1180px] max-h-[610px]">
                    {services.map((service, index) => (
                        <div key={index}>
                            <h3 className="font-bold text-2xl">{service.title}</h3>
                            <p className="text-lg">{service.description}</p>
                        </div>
                    ))}
                </article>
            </div>
        </div>
    );
}
