import React from 'react'

function Gallery() {
  return (
      <>
      <sectoin className="py-5">
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
  {/* end of title */} 
<ul className='list-inline text-center my-5'>
    <li className="list-inline-item gallery-list-item active-item">
       همه<span className="text-muted mx-3">/</span>
    </li>
    <li data-filter="cat1" className="list-inline-item gallery-list-item ">
       دسته یک <span className="text-muted mx-3">/</span>
    </li>
    <li data-filter="cat2" className="list-inline-item gallery-list-item ">
       دسته دو<span className="text-muted mx-3">/</span>
    </li>
    <li data-filter="cat3" className="list-inline-item gallery-list-item ">
       دسته سه
    </li>
</ul>
<div className="container-fluid">
    <div className="d-flex flex-wrap justify-content-center">
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
        <div className="p-1">
            <img width="400" height="230" src="images/hamed.jpeg" alt=""/>
        </div>
    </div>
</div>




          </div>
          
      </sectoin>
  
  </>
  )
}

export default Gallery