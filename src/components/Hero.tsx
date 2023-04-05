import Button from "antd/es/button";

function Hero() {
  return (
    <div className="hero-height w-screen mt-16">
      <div className="hero-content h-full w-full">
        <div className="text-4xl flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50 shadow_inside">
          <p className="max-w-4xl mb-14 text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsa
            enim nostrum aliquid fuga? Sunt repudiandae excepturi voluptatem
            quidem nulla.
          </p>
          <Button className=" bg-orange-400 text-xl font-bold px-8 py-6 flex justify-center items-center hover:bg-transparent hover:text-white">
            Special Offers
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
