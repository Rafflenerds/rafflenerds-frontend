import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import FeatureCard from "@/components/ui/FeatureCard.tsx";
import iconCard from "@/assets/faq/iconCard.svg";
import iconUser from "@/assets/faq/iconUser.svg";
import iconShield from "@/assets/faq/iconShield.svg";
import iconQuestion from "@/assets/faq/iconQuestion.svg";
import iconStarted from "@/assets/faq/iconStarted.svg";
import iconTicket from "@/assets/faq/iconTicket.svg";
import FaqAccordion from "@/components/FaqAccordion.tsx";
import {DefaultPage} from "@/components/DefaultPage.tsx";


export default function Faq(){
    return (
        <DefaultPage>

            <Header/>
            <h1 className='font-block text-primary mb-10 text-2xl mt-20'>How can we help you?</h1>
            <Separator className='bg-primary h-0.5'/>
            {/*todo: idk if a search is practical*/}

            <div className='gap-8 grid grid-cols-2 m-20'>
                <FeatureCard icon={iconStarted} title='Getting started' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
                <FeatureCard icon={iconUser} title='User Account' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
                <FeatureCard icon={iconTicket} title='Raffle Concern' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
                <FeatureCard icon={iconShield} title='Security Option' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
                <FeatureCard icon={iconCard} title='Payment Gateway' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
                <FeatureCard icon={iconQuestion} title='How Raffles Work?' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'/>
            </div>
            <h2 className='font-block text-primary mb-10'>Frequently Asked Questions</h2>
            <div className='mb-10 grid gap-5 w-3/5 m-auto'>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
                <FaqAccordion question='Lorem ipsum dolor sit amet' answer='Lorem ipsum dolor sit amet'/>
            </div>
            {/*todo: populate email*/}
            <p className='text-white font-regular'>Didn&apos;t find your answer? Contact our <a href='mailto:' className='text-primary'>customer service</a></p>
            <Footer/>
        </DefaultPage>
    )
}