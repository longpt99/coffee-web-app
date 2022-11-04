import MenuPage from "../pages/Menu";
import ProfilePage from "../pages/Profile";
import BlogPage from "../pages/Blog";
import HomePage from "../pages/Home";

export default [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/menu", name: "Menu", Component: MenuPage },
  { path: "/profile", name: "Profile", Component: ProfilePage },
  { path: "/blog", name: "Blog", Component: BlogPage },
];
