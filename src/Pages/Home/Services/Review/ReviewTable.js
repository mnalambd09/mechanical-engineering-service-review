import React from 'react';
import useTitle from '../../../../hooks/useTitle';

const ReviewTable = ({ rev, handleDelete }) => {
    useTitle('Reviews');
    const { _id, email, message, price, reviewTitle, url, userName } = rev
    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost' >X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            {/* { 
                                orderService?.img &&
                           <img src={orderService.img} alt="Avatar Tailwind CSS Component" />} */}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {reviewTitle}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{message}</td>
            {/* <th>
                <button 
                onClick={ () => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
            </th> */}
        </tr>



    );
};

export default ReviewTable;