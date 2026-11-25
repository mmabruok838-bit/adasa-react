
import React, { useMemo, useState } from "react";

const articles = [
  {
    id: 1,
    title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
    category: "مناظر طبيعية",
    description: "اكتشف أسرار تصوير الطبيعة والمناظر الخلابة، وتعلم كيف تحصل على صور احترافية.",
    content: "تصوير المناظر الطبيعية من أجمل أنواع التصوير الفوتوغرافي. للحصول على صورة مميزة، اهتم بتوقيت التصوير، واتجاه الضوء، واختيار التكوين المناسب. جرّب التصوير وقت الشروق والغروب للحصول على ألوان وإضاءة رائعة.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    author: "أحمد محمد",
    date: "15 نوفمبر 2026",
    readTime: "8 دقائق",
  },
  {
    id: 2,
    title: "أسرار تصوير البورتريه باحترافية",
    category: "بورتريه",
    description: "تعلم كيفية تصوير الأشخاص وإظهار التفاصيل والتعبيرات بطريقة احترافية.",
    content: "تصوير البورتريه يعتمد على اختيار الإضاءة المناسبة والتركيز على العينين والتعامل مع خلفية الصورة. استخدم فتحة عدسة واسعة للحصول على خلفية ضبابية جميلة.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900",
    author: "محمد علي",
    date: "12 نوفمبر 2026",
    readTime: "6 دقائق",
  },
  {
    id: 3,
    title: "أساسيات إعدادات الكاميرا: مثلث التعريض الثلاثي",
    category: "تقنيات",
    description: "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO.",
    content: "مثلث التعريض يتكون من ثلاثة عناصر أساسية: فتحة العدسة، وسرعة الغالق، وحساسية ISO. التحكم في هذه العناصر يساعدك على تحديد كمية الضوء التي تصل إلى مستشعر الكاميرا.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900",
    author: "عمر خالد",
    date: "10 نوفمبر 2026",
    readTime: "10 دقائق",
  },
  {
    id: 4,
    title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
    category: "تقنيات",
    description: "تعرف على قاعدة الأثلاث والخطوط leading lines والتوازن البصري.",
    content: "التكوين هو الطريقة التي ترتب بها العناصر داخل الصورة. من أشهر قواعد التكوين قاعدة الأثلاث، والخطوط الموجهة، والتوازن بين العناصر.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    author: "سارة أحمد",
    date: "8 نوفمبر 2026",
    readTime: "7 دقائق",
  },
  {
    id: 5,
    title: "تصوير الهاتف المحمول: صور احترافية بهاتفك",
    category: "معدات",
    description: "اكتشف طرق الاستفادة من كاميرا هاتفك والتقاط صور رائعة.",
    content: "يمكنك التقاط صور رائعة باستخدام الهاتف المحمول عن طريق الاهتمام بالإضاءة وتنظيف العدسة وتثبيت الهاتف واختيار زاوية التصوير المناسبة.",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=900",
    author: "يوسف محمود",
    date: "5 نوفمبر 2026",
    readTime: "5 دقائق",
  },
  {
    id: 6,
    title: "أفضل طرق تصوير الطعام بطريقة احترافية",
    category: "إضاءة",
    description: "تعلم كيفية استخدام الضوء والزوايا لإظهار جمال الأطعمة.",
    content: "تصوير الطعام يحتاج إلى إضاءة ناعمة وخلفية مناسبة وترتيب العناصر بشكل جذاب. الضوء الطبيعي بجانب النافذة اختيار ممتاز للمبتدئين.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
    author: "نور أحمد",
    date: "2 نوفمبر 2026",
    readTime: "6 دقائق",
  },
  {
    id: 7,
    title: "كيف تختار الكاميرا المناسبة لك؟",
    category: "معدات",
    description: "دليل مبسط لاختيار الكاميرا المناسبة حسب احتياجاتك وميزانيتك.",
    content: "قبل شراء الكاميرا حدد نوع التصوير الذي تفضله والميزانية المتاحة. قارن بين حجم المستشعر والعدسات وسهولة الاستخدام.",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=900",
    author: "أحمد محمد",
    date: "1 نوفمبر 2026",
    readTime: "9 دقائق",
  },
  {
    id: 8,
    title: "أسرار التصوير الليلي والحصول على صور واضحة",
    category: "إضاءة",
    description: "تعرف على إعدادات الكاميرا المناسبة للتصوير في الإضاءة الضعيفة.",
    content: "في التصوير الليلي استخدم حامل كاميرا ثابتًا، واضبط سرعة الغالق وISO حسب المشهد. جرب التصوير بصيغة RAW للحصول على مرونة أكبر في التعديل.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
    author: "محمد علي",
    date: "28 أكتوبر 2026",
    readTime: "7 دقائق",
  },
  {
    id: 9,
    title: "تصوير الشوارع: احكِ قصة من خلال صورتك",
    category: "مناظر طبيعية",
    description: "تعلم كيف تلتقط اللحظات اليومية وتحولها إلى صور مميزة.",
    content: "تصوير الشوارع يعتمد على ملاحظة التفاصيل واللحظات العفوية. حاول أن تكون مستعدًا دائمًا لالتقاط اللحظة المناسبة.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900",
    author: "سارة أحمد",
    date: "25 أكتوبر 2026",
    readTime: "5 دقائق",
  },
];

const categories = [
  "الكل",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];

