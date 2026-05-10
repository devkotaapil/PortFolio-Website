import HelloMessage from "./HelloMessage";

const Introduction = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:gap-6 p-2 sm:p-5 md:p-6 lg:grid-cols-2 lg:items-center">
      <div className="space-y-4">
        <HelloMessage />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
          Full-stack developer passionate about learning and building modern web
          applications with the MERN stack. I enjoy creating clean user
          interfaces, scalable backend systems, and turning ideas into
          real-world digital experiences while constantly learning new
          technologies and improving my craft.
        </p>
      </div>
      <div className="flex justify-center items-center p-2 sm:p-4 rounded-xl bg-muted/10">
        <img
          className="w-full max-w-[420px] rounded-xl object-cover"
          src="./porto img.png"
          alt="Apil Devkota"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </section>
  );
};

export default Introduction;
