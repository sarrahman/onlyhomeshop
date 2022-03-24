import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardProduct from "../components/CardProduct";
import { Box } from "@mui/material";
import TitleSection from "../components/TitleSection";

const products = [
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Tas Mewah",
    cover: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    price: 20000,
    status: "promo",
    priceSale: 30000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Barang Branded",
    cover: "https://placeimg.com/640/480/animals",
    price: 10000,
    status: "sale",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
  {
    name: "Barang Murah Banget",
    cover: "https://placeimg.com/640/480/tech",
    price: 100000,
    priceSale: 50000,
    kategori: "Men",
    rating: 5,
  },
  {
    name: "Tas Mewah",
    cover: "https://placeimg.com/640/480/nature",
    price: 10000,
    status: "promo",
    priceSale: 15000,
    kategori: "Men",
    rating: 4,
  },
];

export default function BestSeller() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <TitleSection title="Best Sellers" />
      </Box>
      <Box
        sx={{
          m: { xs: 1, md: 3 },
        }}
      >
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            768: { slidesPerView: 3.1 },
            1024: { slidesPerView: 4.1 },
          }}
          spaceBetween={20}
          modules={[Pagination]}
        >
          {
            products.map((product) => (
              <SwiperSlide key={product.name}>
                <CardProduct {...product} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </Box>
    </Box>
  );
}
