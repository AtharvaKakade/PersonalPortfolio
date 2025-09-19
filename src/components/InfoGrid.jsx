import React from "react";

const InfoGrid = () => {
  return (
    <div className="mx-auto max-w-[1200px] bg-[#000814] p-4">
      <div className="grid grid-cols-4 grid-rows-14 gap-2 h-screen">
        <div className="col-span-3 row-span-4 bg-[#000814] flex items-center justify-center rounded-lg shadow">
          <div className="w-full mx-5 bg-[#f2e3d2] rounded-2xl">
            <div className="h-64 w-64 flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
              <img
                src="src/assets/images/photu.png"
                alt=""
                className="w-full h-full  "
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-4 row-span-4 col-start-1 row-start-5 bg-red-200 flex items-center justify-center rounded-lg shadow">
          3
        </div>
        <div className="col-span-2 row-span-6 col-start-1 row-start-9 bg-yellow-200 flex items-center justify-center rounded-lg shadow">
          4
        </div>
        <div className="col-span-2 row-span-6 col-start-3 row-start-9 bg-purple-200 flex items-center justify-center rounded-lg shadow">
          6
        </div>
        <div className="row-span-4 col-start-4 overflow-hidden row-start-1 bg-[#000814] flex items-center justify-center rounded-lg shadow">
          <div className="w-full h-full mx-7 my-7 bg-[#f2e3d2] flex items-end">
            <div className="mx-6 my-3 pt-20 bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
              <h1 className="font-extrabold text-7xl text-[#000814] ">
                Hello <br />
                World!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
