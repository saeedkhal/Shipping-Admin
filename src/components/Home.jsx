

import Cards from './Cards';
import Search from './Search'
import Tasks from './Tasks';
function Home() {

    return (
        <div>
            <Search />
            <div className='mt-1 mb-[50px] p-5 lg:px-0 flex flex-col lg:flex-row gap-5 justify-between'>
                <section className='lg:max-w-[32%]'>
                    <Cards />
                </section>
                <section className='lg:max-w-[32%]'>
                    <Tasks />
                </section>
                <section  className='lg:max-w-[32%]'>
                    s
                </section>
            </div>
        </div>
    );
}

export default Home;