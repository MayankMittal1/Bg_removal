import { assets } from "../assets/assets";


const Header = () => {
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* left side */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          {" "}
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background from
          </span>{" "}
          <br className="max-md:hidden" />
          an image
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem
          ratione deleniti saepe fugit consectetur{" "}
          <br className="max-sm:hidden" /> odio perspiciatis quos odit sunt?
          Commodi exercitationem consequuntur dignissimos asperiores quas
          veritatis corporis tempora error.
        </p>
        <div>
          <input type="file" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          >
            <img src={assets.upload_btn_icon} width={20} alt="" />
            <p className="text-white text-sm ">Upload your image</p>
          </label>
        </div>
      </div>
      {/* right side */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
}


export default Header