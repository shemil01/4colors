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
      img: "/clients/nesto.png",
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
    {
      img: "/clients/KFC_Logo.webp",
    },
    {
      img: "/clients/starcare-logo.svg",
    },
    {
      img: "/clients/apollo-logo.svg",
    },
    {
      img: "/clients/adlife-logo.png",
    },
    {
      img: "/clients/alseeb-logo.png",
    },
    {
      img: "/clients/shapporji-logo.jpg",
    },
    {
      img: "/clients/suhail.png",
    },
    {
      img: "/clients/kims_health_hospital_.png",
    },
  ];
  return (
    <section className="  bg-brand-light-gray p-20 ">
      <div className="container mx-auto px-6 gap-7">
        <h2 className="text-4xl font-bold text-brand-navy pb-20 text-center ">
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
