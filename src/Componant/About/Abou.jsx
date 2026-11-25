
import React from "react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: "fa-solid fa-lightbulb",
    title: "الإبداع",
    description:
      "نؤمن بأن كل صورة تحكي قصة، ونسعى لإلهام المصورين لرؤية العالم من زوايا مختلفة.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "التعلم المستمر",
    description:
      "نشارك المعرفة والخبرات ونساعد كل شخص على تطوير مهاراته في عالم التصوير.",
  },
  {
    icon: "fa-solid fa-heart",
    title: "الشغف",
    description:
      "التصوير بالنسبة لنا أكثر من مجرد هواية، إنه شغف بالتفاصيل والجمال.",
  },
  {
    icon: "fa-solid fa-users",
    title: "المجتمع",
    description:
      "نبني مجتمعًا يجمع محبي التصوير لتبادل الخبرات والأفكار والإلهام.",
  },
];

const authors = [
  {
    name: "أحمد محمد",
    job: "مصور فوتوغرافي",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    description: "متخصص في تصوير المناظر الطبيعية والطبيعة.",
  },
  {
    name: "محمد علي",
    job: "كاتب ومصور",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    description: "يهتم بتعليم أساسيات التصوير وتقنيات الكاميرا.",
  },
  {
    name: "سارة أحمد",
    job: "محررة محتوى",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
    description: "شغوفة بالتصوير الإبداعي وتصوير البورتريه.",
  },
  {
    name: "رامي إبراهيم",
    job: "مصور محترف",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "متخصص في تصوير الشوارع والتصوير الفني.",
  },
];

export default function Abou() {
  return (
    <div dir="rtl" className="bg-[#080808] text-white min-h-screen">

    
      <section className="max-w-7xl mx-auto px-5 pt-24 pb-20">

        <div className="text-center  mb-16">
          <span className="inline-block text-orange-500 bg-orange-500/10 border border-orange-500/20 px-5 py-2 rounded-full text-sm mb-6">
            من نحن
          </span>

            <div className="flex justify-center items-center">
             <h1 className="text-3xl w-1/2  md:text-5xl font-bold leading-relaxed mb-6"><span className="color">            مهمتنا هي</span> <span className="text-orange">الإعلام</span>
            <span className="text-orange-500"> والإلهام</span>    <br/>      <span className="text-gray-400  w-1/2 leading-9 text-base md:text-lg">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.


          </span>
          </h1>
          </div>


        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-7 text-center  ">
            <i className="fa-solid fa-newspaper text-orange-500 text-3xl mb-4"></i>
            <h2 className="text-3xl color2 font-bold mb-2">+120</h2>
            <p className="text-gray-400 text-sm">مقال تعليمي</p>
          </div>

          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-7 text-center ">
            <i className="fa-solid fa-users text-orange-500 text-3xl mb-4"></i>
            <h2 className="text-3xl color2 font-bold mb-2">+15K</h2>
            <p className="text-gray-400 text-sm">قارئ ومتابع</p>
          </div>

          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-7 text-center ">
            <i className="fa-solid fa-camera text-orange-500 text-3xl mb-4"></i>
            <h2 className="text-3xl color2 font-bold mb-2">+8</h2>
            <p className="text-gray-400 text-sm">سنوات خبرة</p>
          </div>

          <div className="bg-[#121212] border border-[#262626] rounded-2xl p-7 text-center ">
            <i className="fa-solid fa-pen-nib text-orange-500 text-3xl mb-4"></i>
            <h2 className="text-3xl color2 font-bold mb-2">4</h2>
            <p className="text-gray-400 text-sm">كتّاب محترفون</p>
          </div>

        </div>
      </section>

      
      <section className="bg-[#101010] py-20 px-5">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">


            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              <span className="color text-6xl font-bold">قيمنا</span><br/><br/><span className="text-gray-500">المبادئ التي توجه كل ما نقوم بإنشائه</span>   
            </h2>

 
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#181818] border border-[#292929] rounded-2xl p-8 text-center hover:border-orange-500 hoov transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl  flex items-center justify-center mx-auto mb-6">
                  <i className={`${value.icon} text-orange-500 text-2xl`}></i>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-400 text-sm leading-8">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

   
      <section id="team" className="max-w-7xl mx-auto px-5 py-24">

        <div className="text-center mb-14">
          <span className="text-orange-500 text-xl mb-4 block">
            فريقنا
 
          </span>

          <h2 className="text-5xl color md:text-4xl font-bold mb-5">
           تعرف على كتابنا <br/><br/><span className="text-gray-500 text-sm">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</span>

          </h2>


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {authors.map((author, index) => (
            <div
              key={index}
              className="group bg-[#121212] border border-[#292929] rounded-2xl overflow-hidden text-center hover:border-orange-500/60 transition duration-300"
            >

              <div className="pt-8 px-6">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-orange-500 p-1">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition">
                  {author.name}
                </h3>

                <p className="text-orange-500 text-sm mb-4">
                  {author.job}
                </p>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {author.description}
                </p>
                

                <div className="flex justify-center gap-4 border-t border-[#292929] pt-5">

                  <a
                    href="#team"
                    aria-label="Facebook"
                    className="text-gray-500 hover:text-white transition"
                  >
                    <i className="fa-brands bg-gray-700 p-2 hover:bg-amber-500 rounded-xl fa-square-x-twitter"></i>
                  </a>

                  <a
                    href="#team"
                    aria-label="Instagram"
                    className="text-gray-500 hover:text-white transition"
                  >
                    <i className="fa-brands bg-gray-700 p-2 hover:bg-gray-500 rounded-xl  fa-square-github"></i>
                  </a>

                  <a
                    href="#team"
                    aria-label="LinkedIn"
                    className="text-gray-500 hover:text-white  transition"
                  >
                    <i className="fa-brands bg-gray-700 p-2 hover:bg-blue-500 rounded-xl fa-linkedin-in"></i>
                  </a>

                </div>
              </div>
            </div>
            
          ))}

        </div>
      </section>

  
      <section className="px-5 pb-20">

        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-l from-[#ff8a00] via-[#ff3d00] to-[#e51b13] px-6 py-16 md:py-20 text-center">

          <h2 className="text-3xl color md:text-4xl font-bold mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2><br/><span className="color  ">نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، <br/>أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</span>


         
          <div className="flex mt-4 flex-col sm:flex-row justify-center gap-4">

            <a
              href="#team"
              className="bg-[#111] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition"
            >
              <i className="fa-regular fa-envelope ml-2"></i>
              تواصل معنا
            </a>

            <Link
              to="/contant"
              className="border border-white/60 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-black transition"
            >
              تصفح المقالات
              
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

