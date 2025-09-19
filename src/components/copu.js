// {/* div2 */}
// <div className="bg-blue-400 col-start-1 col-end-2 row-start-2 row-end-4 w-full h-full flex items-center justify-center">
//   Div 2
// </div>

// {/* div3 */}
// <div className="bg-green-400 col-start-2 col-end-4 row-start-3 row-end-4 w-full h-full flex items-center justify-center">
//   Div 3
// </div>

// {/* div4 */}
// <div className="bg-yellow-400 col-start-3 col-end-4 row-start-1 row-end-3 w-full h-full flex items-center justify-center">
//   Div 4
// </div>

// {/* div5 */}
// <div className="bg-purple-400 col-start-2 col-end-3 row-start-2 row-end-3 w-full h-full flex items-center justify-center">
//   Div 5
// </div>


--------------
<div className="flex justify-between gap-[150px] text-text-center">
          {/* Left content */}
          <div className="flex flex-col text-left gap-2">
            <h2 className="uppercase font-bold text-sm text-gray-400">
              July 2025 - Present
            </h2>
            <h1 className="text-3xl font-bold">Haptiq</h1>
            <h3 className="text-lg flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-gray-400  " />
              Pune City, India
            </h3>
            <h3 className="text-lg flex items-center text-gray-400 gap-2">
              <Briefcase className="w-5 h-5 text-gray-400" />
              On Site
            </h3>
          </div>
          {/* Timeline (Center Line) */}
          {/* CENTER timeline line */}
          <div className="relative w-12 flex justify-center">
            {/* track (full height) */}
            <div className="absolute top-0 w-1 bg-gray-700 h-full rounded" />
            {/* fill (height controlled by scroll progress) */}
            <div
              className="absolute top-0 w-1 rounded"
              style={{
                height: `${progress * 100}%`,
                // gradient for the fill (vertical)
                background:
                  "linear-gradient(180deg, #60a5fa 0%, #7c3aed 50%, #f472b6 100%)",
                transition: "height 80ms linear",
              }}
            />
            {/* optional moving marker (small circle that follows the fill) */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `calc(${progress * 100}% - 12px)` }}
            >
              <div className="w-8 h-8 rounded-full ring-2 ring-white bg-slate-800" />
            </div>
          </div>
          {/* Right Content */}
          <div className="w-[500px] flex flex-col text-left">
            <h1 className="text-3xl font-bold pb-8">
              Associate Software Engineer
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              quis accusamus vero doloribus voluptatum illum asperiores expedita
              ratione dicta voluptatibus assumenda magni dignissimos, harum ea
              impedit id cupiditate maiores necessitatibus nemo possimus animi
              vitae nesciunt. Dicta, exercitationem velit. Omnis autem, sed ad
              at molestias commodi et fugit optio sint sit, facere earum
              assumenda? Ex iusto dolore sint dicta laboriosam magnam
              consequuntur quibusdam? Quasi nulla sint, odio vero labore aperiam
              illum aut, dolores velit natus in id rerum? Harum tenetur culpa
              tempore quisquam. Enim, reprehenderit. Distinctio error ex,
              tempora vero consectetur fuga ab ipsum impedit ducimus quos,
              cupiditate eveniet optio animi fugiat inventore iure pariatur
              labore sequi ullam! Praesentium dicta natus maxime quis animi
              distinctio voluptas dolore illum et ad cupiditate minus adipisci
              officiis quo, optio perferendis ipsam quae! Iusto, in. Soluta,
              rerum explicabo. Reiciendis veritatis, molestias nisi sapiente
              consectetur, modi nulla nostrum porro, cum nam sed! Ducimus in
              quae alias tempora id, mollitia corrupti voluptatibus totam
              perspiciatis facilis assumenda explicabo amet quis vel
              praesentium! Sint, obcaecati modi praesentium nihil nostrum ad eum
              voluptatibus, ipsum unde nemo ea nulla doloremque similique error
              incidunt architecto? Esse inventore perferendis quibusdam optio
              voluptas necessitatibus voluptates, laudantium nesciunt nostrum
              obcaecati velit nemo magnam expedita mollitia!
            </p>
          </div>
        </div>