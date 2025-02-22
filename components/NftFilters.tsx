import { cn } from '@/lib/utils.ts';
import PrimaryButton from '@/components/PrimaryButton.tsx';

export const NftFilters = (props: {className?: string}) => {
    return (
        <div className={cn(props.className, 'text-left')}>
            <p className='font-block text-primary text-sm mb-4'>Status</p>

            <div className='flex gap-2 justify-center flex-wrap'>
                <PrimaryButton name='All' active={true}/>
                <PrimaryButton name='Active' active={false}/>
                <PrimaryButton name='Ended' active={false}/>
                <PrimaryButton name='New' active={false}/>
                <PrimaryButton name='Ending Soon' active={false}/>
            </div>

            {/*<p className='font-block text-primary text-sm mb-4 mt-8'>Traits</p>*/}
            {/*<TraitDropdown name='Background' options={['Red', 'Green']}/>*/}
            {/*<TraitDropdown name='Clothes' options={[]}/>*/}
            {/*<TraitDropdown name='Earing' options={[]}/>*/}
            {/*<TraitDropdown name='Eyes' options={[]}/>*/}
            {/*<TraitDropdown name='Fur' options={[]}/>*/}
            {/*<TraitDropdown name='Hat' options={[]}/>*/}
            {/*<TraitDropdown name='Mouth' options={[]}/>*/}
        </div>
    );
};
