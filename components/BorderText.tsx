

export const BorderText = (props: {text: string}) => {
    return (
        <div className='border border-primary rounded-xl text-secondary py-3 px-4 text-5xl font-mono'>
            {props.text}
        </div>
    );
};
