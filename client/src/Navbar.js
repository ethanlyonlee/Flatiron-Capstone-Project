import { Link } from "react-router-dom";

function Navbar({user, setUser}) {
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  if(!user) 
    return(
      <header>
      <div class="logo">
        <h1 class="logo-name">The Home of the Chicago Bulls </h1>
        <h3 class="logo-sub">Welcome Bulls fans 👋</h3>
      </div>
      
    </header>
    )
    else{
  return (
    <header>
      <div class="logo">

        <h1 class="logo-name">The Home of the Chicago Bulls</h1>
        <h3 class="logo-sub">Welcome Bulls fans 👋</h3>
      </div>
      <nav class="nav-bar">

        <Link to="/">Home</Link>
        <Link to="/games">||Games</Link>
        <Link to="/items">||Shop</Link>
        <Link to="/comments">||Comments</Link>
        <Link to="/profile">||Profile</Link>
        <Link to="/" onClick={handleLogout}>||Logout</Link>
      </nav>
    </header>

  );
}}

export default Navbar;