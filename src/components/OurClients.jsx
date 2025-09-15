"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const OurClients = () => {
  const client = [
    {
      img: "/clients/lulu-group.png",
    },
    {
      img: "/clients/nesto-logo.jpg",
    },
    {
      img: "/clients/badralsama.png",
    },
    {
      img: "/clients/papajhones.png",
    },
    {
      img: "/clients/gb-logo-en.webp",
    },
    {
      img: "/clients/ramez-hypermarket.png",
    },
    {
      img: "/clients/Ansar-group.png",
    },
  ];
  return (
    <section className="  bg-brand-light-gray p-20 font-optima">
      <div className="container mx-auto px-6 ">
        <h2 className="text-center text-[19px] font-[400] leading-[27px]  text-lg mb-10 tracking-[5px]">
          Our Clients
        </h2>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          <div className="grid lg:grid-cols-6 md:grid-cols-3  lg:space-x-5">
            {client.map((clients, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={clients.img}
                  alt="client logo image"
                  width={150}
                  height={150}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
