import { FaLeaf } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"

const Navbar = () => {


     const NavbarData = [
        {
            id: 1,
            title: "Home",
            link: "/",
        },
        {
            id: 2,
            title: "Products",
            link: "#",
        },
        {
            id: 3,
            title: "About",
            link: "#"
        },
        {
            id: 4,
            title: "Shop",
            link: "#"
        },
        {
            id: 5,
            title: "Contact",
            link: "#"
        }
    ]

  return (
    <>
        <div className="container flex justify-between items-center py-4 md:pt-4">
            {/* icon section */}
            <div className=" text-2xl flex items-center gap-2 font-bold uppercase">
                <p className="text-primary">MilkShake</p>
                <p className="text-secondary">Store</p>
                <FaLeaf className="text-green-500" />
            </div>
            {/* menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                    {NavbarData.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.link} className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">{menu.title}</a>
                        </li>
                    ))}
                    <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-700">
                        <MdOutlineShoppingCart />
                    </button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar