function Banner() {
  return (
    <div className="container mx-auto">
      <div className="hero-content flex gap-60 lg:flex-row-reverse">
        {/* Banner Image */}
        <img src="/banner-stack.png" alt="Banner" />

        {/* Banner Text */}
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white">
              Explore Technologies
            </button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
