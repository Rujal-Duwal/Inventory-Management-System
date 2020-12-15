import MUIDataTable from "mui-datatables";
import React from 'react'

const options = {
    filterType: "textField",
};

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index ===0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function MuiDataTable({ tableHeadings, tableData }) {
    const columns = tableHeadings.map(column =>
        ({ name: camelCase(column), label: column })
    )
    console.log(tableData)
    return (
        <MUIDataTable
            title={"Employee List"}
            data={tableData}
            columns={columns}
            options={options}
        />
    )
}
export default MuiDataTable