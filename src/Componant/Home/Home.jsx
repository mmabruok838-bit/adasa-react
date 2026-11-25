
import React from 'react'
import { Link } from 'react-router-dom'

const articles = [
  {
    category: 'تقنيات',
    title: 'أساسيات إعدادات الكاميرا: مثلث التعريض الثلاثي',
    description: 'تعلم كيف تتحكم في الضوء وتحصل على صور احترافية باستخدام إعدادات الكاميرا.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
    author: 'فريق عدسة',
    time: '7 دقائق للقراءة',
  },
  {
    category: 'تقنيات',
    title: 'قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية',
    description: 'تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مميزة.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
    author: 'آية محمود',
    time: '9 دقائق للقراءة',
  },
  {
    category: 'معدات',
    title: 'تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك',
    description: 'اكتشف تقنيات التصوير بالهاتف للحصول على نتائج مذهلة دون الحاجة إلى كاميرا.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    author: 'جمال عبدالله',
    time: '8 دقائق للقراءة',
  },
]

const categories = [
  { name: 'إضاءة', count: '3 مقالات', icon: 'fa-lightbulb' },
  { name: 'بورتريه', count: '3 مقالات', icon: 'fa-user' },
  { name: 'مناظر طبيعية', count: '2 مقالة', icon: 'fa-mountain-sun' },
  { name: 'تقنيات', count: '5 مقالات', icon: 'fa-sliders' },
  { name: 'معدات', count: '3 مقالات', icon: 'fa-camera' },
]

export default function Home() {
  return (
    <div dir="rtl" className="bg-[#080808]  text-white overflow-hidden">

     
      <section className="relative min-h-[650px] flex flex-col items-center justify-center text-center px-5 pt-20">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(130,35,10,0.13),transparent_65%)] pointer-events-none"></div>

        <div className="relative z-10">

          <span className="inline-flex items-center gap-2 border border-orange-500/30 bg-orange-500/10 text-orange-400 rounded-full px-5 py-2 text-sm mb-8">
            <i className="fa-solid fa-camera"></i>
            مرحباً بك في عدسة
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold leading-tight mb-7">
           <span className='text-white'> اكتشف </span><span className="text-orange-500">فن</span>
            <br /><span className='text-white'>            التصوير الفوتوغرافي</span>          </h1>

          <p className="text-gray-400 text-base md:text-xl leading-9  mx-auto mb-9">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br/>التصوير          </p>
            <br/>
          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/contant"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full  transition-transform duration-300 hover:-translate-y-2"
            >
              استكشف المقالات
              <i className="fa-solid  transition-transform duration-300 hover:-translate-x-2 fa-arrow-left mr-2"></i>
            </Link>

            <a
              href="#featured"
              className="text-gray-300 hover:text-orange-400 flex items-center gap-2 px-5 py-3 transition"
            >
              اعرف المزيد
              <i className="fa-regular fa-circle-play"></i>
            </a>

          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 mt-20">

          <div>
            <i className="fa-solid fa-newspaper text-orange-500 text-2xl mb-3"></i>
            <h3 className="text-3xl text-orange font-bold">+50</h3>
            <p className="text-gray-500 text-sm mt-2">مقالة </p>
          </div>

          <div>
            <i className="fa-solid fa-users text-orange-500 text-2xl mb-3"></i>
            <h3 className="text-3xl text-orange font-bold">+10ألف</h3>
            <p className="text-gray-500 text-sm mt-2">قارئ </p>
          </div>

          <div>
           
            <i class="fa-solid fa-folder-open  text-orange-500 text-2xl mb-3"></i>

            <h3 className="text-3xl text-orange font-bold">4</h3>
            <p className="text-gray-500 text-sm mt-2">تصنيفات </p>
          </div>

          <div>
           
            <i class="fa-solid fa-pen-nib text-orange-500 text-2xl mb-3"></i>

            <h3 className="text-3xl text-orange font-bold">6</h3>
            <p className="text-gray-500 text-sm mt-2"> كاتب</p>
          </div>

        </div>
      </section>

      
      <section id="featured" className="max-w-7xl mx-auto px-5 py-24">

        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-white text-6xl font-bold"> مقالات مختارة</span><br/><br/>
            <span className="  text-gray-400  "> محتوى منتقى لبدء رحلة تعلمك</span>
          </div>

          <Link to="/contant" className="text-white bg-orange p-3 rounded-2xl transition-transform duration-300 hover:-translate-y-2   text-sm">عرض الكل
            <i className="fa-solid fa-arrow-left mr-2"></i>
          </Link>
        </div>

        <div className="">

          <div className="rounded-2xl  hover:border-orange-500/50 transition duration-300 flex  overflow-hidden bg-[#111] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop"
              alt="تصوير المناظر الطبيعية"
              className="w-1/2    h-72 object-cover"
            />

            <div className="p-7">
              <span className="bg-orange-500/10  text-orange-400 rounded-full px-4 py-1 text-xs">
                مناظر طبيعية
              </span>

              <h3 className="text-xl md:text-3xl font-bold text-white mt-5 mb-4">
                
