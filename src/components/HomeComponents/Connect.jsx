
import { AiOutlineMessage } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

import { Button, Input } from 'antd';
const { TextArea } = Input
function Connect() {
    return (

        <>

            <main>
                <div className='flex gap-3 justify-center'>
                    <AiOutlineMessage className='text-3xl' />
                    <h2 className='mb-5'>الدردشة</h2>
                </div>
                <div>

                    <section className='border border-secondary border-solid rounded-md p-5'>
                        {
                            Array(3)?.fill('')?.map(el => {
                                return <article key={Math.random()} className='text-end shadow-2xl p-2 border border-secondary border-solid mb-3 rounded-3xl'>
                                    النص....
                                </article>
                            })
                        }
                    </section>
                    <section className='text-center'>
                        <TextArea suffix='saeed' autoSize={{ minRows: 5 }} placeholder='write message here' allowClear className='mt-5' />
                        <Button className='mt-3'>ارسال</Button>
                    </section>
                </div>
            </main>
            <main className='mt-10'>
                <div className='flex gap-3 justify-center mt-3 items-center'>
                    <div>
                        <MdNotifications className='text-3xl' />
                    </div>
                    <h2>إرسال اشعار</h2>
                </div>
                <div>
                    <section className='text-center'>
                        <TextArea suffix='saeed' autoSize={{ minRows: 5 }} placeholder='write message here' allowClear className='mt-5' />
                        <div className='flex gap-3 justify-center'>
                            <Button type='primary' className='mt-3'>ارسال مع ابطال</Button>
                            <Button type='primary' className='mt-3'>ارسال بدون ابطال</Button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Connect;