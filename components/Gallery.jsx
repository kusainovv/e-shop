import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import GridItemForGallery from "./GridItemForGallery";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/13565969/pexels-photo-13565969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women tops",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/10041282/pexels-photo-10041282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women shirts",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/769731/pexels-photo-769731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men shirts",
  },
  {
    id: 4,
    src: "https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg",
    title: "Men pants",
  },
  {
    id: 5,
    src: "https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg",
    title: "Women pants",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/7848603/pexels-photo-7848603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men shirts",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women skirts",
  },
  {
    id: 8,
    src: "https://kingdoodle.com/wp-content/uploads/2019/12/Red_Printo.jpg",
    title: "Men shoes",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/5713302/pexels-photo-5713302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women shoes",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/16131075/pexels-photo-16131075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men jackets",
  },
];

const Gallery = () => {
  return (
    <div className="my-20 wrapper image-container">
      <div className="flex flex-col gap-5 mb-10 text-center">
        <span className="font-medium tracking-widest">{`LET'S SEE`}</span>
        <span className="section-title">GALLERY OF THE EUPHORIA</span>
        <Link
          href="/products"
          className="flex items-center self-center gap-2 font-medium tracking-widest group"
        >
          SHOP NOW{" "}
          <span className="duration-300 group-hover:translate-x-5">
            <BsArrowRight />
          </span>
        </Link>
      </div>

      <div className="grid-container">
        {data.map((item) => (
          <GridItemForGallery key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
