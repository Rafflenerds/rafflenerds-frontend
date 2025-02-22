import { BorderText } from '@/components/BorderText.tsx';
import { cn } from '@/lib/utils';

export const Countdown = (props: {days: number, hours: number, minutes: number, className?: string}) => {
    const day0 = Math.floor(props.days / 10)
    const day1 = props.days % 10

    const hour0 = Math.floor(props.hours / 10)
    const hour1 = props.hours % 10

    const min0 = Math.floor(props.minutes / 10)
    const min1 = props.minutes % 10
    return (
        <div className={cn('!mb-5', props.className)}>
            <div className='flex gap-2 font-mono justify-center mb-2'>
                <BorderText text={day0.toString()}/>
                <BorderText text={day1.toString()}/>
                <p className='text-primary my-auto text-5xl mx-3'>:</p>
                <BorderText text={hour0.toString()}/>
                <BorderText text={hour1.toString()}/>
                <p className='text-primary my-auto text-5xl mx-3'>:</p>
                <BorderText text={min0.toString()}/>
                <BorderText text={min1.toString()}/>
            </div>

            <div className='flex justify-between'>
                <p className='ml-16 text-secondary font-mono'>Days</p>
                <p className='text-secondary font-mono'>Hours</p>
                <p className='mr-12 text-secondary font-mono'>Minutes</p>
            </div>
        </div>
    );
};
