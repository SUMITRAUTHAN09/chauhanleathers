import Image from "next/image";

export default function ResponsiveImageSection() {
  return (
   
      <div className="w-full md:w-full flex justify-center md:justify-center mt-10">
        <Image
          src="/info.jpeg"
          alt="Chauhan Leather"
          width={500}
          height={700}
          className="object-contain"
          priority
        />
      </div>

  );
}
