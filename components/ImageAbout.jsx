import Image from "next/image";

export const ImageAbout = () => {
  return (
    <div className="py-10">
      <div className="flex gap-5">
        <div className="relative w-1/2 h-96">
          <Image
            priority
            loader={() =>
              "https://i.postimg.cc/prXd7cnH/XXL.webp"
            }
            src={
              "https://i.postimg.cc/prXd7cnH/XXL.webp"
            }
            width={50}
            height={50}
            alt={"image1"}
            className="object-cover w-96"
          />

          <Image
            priority
            loader={() =>
              "https://i.postimg.cc/C5XVNcGJ/XXL-2.webp"
            }
            src={
              "https://i.postimg.cc/C5XVNcGJ/XXL-2.webp"
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
              "https://i.postimg.cc/x10SPNHw/XXL-3.webp"
            }
            src={
              "https://i.postimg.cc/x10SPNHw/XXL-3.webp"
            }
            width={50}
            height={50}
            alt={"image3"}
            className="object-cover w-96"
          />

          <Image
            priority
            loader={() =>
              "https://i.postimg.cc/ydSdz3Lf/XXL-4.webp"
            }
            src={
              "https://i.postimg.cc/ydSdz3Lf/XXL-4.webp"
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
