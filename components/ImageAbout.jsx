import Image from "next/image";

export const ImageAbout = () => {
  return (
    <div className="py-10">
      <div className="flex gap-5">
        <div className="relative w-1/2 h-96">
          <Image
            priority
            loader={() =>
              "https://i.ibb.co/dc8BkxM/469ac486658eb6b0ef86cf1cc8b44200.jpg"
            }
            src={
              "https://i.ibb.co/dc8BkxM/469ac486658eb6b0ef86cf1cc8b44200.jpg"
            }
            width={50}
            height={50}
            alt={"image1"}
            className="object-cover w-96"
          />

          <Image
            priority
            loader={() =>
              "https://i.ibb.co/rFjvJzg/1596408743-f5.jpg"
            }
            src={
              "https://i.ibb.co/rFjvJzg/1596408743-f5.jpg"
            }
            width={50}
            height={50}
            alt={"image2"}
            className="absolute top-20 left-[300px] w-2/4"
          />
        </div>
        <div className="relative w-1/2 h-96">
          <Image
            priority
            loader={() =>
              "https://i.ibb.co/FsR1bv1/Hcb1f57374fe6445aa3983bd754820e286.jpg"
            }
            src={
              "https://i.ibb.co/FsR1bv1/Hcb1f57374fe6445aa3983bd754820e286.jpg"
            }
            width={50}
            height={50}
            alt={"image3"}
            className="object-cover w-96"
          />

          <Image
            priority
            loader={() =>
              "https://i.ibb.co/Pjxg4LQ/small-5b87f8e870a46.jpg"
            }
            src={
              "https://i.ibb.co/Pjxg4LQ/small-5b87f8e870a46.jpgp"
            }
            width={50}
            height={50}
            alt={"image4"}
            className="absolute top-20 left-[300px] w-2/4"
          />
        </div>
      </div>
    </div>
  );
};
