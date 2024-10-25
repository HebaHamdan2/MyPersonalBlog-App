import React from 'react'

const SubsTableItem = ({email,date,mongoId,onDeleteEmail}) => {
    const emailDate=new Date(date);
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 white whitespace-nowrap'>
{email?email:"No Email"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{emailDate.toDateString()}</td>
        <td onClick={()=>{onDeleteEmail(mongoId)}} className='px-6 py-4 cursor-pointer'>x</td>

    </tr>
  )
}

export default SubsTableItem