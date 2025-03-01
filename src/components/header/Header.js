import React, { useState } from 'react';
import './Header.scss';
import { FaUserCircle, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import { ImSearch, ImCross } from "react-icons/im";
import { AiOutlineLine } from "react-icons/ai";
import { useAuthContext } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useAuthContext();
  const [searchInput, setSearchInput] = useState("")
  const [categoryMenu, setCategory] = useState(false)
  const [mobileCategoryMenu, setMobileCategory] = useState(false)

  const clearInput = () => {
    let searchInputValue = document.getElementsByClassName("searchInput")[0]
    searchInputValue.value = ""
    console.log(searchInputValue)
  }

  return (
    <>
      <nav>
        <div className="logo"><Link to={"/ciccc-react-midterm-team-project/"}><img src="/ciccc-react-midterm-team-project/banner.png" alt="logo" /><span>BCshop</span></Link></div>
        <div className="searchBar">
          <input className="searchInput" type="text" placeholder="search item...."
            onChange={(e) => setSearchInput(e.target.value)}></input>
          <div><ImCross className="clearBtn" size={10} onClick={() => clearInput()} /></div>
          <div className="divider" >
            {/* <AiOutlineLine className="divider" size={50}/> */}
          </div>
          <Link to={searchInput === "" ? "/ciccc-react-midterm-team-project/" : "/ciccc-react-midterm-team-project/search/" + searchInput} onClick={clearInput} ><ImSearch className="searchBtn" size={20} color={"gray"} /></Link>

        </div>
        <div className="iconWrap">
          <ul onMouseLeave={() => setCategory(false)}>
            <li onMouseEnter={() => setCategory(true)} onClick={()=>setMobileCategory(!mobileCategoryMenu)}>
              <FaBookOpen className="navIcon" /><p>Category</p></li>
            <li onMouseEnter={() => setCategory(false)}><Link to={"/ciccc-react-midterm-team-project/cart"}><FaShoppingCart className="navIcon" /></Link><p>Cart</p></li>
            <li onMouseEnter={() => setCategory(false)}><Link to={"/ciccc-react-midterm-team-project/account/"}><FaUserCircle className="navIcon" /></Link>
              <p>{user === null ? "Account" : user.providerData[0].displayName}</p></li>
            {categoryMenu === true &&
              <div className="categoryDropdown" >
                <ul>
                  <Link to={"/ciccc-react-midterm-team-project/category/clothes"} style={{ textDecoration: 'none', backgroundColor: 'orange' }} name={"Clothes"}><li>Clothes</li></Link>
                  <Link to={"/ciccc-react-midterm-team-project/category/accessories"} style={{ textDecoration: 'none' }} name={"Accessories"}><li>Accessories</li></Link>
                  <Link to={"/ciccc-react-midterm-team-project/category/electronics"} style={{ textDecoration: 'none' }} name={"Electronics"}><li>Electronics</li></Link>
                </ul>
              </div>
            }
          </ul>
        </div>
        {mobileCategoryMenu === true &&
        <div className="mobileCategoryDropdown" >
          <ul>
            <Link to={"/ciccc-react-midterm-team-project/category/clothes"} style={{ textDecoration: 'none', backgroundColor: 'orange' }} name={"Clothes"}><li>Clothes</li></Link>
            <Link to={"/ciccc-react-midterm-team-project/category/accessories"} style={{ textDecoration: 'none' }} name={"Accessories"}><li>Accessories</li></Link>
            <Link to={"/ciccc-react-midterm-team-project/category/electronics"} style={{ textDecoration: 'none' }} name={"Electronics"}><li>Electronics</li></Link>
          </ul>
        </div>
}
      </nav>
    </>
  );
}

export default Header;
