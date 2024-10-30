import GetSun from '@/components/sections/GetSun';
import PickSun from '@/components/sections/PickSun';
import Make from '@/components/sections/MakeSomething';
import Personalized from '@/components/sections/Personalized';
import Mobile from '../../public/MobilePurple.svg';
import MobileYellow from '../../public/MobileYellow.svg';
import Allpower from '@/components/sections/Allpower';
import Logo from '../../public/Logo Container.png';
import Image from 'next/image';

const PersonalizedPurple = {
    upTitle: 'services',
    title: 'Personalize services', 
    subtitle: 'Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.',
    services: [
        { title: 'Et mauris', description: 'Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.' },
        { title: 'Eget sit', description: 'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.' },
        { title: 'Imperdiet pellentesque', description: 'Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.' },
        { title: 'Non libero', description: 'Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.' },
    ],
};

const PersonalizedYellow = {
    upTitle: 'System features',
    title: 'Powerful features', 
    subtitle: 'Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.',
    services: [
        { title: 'Erat sit', description: 'Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.' },
        { title: 'Ullamcorper arcu', description: 'Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.' },
        { title: 'Et pellentesque', description: 'Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.' },
        { title: 'Amet egestas', description: 'Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ' },
    ],
};

export default function Home() {   

    return (
        <main className='overflow-x-hidden'>

            <section className='px-4 2xl:px-20' >
                <GetSun />
            </section>

            <section className='py-12 lg:py-20'>
                <PickSun />
            </section>

            <section className='py-12 lg:py-20' >
                <Personalized imageSrc={Mobile} mainClassName='pr-4' imgClassName='width-[599px] h-[1079px]' upTitle={PersonalizedPurple.upTitle} contentClassName={'justify-center'} title={PersonalizedPurple.title} subtitle={PersonalizedPurple.subtitle} services={PersonalizedPurple.services} />
            </section>

            <section className='py-12 lg:py-20' >
                <Personalized imageSrc={MobileYellow} imgClassName='width-[599px] h-[1079px] flex justify-end' mainClassName={'flex-row-reverse pl-4'}  upTitle={PersonalizedYellow.upTitle} title={PersonalizedYellow.title} subtitle={PersonalizedYellow.subtitle} services={PersonalizedYellow.services} />
            </section>

            <section className='bg-[#581C87] py-12 lg:py-20'>
                <Make />
            </section>

            <section className='bg-[#7E22CE] py-12 lg:py-20'>
                <Allpower />
            </section>

            <footer className='flex justify-between max-md:flex-col max-md:justify-between max-md:gap-6 bg-[#FFFFFF] h-fit py-6 px-4 md:px-20'>
                <div className='inline-flex items-center gap-6 max-md:flex-col max-md:justify-center'>
                    <Image src={Logo} width={126} height={32} alt='Logo' />
                    <p className='text-base'>@ 2023 Soller, Inc. All rights reserved.</p>
                </div>
                <ul className='inline-flex items-center gap-6 max-md:justify-center'>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Support</li>
                </ul>
            </footer>
            
        </main>
    );
}