export default function Contant() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState("grid");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "الكل" ||
        article.category === activeCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const currentArticles = filteredArticles.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage
  );

  function changeCategory(category) {
    setActiveCategory(category);
    setPage(1);
    setSelectedArticle(null);
  }

  function changeSearch(value) {
    setSearch(value);
    setPage(1);
    setSelectedArticle(null);
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#080808] text-white pb-20">

      
      <section className="px-5 pt-20 pb-14 text-center">
        <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 mb-6">مدونتنا
        </span>
          <br/>
         <span className="text-orange-400 text-5xl font-bold"><span className="text-white text-5xl font-bold">استكشف </span>مقالاتنا<br/><span className="text-gray-500 text-sm ">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</span></span>
        

   
      </section>

      <div className="max-w-7xl mx-auto px-5">

        
        <section className="mb-10 flex justify-between items-center">
                      <div className="relative w-full md:max-w-md">
            <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

            <input
              type="text"
              value={search}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="ابحث عن مقال..."
              className="w-full bg-[#151515] border border-[#292929] rounded-xl py-4 pr-12 pl-4 text-white outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => changeCategory(category)}
                className={`px-5 py-3 rounded-full text-sm transition duration-300 border ${
                  activeCategory === category
                    ? "bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-600/20"
                    : "bg-[#151515] border-[#292929] text-gray-400 hover:border-orange-500 hover:text-orange-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>


    
            
          <section className="flex justify-between items-center">
                      <div className="flex justify-between items-center mb-7">
          <h2 className="text-xl font-bold">
            {selectedArticle ? "تفاصيل المقال" : "أحدث المقالات"}
          </h2>

          <span className="text-sm text-gray-500">
             عرض 28 مقالات




          </span>
        </div>
            <div className="flex items-center gap-3">
            

            <button
              onClick={() => setView("grid")}
              className={`w-11 h-11 rounded-lg ${
                view === "grid"
                  ? "bg-orange-600 text-white"
                  : "bg-[#151515] text-gray-400"
              }`}
              aria-label="عرض شبكي"
            >
              <i className="fa-solid fa-border-all"></i>
            </button>

            <button
              onClick={() => setView("list")}
              className={`w-11 h-11 rounded-lg ${
                view === "list"
                  ? "bg-orange-600 text-white"
                  : "bg-[#151515] text-gray-400"
              }`}
              aria-label="عرض قائمة"
            >
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
          </section>
          <br/>

      
        {selectedArticle ? (
          <article className="bg-[#111] border border-[#252525] rounded-2xl overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 md:h-[450px] object-cover"
            />

            <div className="p-6 md:p-10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-orange-500 hover:text-orange-400 mb-8"
              >
                <i className="fa-solid fa-arrow-right ml-2"></i>
                العودة إلى المقالات
              </button>

              <span className="block text-orange-500 text-sm mb-4">
                {selectedArticle.category}
              </span>

              <h1 className="text-2xl md:text-4xl font-bold leading-relaxed mb-6">
                {selectedArticle.title}
              </h1>

              <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-8">
                <span>
                  <i className="fa-regular fa-user ml-2"></i>
                  {selectedArticle.author}
                </span>

                <span>
                  <i className="fa-regular fa-calendar ml-2"></i>
                  {selectedArticle.date}
                </span>

                <span>
                  <i className="fa-regular fa-clock ml-2"></i>
                  {selectedArticle.readTime}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-10">
                {selectedArticle.content}
              </p>

              <p className="text-gray-400 leading-9 mt-5">
                استمر في التعلم والتجربة، فالتصوير مهارة تتطور بالممارسة
                واكتشاف زوايا جديدة ورؤية التفاصيل بطريقة مختلفة.
              </p>
            </div>
          </article>
        ) : (

          <>
           
            {currentArticles.length > 0 ? (
              <div className={
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                  : "flex flex-col gap-5"
              }>
                {currentArticles.map((article) => (
                  <article
                    key={article.id}
                    className={`group bg-[#111] border border-[#242424] rounded-2xl overflow-hidden hover:border-orange-500/50 transition duration-300 ${
                      view === "list"
                        ? "flex flex-col md:flex-row"
                        : ""
                    }`}
                  >
                    <div className={
                      view === "list"
                        ? "md:w-1/3 h-56 md:h-auto overflow-hidden"
                        : "h-56 overflow-hidden"
                    }>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-orange-500 text-sm mb-4">
                        {article.category}
                      </span>

                      <h3 className="text-xl font-bold leading-8 mb-4 group-hover:text-orange-400 transition">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-7 mb-6">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto border-t border-[#292929] pt-5">
                        <div className="text-xs text-gray-500 flex flex-wrap gap-3">
                          <span>
                            <i className="fa-regular fa-user ml-1"></i>
                            {article.author}
                          </span>

                          <span>
                            <i className="fa-regular fa-clock ml-1"></i>
                            {article.readTime}
                          </span>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedArticle(article);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="text-orange-500 text-sm hover:text-orange-300"
                        >
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-[#111] rounded-2xl border border-[#242424]">
                <i className="fa-solid fa-magnifying-glass text-4xl text-gray-600 mb-5"></i>
                <h3 className="text-xl font-bold mb-3">
                  لم يتم العثور على مقالات
                </h3>
                <p className="text-gray-500">
                  جرب البحث بكلمات مختلفة أو اختر تصنيفًا آخر.
                </p>
              </div>
            )}

            
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-14">

                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-11 h-11 rounded-lg bg-[#151515] border border-[#292929] text-gray-400 disabled:opacity-30 hover:border-orange-500"
                  aria-label="الصفحة السابقة"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => setPage(number)}
                    className={`w-11 h-11 rounded-lg transition ${
                      page === number
                        ? "bg-orange-600 text-white"
                        : "bg-[#151515] border border-[#292929] text-gray-400 hover:border-orange-500"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-11 h-11 rounded-lg bg-[#151515] border border-[#292929] text-gray-400 disabled:opacity-30 hover:border-orange-500"
                  aria-label="الصفحة التالية"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

