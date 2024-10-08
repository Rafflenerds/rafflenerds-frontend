import buttonHeart from "@/assets/buttonHeart.svg";
import buttonShare from "@/assets/buttonShare.svg";
import Image from "next/image";

export const LikeAndShareButtons = () => {
    return (
        <div className='flex justify-evenly my-auto'>
            <a href=''><Image src={buttonHeart} alt='Heart' className='w-10 mr-3'/></a>
            <a href=''><Image src={buttonShare} alt='Share' className='w-10'/></a>
        </div>
    );
};