إتقان تصوير الساعة الذهبية: دليل شامل
              </h3>

              <p className="text-gray-400 leading-8 text-sm">
                تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.


              </p>

              <div className="flex justify-between items-center mt-7 text-sm">
                <span className="text-gray-400">
                  <i className="fa-regular fa-clock text-orange-500 ml-2"></i>
                  10 دقائق للقراءة
                </span>
                <Link to="/contant" className="text-orange-500 hover:text-orange-300">
                  اقرأ المقال ←
                </Link>
              </div>
            </div>
          </div>
            <br/>
          <div className="rounded-2xl hover:border-orange-500/50 transition duration-300 flex overflow-hidden bg-[#111] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
              alt="التصوير الفوتوغرافي"
              className="w-1/2 h-72 object-cover"
            />

            <div className="p-7">
              <span className="bg-orange-500/10 text-orange-400 rounded-full px-4 py-1 text-xs">
                نصائح تصوير
              </span>

              <h3 className="text-xl md:text-3xl font-bold text-white mt-5 mb-4">أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
              </h3>

              <p className="text-gray-400 leading-8 text-sm">
                اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.


              </p>

              <div className="flex justify-between items-center mt-7 text-sm">
                <span className="text-gray-400">
                  <i className="fa-regular fa-clock text-orange-500 ml-2"></i>
                  8 دقائق للقراءة
                </span>
                <Link to="/contant" className="text-orange-500 hover:text-orange-300">
                  اقرأ المقال ←
                </Link>
              </div>
            </div>
          </div>
           <br/>
          <div className="rounded-2xl hover:border-orange-500/50 transition duration-300 flex overflow-hidden bg-[#111] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
              alt="التصوير الفوتوغرافي"
              className="w-1/2 h-72 object-cover"
            />

            <div className="p-7">
              <span className="bg-orange-500/10 text-orange-400 rounded-full px-4 py-1 text-xs">
                نصائح تصوير
              </span>

              <h3 className="text-xl md:text-2xl font-bold text-white mt-5 mb-4">دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف
              </h3>

              <p className="text-gray-400 leading-8 text-sm">استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.

              </p>

              <div className="flex justify-between items-center mt-7 text-sm">
                <span className="text-gray-400">
                  <i className="fa-regular fa-clock text-orange-500 ml-2"></i>
                  8 دقائق للقراءة
                </span>
                <Link to="/contant" className="text-orange-500 hover:text-orange-300">
                  اقرأ المقال ←
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    
      <section className="max-w-7xl mx-auto px-5 py-20">

        <div className="text-center mb-14">
          <span className="text-orange-500 text-sm">التصنيفات <br/><span className='text-white text-4xl font-bold'>استكشف حسب الموضوع
</span></span>
            <br/>
          <p className="text-gray-400 mt-4">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {categories.map((category, index) => (
            <Link
              to="/contant"
              key={index}
              className="group bg-[#111] border border-white/10 rounded-2xl p-7 text-center hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-700 hover:border-orange-500 transition duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-xl group-hover:bg-white/20 group-hover:text-white transition">
                <i className={`fa-solid ${category.icon}`}></i>
              </div>

              <h3 className="font-bold mt-5">{category.name}</h3>
              <p className="text-gray-500 text-xs mt-2 group-hover:text-white/80">
                {category.count}
              </p>
            </Link>
          ))}

        </div>
      </section>

    
      <section className="max-w-7xl mx-auto px-5 py-24">

        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-orange-500 text-sm "> الأحدث
 <br/><span className='text-white text-4xl font-bold'>أحدث المقالات
</span><br/><br/><span className='text-gray-500' >محتوى جديد طازج من المطبعة

</span></span>

          </div>

          <Link to="/contant" className="text-orange-500 hover:text-orange-300 text-sm">
            جميع المقالات ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs px-4 py-2 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-gray-500 text-xs mb-4">
                  <i className="fa-regular fa-clock ml-2 text-orange-500"></i>
                  {article.time}
                </p>

                <h3 className="text-lg font-bold leading-8 group-hover:text-orange-500 transition">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mt-3">
                  {article.description}
                </p>

                <div className="flex justify-between items-center mt-7 pt-5 border-t border-white/10">
                  <span className="text-gray-400 text-sm">
                    <i className="fa-solid fa-user-circle text-orange-500 ml-2"></i>
                    {article.author}
                  </span>

                  <Link to="/contant" className="text-orange-500 hover:text-orange-300">
                    اقرأ المزيد ←
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-5 py-20">

        <div className="relative overflow-hidden bg-gray-900 from-[#24100b] to-[#111] border por  rounded-3xl p-9 md:p-16 text-center">

          <div className="w-16 h-16 mx-auto bg-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-7">
            <i className="fa-solid fa-envelope"></i>
          </div>

          <h2 className='color'>اشترك في نشرتنا الإخبارية</h2>
          <br/>
          <p className="text-gray-400 ">
            اشترك ليصلك كل جديد في عالم التصوير الفوتوغرافي، وأحدث المقالات والنصائح الاحترافية.
          </p>
            <br/>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('شكراً لاشتراكك في نشرة عدسة!')
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-xl font-bold transition cursor-pointer"
            >
              اشترك الآن
            </button>
          </form>

        </div>
      </section>

    </div>
  )
}

