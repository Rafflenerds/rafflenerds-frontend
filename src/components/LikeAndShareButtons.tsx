import buttonHeart from "@/assets/buttonHeart.svg";
import buttonShare from "@/assets/buttonShare.svg";

export const LikeAndShareButtons = () => {
    return (
        <div className='flex justify-evenly my-auto'>
            <a href=''><img src={buttonHeart} alt='Heart' className='w-10 mr-3'/></a>
            <a href=''><img src={buttonShare} alt='Share' className='w-10'/></a>
        </div>
    );
};
