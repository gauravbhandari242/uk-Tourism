import React from "react";

function VideoSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-50">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Recommended Video
        </h2>
        <p className="text-gray-500 mt-2">
          Discover the beauty of Uttarakhand through this video
        </p>
      </div>

      {/* Video */}
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border">

        <video
          controls
          preload="metadata"
          className="w-full h-[260px] sm:h-[380px] md:h-[460px] object-cover"
        >
          <source
            src="/photo/uk-tourism-final-english-31-jan-revised-1-low-res_k7xMksbx_xHWR cut_4.mp4"
            type="video/mp4"
          />
        </video>

      </div>

    </section>
  );
}

export default VideoSection;
