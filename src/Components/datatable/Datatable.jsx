import React from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { usersColumns, userRows } from '../../datatablesourec'
import { Link } from 'react-router-dom';




const Datatable = () => {

    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellActon">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New user
                <Link to='/users/new' style={{ textDecoration: "none" }} className="link">Add New</Link>
            </div>
            <DataGrid
                className='dataGrid'
                rows={userRows}
                columns={usersColumns.concat(actionColumn)}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;