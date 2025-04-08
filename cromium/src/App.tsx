const NavBar = () => {
  return (
    <div className="bg-[#121212] text-white">
      <div className="flex flex-row justify-between items-center">
        <ul className="flex flex-row gap-24">
          <div>supabase</div>
          <ul className="flex flex-row gap-8">
            <li>Product</li>
            <li>Developers</li>
            <li>Enterprise</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>Blog</li>
          </ul>
        </ul>
        <button className="px-8 py-2 bg-green-500 rounded-md">Dashboard</button>
      </div>
    </div>
  );
};

export default NavBar;