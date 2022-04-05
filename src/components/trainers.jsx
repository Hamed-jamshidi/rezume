import React from 'react'

function Trainers() {
  return (
      <>
    <section className="p-5 awards">
      <div className="container-fluid">
        {/* title */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <h1 className="text-white">افتخارات</h1>
            <div className="underline"></div>
            <p className="text-muted 1h-2 h5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
 <div className="carousel slide " data-ride="carousel" id='trainers-carousel'>
     <ol  className="carousel-indicators list-unstyled">
         <li data-target="#traniners-carousel" data-slide-to="0"></li>
         <li data-target="#traniners-carousel" data-slide-to="1"></li>
         <li data-target="#traniners-carousel" data-slide-to="2"></li>
     </ol>
     <div className="carousel-inner">
         {/* slide */}
         <div className="carousel-item active text-center">
             <img src="" alt=""/>
         </div>
     </div>
 </div>
        </div>
        </section>
        </>
         )
}

export default Trainers