function Template({ data }) {
    const { name, description, link } = data;
    return (
        <div className='template shadow-md mb-5 w-96'>
            <div className='p-5'>
                <h2 className='text-2xl mb-5'>{name}</h2>
                <p className-='font-thin text-xs truncate'>{description}</p>
            </div>
            <button
                href='#'
                className='bg-gray-100 w-full focus:outline-none text-left text-green-400 py-2 px-4'>
                {link}
            </button>
        </div>
    );
}

export default Template;
