import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import MuiDataTable from '../../components/muiDataTable/muiDataTable'
import { useSelector, useDispatch } from 'react-redux'

import { getUsers } from '../../redux/users/users.action'
import { usersSelector } from '../../redux/users/users.selectors'


const tableHeadings = ["Name", "Designation", "Contact Details", "Username", "created On"]


export default function Users() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getUsers()) }, [])
    const users = useSelector(usersSelector)

    return (
        <div className='suppliers'>
            <Button color='primary' variant="contained">Add User</Button>
            <MuiDataTable tableHeadings={tableHeadings} tableData={users} />
        </div>
    )
}