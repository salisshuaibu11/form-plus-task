import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTemplates,
    getFilteredTemplates,
    setTemplatesHeader,
} from './redux/actions/templateActions';
import { SearchIcon } from '@heroicons/react/outline';

import Pagination from './components/Pagination';
import Template from './components/Template';
import Spinner from './components/UI/Spinner';

function App() {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getTemplates());
    // }, [dispatch]);

    const {
        templates: { templates, category },
    } = useSelector((state) => state);
    console.log(category);
    const categories = ['Health', 'E-commerce', 'Agriculture'];

    const filterTemplates = (e) => {
        dispatch(getFilteredTemplates(e.target.value));
    };

    const getCategorySelected = (e) => {
        dispatch(setTemplatesHeader(e.target.value));
    };

    return (
        <div className='p-20'>
            <header className='flex justify-between flex-col lg:flex-row d:flex-row items-center'>
                <div className='flex items-center relative px-2 w-80'>
                    <input
                        type='text'
                        onChange={filterTemplates}
                        className='border text-gray-400 border-gray-200 w-50 w-full py-3 focus:outline-none'
                        placeholder='Search Templates'
                        alt='Search Templated'
                    />
                    <SearchIcon className='w-5 h-5 absolute right-2' />
                </div>
                <div className='flex items-center lg:flex-row flex-col lg:w-2/4 p-3'>
                    <div className='lg:w-50 w-full p-3 text-center lg:text-right'>
                        Sort By:{' '}
                    </div>
                    <form className='gap-2 lg:grid lg:grid-cols-3 px-10 lg:space-y-0 space-y-7 sm:space-y-0 w-screen flex-col lg:flex-row md:flex-row space-x-0'>
                        <div className='border lg:w-50 w-full p-3 border-gray-200'>
                            <select
                                onChange={getCategorySelected}
                                className='focus:outline-none w-full'>
                                <option value='All'>All</option>
                                <option value='Health'>{categories[0]}</option>
                                <option value='E-Commerce'>
                                    {categories[1]}
                                </option>
                                <option value='Agriculture'>
                                    {categories[2]}
                                </option>
                            </select>
                        </div>
                        <div className='border w-full p-3 border-gray-200'>
                            <select className='focus:outline-none w-full'>
                                <option value='All'>Default</option>
                            </select>
                        </div>
                        <div className='border w-full p-3 border-gray-200'>
                            <select className='focus:outline-none w-full'>
                                <option value='All'>Default</option>
                            </select>
                        </div>
                    </form>
                </div>
            </header>
            {templates ? (
                <Pagination
                    data={templates}
                    RenderComponent={Template}
                    category={category}
                    dataLimit={6}
                />
            ) : (
                <Spinner />
            )}
        </div>
    );
}

export default App;
