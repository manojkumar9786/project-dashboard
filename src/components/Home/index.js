import { Component } from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineContacts } from "react-icons/md";
import { TbClockExclamation } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CgSortAz } from "react-icons/cg";
import { IoMdShare } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import Header from "../Header";
import NavItem from "../NavItem";
import Table from "../Table";
import './index.css'


const navbarItemList=[
    {
        id:'LEADS',
        displayText: 'Leads',
        icon: <BsFillJournalBookmarkFill className="text-white" size={24} />,
        description: '12 leads are pending'
    },
    {
        id:'ACCOUNTS',
        displayText: 'Accounts',
        icon: <HiOutlineBuildingOffice2 className="text-white" size={22} />,
        description: '10 active users'
    },
    {
        id:'CONTACTS',
        displayText: 'Contacts',
        icon: <MdOutlineContacts className="text-white" size={22} />,
        description: '10 active users'
    },
    {
        id:'TASKS',
        displayText: 'Tasks',
        icon: <TbClockExclamation className="text-white" size={22} />,
        description: '25 tasks are pending'
    }
]


class Home extends Component{
    state={activeNavId: navbarItemList[1].id}


    updateNavActive = (id) => {
        this.setState({activeNavId: id})
    }

    render(){
        const {activeNavId} = this.state
        return(
            <div className="home-container">
              <Header />
              <div className="body-container ml-5 mr-5">
                 <ul className="nav-container">
                  {
                    navbarItemList.map((eachItem)=>(
                      <NavItem
                       key={eachItem.id}
                       navbarDetails={eachItem}
                       updateNavActive = {this.updateNavActive}
                       isActive={eachItem.id === activeNavId} />
                    ))
                  }
                 </ul>
                 <div className="content-container pl-5 pt-3 pr-5">
                   <ul className="tab-container flex">
                     <li className="first-tab flex">All leads <MdCancel className="mt-1 ml-1 cancel-icon" size={18} /></li>
                     <li className="second-tab flex">Add new lead <MdCancel className="mt-1 ml-1 cancel-icon" size={18} /></li>
                     <li className="third-tab flex">Edit lead - Aag <MdCancel className="mt-1 ml-1 cancel-icon" size={18} /></li>
                   </ul>
                 <div className=" leads-container bg-white pl-4 pt-3 pb-2 flex justify-between">
                   <div>
                      <h1 className="text-2xl font-bold leads-heading">All Leads</h1>
                      <p className="leads-description">From 20 September to 20 December 2021</p>
                   </div>
                   <div className="leads-content-container mt-4 flex">
                     <div className="flex input-container w-70 mr-3">
                        <input className="outline-none text-md pl-2" placeholder="Search a lead" type="search" />
                        <FaSearch className="mt-1 mr-3 search-icon" size={18} />
                     </div>
                     <select className="lead-dropdown ml-3">
                        <option>All leads</option>
                     </select>
                     <CgSortAz className="sort-icon ml-3" size={40} />
                     <IoMdShare className="mt-2 ml-3" size={25} />
                     <div className="ml-3 mt-1 mr-3 add-new-container flex bg-green-400 text-white">
                        <FaCirclePlus className="mr-2" />
                       <p>Add new</p>
                     </div>
                   </div>
                 </div>
                 <Table />
                 </div>
              </div>
              <footer className="footer-container ml-5 mr-5" />
            </div>
        )
    }
}

export default Home
