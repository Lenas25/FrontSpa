"use client";
import type { Course } from "@/types/course";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";

function CourseInfo({
  course,
  indexVisible,
  setIndexVisible,
}: {
  course: Course;
  indexVisible: number;
  setIndexVisible: Dispatch<SetStateAction<number>>;
}) {
  const handleClick = () => {
    if (indexVisible === course.id) {
      setIndexVisible(-1); // Cierra el curso si ya está abierto
    } else {
      setIndexVisible(course.id); // Abre el curso
    }
  };

  return (
    <div id={`item${course.id}`} className="carousel-item">
    <div
      className="my-10 w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] bg-cover bg-center cursor-pointer transition-all duration-500 ease-in-out transform back hover:scale-105 rounded-xl mx-3"
      style={{ backgroundImage: `url(${course.imageUrl})` }}
      onClick={handleClick}>
      {indexVisible === course.id ? (
        <div
          onClick={handleClick}
          className=" h-full w-full p-4 flex flex-col justify-center items-center gap-5 text-center bg-flamingo rounded-xl text-xl shadow-xl transition-opacity duration-500 ease-in-out">
          <a href={`https://wa.me/584247247939?text=¡Hola!%20Estoy%20interesado/a%20en%20obtener%20más%20información%20sobre%20${course.name.replace(" ", "%20")}%20Gracias%21`}  className="btn btn-ghost h-auto relative bg-transparent hover:bg-transparent">
          <Image
            src="/mascara.png"
            width={200}
            height={200}
            alt="mascara"
            className="size-[5rem] bg-white rounded-full p-2 object-cover lg:size-[8rem]"
            priority
          />
          <IconSend className="absolute top-0 right-0" size={40} />
          </a>
          <p className="overflow-hidden leading-4 line-clamp-6 text-ellipsis text-[14px] md:text-base md:leading-normal">{course.description}</p>
          <div className="flex flex-col gap-1 text-left text-sm lg:text-xl">
          <p className="font-semibold">Dia Inicio: {course.initialDate.toString()}</p>
          <p className="font-semibold">Dia Fin: {course.endDate.toString()}</p>
          <p className="font-semibold">Duracion: {course.duration} {course.duration===1?"mes":"meses"}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-yellow bg-opacity-50 backdrop-filter backdrop-sepia-0 z-0 rounded-xl" />
          <div className="relative z-20 p-4 size-full rounded-xl shadow-xl flex justify-start items-end text-xl transition-opacity duration-500 ease-in-out">
            <span className="transition-all duration-500 ease-in-out text-xl font-semibold break-words lg:text-3xl">
              {course.name}
            </span>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

export default CourseInfo;
