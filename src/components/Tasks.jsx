import { IoMdNotifications } from 'react-icons/io';
import Slider from "react-slick";

function Tasks() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bg-card rounded-2xl p-3'>
            <section className='flex justify-between w-[80%] m-auto items-center'>
                <h3>لائحة المهام</h3>
                <article className='flex gap-4 items-center text-2xl'>
                    <IoMdNotifications />
                    <i className='border-2 border-primary border-solid rounded-full h-12 w-12 text-xs flex items-center justify-center'>person</i>
                </article>
            </section>
            <p className='text-center text-primary my-3'>الطبات المقبولة</p>
            <div className='tasks'>
                <Slider {...settings}>
                    {
                        Array(5).fill('')?.map((el) => {
                            return <div key={Math.random()}>
                                <section  className='text-white m-3'>
                                    <div className='bg-primary rounded-3xl p-5'>
                                        <article className='flex items-center justify-end gap-4'>
                                            <h2>بطاقة شخصية</h2>
                                            <div className='rounded-full border border-solid border-secondary w-10 h-10 flex items-center justify-center'>
                                                100%
                                            </div>
                                        </article>
                                        <article className='flex justify-between my-2'>
                                            <div>
                                                <p>
                                                    رقم الموبايل
                                                    <br />
                                                    000000000
                                                </p>
                                                <p>
                                                    كود الطلب
                                                    <br />
                                                    000000000
                                                </p>
                                            </div>
                                            <div>
                                                <i className='m-auto border-8 border-primary/30 border-solid rounded-full h-12 w-12 text-xs flex items-center justify-center'>person</i>
                                                <h4>company Name</h4>
                                            </div>

                                        </article>
                                    </div>
                                </section>
                            </div>

                        })
                    }

                </Slider>
            </div>
        </div>
    );
}

export default Tasks;


