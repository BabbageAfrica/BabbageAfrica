import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const reviews = [
  { name: "Daniel Okoth", role: "Frontend Developer", avatar: avatar1, rating: 5, text: "Babbage Africa transformed my career. The React course was world-class — clear, deep and totally hands-on." },
  { name: "Amina Yusuf", role: "UI/UX Designer", avatar: avatar2, rating: 5, text: "The UI/UX program felt like a senior designer guiding me one-on-one. I landed my first design role within 3 months." },
  { name: "Samuel Adewale", role: "Data Analyst", avatar: avatar3, rating: 5, text: "From zero to building dashboards in Power BI — Babbage made data feel approachable and exciting." },
  { name: "Linet Wanjiku", role: "Mobile Developer", avatar: avatar2, rating: 5, text: "The Flutter course is gold. I built three real apps and now freelance full-time from Nairobi." },
  { name: "Brian Mensah", role: "Cybersecurity Analyst", avatar: avatar1, rating: 5, text: "The cybersecurity track is intense but the mentors actually care. Best investment I've made." },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">What our <span className="text-gradient">learners say</span></h2>
        </div>
        <Swiper modules={[Pagination, Autoplay]} spaceBetween={24} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="!pb-14">
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="glass rounded-3xl p-6 h-full flex flex-col">
                <Quote className="w-7 h-7 text-primary" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/90 flex-1">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border/40">
                  <img src={r.avatar} alt={r.name} loading="lazy" width={48} height={48} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/40" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (<Star key={k} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`.swiper-pagination-bullet{background:oklch(0.62 0.24 295);opacity:.4}.swiper-pagination-bullet-active{opacity:1;width:24px;border-radius:6px;transition:all .3s}`}</style>
    </section>
  );
}