import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {ArrowLeft, ArrowRight} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";

import {posSalesListSelector} from "../../redux/pos/pos.selecotrs";
import {addToPosSalesItem} from "../../redux/pos/pos.action";

function PosSalesTable(props) {
    const salesList = useSelector(posSalesListSelector)
    const dispatch = useDispatch()

    let subTotal=0
    salesList.map((row)=>subTotal += row.quantity*row.rate)
    return (
        <TableContainer
            component={Paper}
            style={{ width: 'auto', height: '71vh' }}>
            <Table  size="small" aria-label="a dense table" >
                <TableHead style={{ backgroundColor: '#5188CA' }}>
                    <TableRow>
                        <TableCell align='center'>S.N</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Code No.</TableCell>
                        <TableCell align="right">Rate</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        (salesList.length>0) && salesList.map((row,index) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">{index+1}</TableCell>
                                <TableCell scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.itemCode}</TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                                <TableCell align="right">
                                    <ArrowLeft
                                        onClick={
                                            () => dispatch(addToPosSalesItem(
                                                salesList.map(salesItem=>
                                                    {if(salesItem.id===row.id)
                                                        salesItem.quantity--
                                                        return salesItem}
                                                )
                                            ))
                                        }
                                    />
                                    {row.quantity}
                                    <ArrowRight onClick={
                                        () => dispatch(addToPosSalesItem(
                                            salesList.map(salesItem=>
                                            {if(salesItem.id===row.id) salesItem.quantity++
                                                return salesItem
                                            })
                                        ))
                                    }/>
                                </TableCell>
                                <TableCell align="right">{row.rate * row.quantity}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PosSalesTable;