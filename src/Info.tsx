export const Info = () => {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-6">
      <h2 className="text-xl  md:text-2xl lg:text-4xl  font-extrabold text-center text-[#43334C] mb-12">
        Project Overview
      </h2>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-pink-200">
          <h3 className="text-xl  md:text-2xl lg:text-3xl font-bold mb-3 text-pink-500">
            🚗 Home Page – Animated Gallery
          </h3>
          <p className="text-lg md:text-xl lg:text-3xl  lg:leading-relaxed text-[#43334C]">
            This gallery uses the{" "}
            <span className="font-semibold">Intersection Observer API</span>{" "}
            with <span className="font-semibold">useRef</span> to track image
            visibility. When an image enters the viewport, a{" "}
            <span className="font-semibold">show</span> class is added
            dynamically using <span className="font-semibold">classList</span>{" "}
            to trigger smooth reveal animations.
          </p>
          <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-500">
            ✔ Eliminates unnecessary DOM animations • ✔ Improves scroll
            performance
          </p>
        </div>

        {/* List Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-indigo-200">
          <h3 className="text-xl  md:text-2xl lg:text-3xl font-bold mb-3 text-indigo-500">
            📄 List Page – Virtualized Infinite Scrolling
          </h3>
          <p className="text-lg md:text-xl lg:text-3xl leading-relaxed text-[#43334C]">
            This page efficiently handles large user datasets using two TanStack
            tools:
          </p>

          <ul className="mt-4 space-y-2 list-disc list-inside text-[#43334C] ">
            <li className="text-base md:text-xl lg:text-2xl">
              <span className="font-semibold">useInfiniteQuery</span> from{" "}
              <span className="text-indigo-500 font-semibold">
                @tanstack/react-query
              </span>{" "}
              to fetch paginated user data with built-in caching.
            </li>
            <li className="text-base md:text-xl lg:text-2xl">
              <span className="font-semibold">useVirtualizer</span> from{" "}
              <span className="text-indigo-500 font-semibold">
                @tanstack/react-virtual
              </span>{" "}
              to render only visible DOM nodes for ultra-fast scrolling.
            </li>
          </ul>

          <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-500">
            ✔ Minimal memory usage • ✔ Smooth infinite scroll even with huge
            lists
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-200">
          <h3 className="text-xl  md:text-2xl lg:text-3xl font-bold mb-3 text-emerald-500">
            ⚙ System Workflow
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#43334C] text-white text-lg md:text-xl lg:text-3xl">
                  <th className="p-3 border">Layer</th>
                  <th className="p-3 border">Tool</th>
                  <th className="p-3 border">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-[#43334C] bg-pink-100/50 text-sm md:text-xl lg:text-2xl">
                <tr className="hover:bg-pink-50 transition">
                  <td className="p-3 border">Server Data</td>
                  <td className="p-3 border">useInfiniteQuery</td>
                  <td className="p-3 border">Efficient paginated fetching</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition">
                  <td className="p-3 border">Browser DOM</td>
                  <td className="p-3 border">useVirtualizer</td>
                  <td className="p-3 border">Mount only visible items</td>
                </tr>
                <tr className="hover:bg-emerald-50 transition">
                  <td className="p-3 border">UI Animations</td>
                  <td className="p-3 border">Intersection Observer</td>
                  <td className="p-3 border">Smooth reveal on scroll</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
