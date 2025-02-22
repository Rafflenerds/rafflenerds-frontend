type Props = {
    children: JSX.Element | JSX.Element[];
}

export const DefaultPage = ({ children } : Props) => {
    return (
        <div className='px-5 lg:px-10 max-w-screen-2xl mx-auto'>
            {children}
        </div>
    );
};
