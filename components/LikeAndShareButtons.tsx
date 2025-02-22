import ButtonHeart from '@/public/assets/buttonHeart.svg';
import ButtonShare from '@/public/assets/buttonShare.svg';

export const LikeAndShareButtons = () => {
    return (
        <div className='flex justify-evenly my-auto'>
            <a href=''><ButtonHeart alt='Heart' className='w-10 mr-3'/></a>
            <a href=''><ButtonShare alt='Share' className='w-10'/></a>
        </div>
    );
};
