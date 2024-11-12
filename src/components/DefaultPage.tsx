type Props = {
    children: JSX.Element | JSX.Element[];
}

export const DefaultPage = ({ children } : Props) => {
    return (
        <div className='px-5 lg:px-40'>
            {children}
        </div>
    );
};
