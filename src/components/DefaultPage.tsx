type Props = {
    children: JSX.Element | JSX.Element[];
}

export const DefaultPage = ({ children } : Props) => {
    return (
        <div className='px-40'>
            {children}
        </div>
    );
};
