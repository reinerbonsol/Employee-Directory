import React, { useContext } from "react";
import Table from 'react-bootstrap/Table';
import TableBodyData from "../TableBodyData/index";
import MyContext from "../../utils/MyContext";

function TableHeaderData() {
    const context = useContext(MyContext);

    return (
        <div className="table">
            <Table>
                <thead>
                    <tr>
                        {context.developerState.headings.map((name) => {
                            return (
                                <th className="headings" key={name}>
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <TableBodyData />
            </Table>
        </div>

    );
}

export default TableHeaderData;
