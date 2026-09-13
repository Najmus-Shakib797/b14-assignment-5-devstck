function Navbar() {
  return (
    <div className="navbar my-2 bg-white shadow px-4 relative sticky top-0 z-50">
      {/* Left: Hamburger menu (mobile only) */}
      <button className="md:hidden flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Logo */}
      <div
        className="
          flex items-center gap-2
          absolute left-1/2 -translate-x-1/2
          md:static md:translate-x-0
        "
      >
        <img src="/logo-text.png" alt="Logo" />
      </div>

      {/* Desktop: Nav Links */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <a className="text-pink-500">Home</a>
          </li>

          <li>
            <a>Technologies</a>
          </li>

          <li>
            <a>Projects</a>
          </li>

          <li>
            <a>About</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-2 ml-auto">
        <button className="btn btn-ghost">Sign In</button>

        <button className="btn bg-pink-500 text-white rounded-full px-5">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
