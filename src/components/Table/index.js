import { Component } from "react";
import { v4 } from "uuid";
import TableDataItem from "../TableDataItem";
import "./index.css";


const companyDetailsList=[
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'CRM',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'New',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Aagnia Technology private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'Ecommerce',
        contactPerson: 'Karthikeyan',
        contactNo: '9786294876',
        status: 'Hot',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'CRM',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'Lost',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Aagnia Technology private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'Ecommerce',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'Won',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'CRM',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'New',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'Ecommerce',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'Hot',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'CRM',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'Lost',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    },
    {
        id: v4(),
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5DWWYRWd7uysUpQK690_mjjaBPgll2-V0Q&usqp=CAU',
        companyName: 'Try jobs private limited',
        location: 'Coimbatore,Tamilnadu',
        createdDate: '20 Dec 2021',
        projectTag: 'CRM',
        contactPerson: 'Ramcharan',
        contactNo: '9786294876',
        status: 'Won',
        statusDescription: 'status key word',
        followUpDate: '20 Jan 2022',
        leftDays: '4 days'
    }
]

class Table extends Component{
    render(){
        return(
         <div className="table-container">
           <div className="table-head-container flex p-4 justify-between">
                <h1 className="min-w-80">Company Profile</h1>
                <div className="flex">
                    <h1 className="table-head-item  min-w-40">Project tag</h1>
                    <h1 className="table-head-item  min-w-40">Contact person</h1>
                    <h1 className="table-head-item  min-w-40">Status</h1>
                    <h1 className="table-head-item  min-w-40">Follow-up date</h1>
                    <h1 className="table-head-item  min-w-40">Actions</h1>
                </div>
           </div>
           <ul className="table-data-container">
             {
                companyDetailsList.map((eachData)=>(
                    <TableDataItem
                    key={eachData.id}
                    tableDataDetails={eachData} />
                ))
             }
           </ul>
           <div className="load-more-container bg-white p-8 text-center">
              <button className="load-more-btn">Load more</button>
           </div>
         </div>
        )
    }
}

export default Table