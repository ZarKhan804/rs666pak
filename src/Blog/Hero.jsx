
function Hero() {
  return (
    <section className="border-b border-gray-300 bg-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">

        <div className="mx-auto w-fit rounded-full border border-yellow-300 bg-white px-5 py-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-yellow-600">
            RS666 Pak Game Information
          </p>
        </div>

        <h1 className="mt-6 text-center text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          RS666 Pak <span className="text-yellow-500">Blog</span>
        </h1>

        <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-yellow-400" />

        <article className="mx-auto mt-9 max-w-4xl rounded-2xl border border-gray-300 bg-white px-6 py-8 shadow-sm sm:px-9">

          <p className="text-base leading-8 text-slate-600">
            Welcome to the RS666 Pak Blog, a useful space for learning about
            RS666 Pak Game, its platform features, online gaming experience,
            website interface, navigation, and responsive design. Explore
            informative content created to make RS666 Pak Game easier to
            understand for visitors looking for clear and straightforward
            platform information.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            RS666 Pak Game is designed around a modern online platform with a
            clean interface, organized sections, and convenient navigation.
            Visitors can explore available gaming and entertainment options,
            review platform information, and browse different sections through
            a simple and responsive website layout.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            On this blog, visitors can learn about RS666 Pak Game Online,
            RS666 Game Pakistan, RS666 Game Download, platform features,
            mobile accessibility, website navigation, and the overall RS666
            Pak Game experience. The content also covers useful information
            about browsing the platform across smartphones, tablets, laptops,
            and desktop devices.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Whether you are interested in understanding the RS666 Pak Game
            platform, learning about its available features, or exploring
            common RS666 Pak Game information, this blog provides
            straightforward content in an easy-to-read format. Articles are
            structured for comfortable browsing across different modern
            devices.
          </p>

        </article>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "RS666 Pak Game",
            "RS666 Game Online",
            "RS666 Game Pakistan",
            "RS666 Game Download",
            "RS666 Pak Features",
            "RS666 Pak Guide",
            "RS666 Online Game",
          ].map((keyword) => (
            <span
              key={keyword}
              className="border-l-4 border-yellow-400 bg-white px-4 py-2 text-xs font-bold text-slate-600 shadow-sm"
            >
              {keyword}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;

