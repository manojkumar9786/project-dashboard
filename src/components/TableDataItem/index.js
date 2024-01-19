import { FaPhoneVolume } from "react-icons/fa6";
import { RxCalendar } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import './index.css'


const TableDataItem = (props)=>{


    const {tableDataDetails} = props
    const {avatarUrl, 
      companyName, 
      location, 
      createdDate, 
      projectTag,
      contactPerson,
   contactNo,
     status,
   statusDescription,
followUpDate,
leftDays} = tableDataDetails


   const updateStatusColor = ()=>{
      switch (true) {
         case status === 'Hot':
            return 'red-color'
         case status === 'Won':
            return 'green-color'
         case status === 'Lost':
            return 'gray-color'
         default:
            return null
      }
   }

    return(
      <>
       <li className='table-data-item bg-white p-3 flex justify-between'>
         <div className='flex company-profile-container min-w-80'>
         <img alt="avatar" className='avatar-img' src={avatarUrl} />
         <div className='ml-2'>
            <h1 className='text-md company-name'>{companyName}</h1>
            <p className='text-sm company-description'>{location} Created :{createdDate}</p>
         </div>
         </div>
         <div className="flex">
         <div className="min-w-40">
           <h1>{projectTag}</h1>
         </div>
         <div className="min-w-40">
           <h1>{contactPerson}</h1>
           <p className='text-sm'>{contactNo}</p>
         </div>
         <div className="min-w-40">
            <div className="flex">
               <span className ={`status-badge mt-1 mr-2 ${updateStatusColor()}`} />
            <h1>{status}</h1>
            </div>
            <p>{statusDescription}</p>
         </div>
         <div className="min-w-40">
            <h1>{followUpDate}</h1>
            <p>{leftDays}</p>
         </div>
         <div className="flex min-w-40">
            <FaPhoneVolume size={18} className="action-icon mr-3 mt-1" />
            <RxCalendar size={22} className="action-icon mr-3" />
            <IoMdMore size={22} className="action-icon " />
         </div>
         </div>
       </li>
       <hr className="table-data-hr" />
       </>
    )
}

export default TableDataItem