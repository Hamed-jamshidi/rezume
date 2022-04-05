import React from 'react'

function Cards() {
  return (
      <>
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
        {/* end of title */}
    <div className='row'>
        <div className="col-lg-4 col-sm-6 my-5">
           <div className="card border-0 card-shadow">
               <img src="images/hamed.jpeg" alt="" className="card-img" style={{height:"350px"}} />
               <div className="card-img-overlay">
                   <h5 className=" heading p-2">برنامه تمرینی</h5>
               </div>
          </div> 
        </div>
        <div className="col-lg-4 col-sm-6 my-5">
           <div className="card card-shadow">
               <img src="images/hamed.jpeg" alt="" className="card-img"style={{height:"350px"}} />
               <div className="card-img-overlay">
                   <h5 className=" heading p-2">رژیم غذایی</h5>
               </div>
          </div> 
        </div>
        <div className="col-lg-4 col-sm-6 my-5">
           <div className="card card-shadow">
               <img src="images/hamed.jpeg" alt="" className="card-img"style={{height:"350px"}} />
               <div className="card-img-overlay">
                   <h5 className=" heading p-2"> رژیم غذاییی</h5>
               </div>
          </div> 
        </div>
    </div>
    </>
  )
}

export default Cards