import React, { useState } from 'react';

const Pagination = ({ data, RenderComponent, dataLimit, category }) => {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    return (
        <div>
            {/* show the posts, 10 posts at a time */}
            <main className='mt-20 min-h-screen'>
                <h1 className='flex justify-between items-center px-4 w-full'>
                    <span>{category} Templates</span>
                    <span className='font-thin'>{data.length} templates</span>
                </h1>
                <div className='templates w-full grid md:grid-cols-2 gap-y-5 lg:grid-cols-3 justify-items-center py-5 h-full overflow-y-scroll'>
                    {getPaginatedData().map((data, idx) => (
                        <RenderComponent key={idx} data={data} />
                    ))}
                </div>
                <div className='flex justify-between px-10 mt-8 mb-3'>
                    {/* show the pagination
                      it consists of next and previous buttons
                      along with page numbers, in our case, 15 page
                      numbers at a time
                    */}
                    <button
                        onClick={goToPreviousPage}
                        className={`border focus:outline-none border-gray-200 p-2 ${
                            currentPage === 1
                                ? 'cursor-not-allowed disabled'
                                : ''
                        }`}>
                        Previous
                    </button>
                    <span className='flex items-center'>
                        <span className='border border-gray-200 px-4 py-2 mr-3'>
                            {' '}
                            {currentPage}{' '}
                        </span>{' '}
                        of {data.length}
                    </span>
                    <button
                        onClick={goToNextPage}
                        className={`border focus:outline-none border-gray-200 p-2${
                            data.length === 0 ? 'disabled' : ''
                        }`}>
                        Next
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Pagination;
