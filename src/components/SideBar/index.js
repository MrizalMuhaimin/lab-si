function SideBar ({ children }) {
    return (
        <div className='flex w-full  '>
            <div id='SideMenu-Content' className='relative flex flex-col' style={{ padding: '1.5rem 1rem 1.5rem 1rem' }}>
                <p>coba</p>
                <p>coba</p>
            </div>
            <div className='w-full' id='Content' style={{ transition: 'width 1s ease-in-out' }}>
                {children}
            </div>
        </div>
    )
}

export default SideBar;