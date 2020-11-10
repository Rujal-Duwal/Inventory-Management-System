import MUIDataTable from "mui-datatables";
import React from 'react'

const options = {
    filterType: "textField",
};

export default function MuiDataTable({ tableHeadings, tableData }) {
    const columns = tableHeadings.map(column =>
        ({ name: column.replace(/\s+/g, '_').toLowerCase(), label: column })
    )
    return (
        <MUIDataTable
            title={"Employee List"}
            data={tableData}
            columns={columns}
            options={options}
        />
    )
}