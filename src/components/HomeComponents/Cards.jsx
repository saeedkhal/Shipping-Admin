import Donuts from '../SharedComponents/Donuts';

function Cards() {
  return (
    <>
      <section className='p-5 border border-secondary border-solid rounded-md max-h-[75vh] lg:max-h-[100vh] overflow-scroll lg:overflow-auto'>
        <article className='bg-primary text-white rounded-3xl px-5 pb-12 pt-3 my-4'>
          <h2 className='text-end'>بطاقة شخصية</h2>
          <p>رقم الموبايل</p>
          <p>000000000</p>
        </article>

        <article className='bg-primary text-white rounded-3xl px-5 pb-12 pt-3 my-4'>
          <h2 className='text-end'>بطاقة شخصية</h2>
          <p>رقم الموبايل</p>
          <p>000000000</p>
          <div className='flex justify-between'>
            <Donuts text={'بلاغ'} num={5} percentage={30} />
            <Donuts text={'طلب'} num={2} percentage={30} />
          </div>
        </article>

        <article className='bg-primary text-white rounded-3xl px-5 pb-12 pt-3 my-4'>
          <div className='flex justify-between'>
            <section>
              <p>رقم الموبايل</p>
              <p>000000000</p>
            </section>
            <h2 className='text-end'>بطاقة شخصية</h2>
          </div>
        </article>
      </section>
    </>
  );
}

export default Cards;
