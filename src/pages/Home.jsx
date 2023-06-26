

import Cards from '../components/HomeComponents/Cards';
import Search from '../components/HomeComponents/Search'
import Tasks from '../components/HomeComponents/Tasks';
function Home() {

    return (
        <div>
            <Search />
            <div className='mt-1 mb-[50px] p-5 lg:px-0 flex flex-col lg:flex-row gap-5'>
                <section className='lg:w-[32%]'>
                    <Cards />
                </section>
                <section className='lg:w-[32%]'>
                    <Tasks />
                </section>
                <section  className='lg:w-[32%]'>
                    s
                </section>
            </div>
        </div>
    );
}

export default Home;