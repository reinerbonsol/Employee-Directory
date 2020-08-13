import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import MyContext from "../../utils/MyContext";
import TableHeaderData from "../TableHeaderData";

function EmployeeData() {

    const [developerState, setDeveloperState] = useState({
        users: [],
        headings: [
            {name: "First Name"},
            {name: "Last Name"},
            {name: "Email"},
            {name: "Age"},
            {name: "Phone"},
            {name: "Image"}
        ]
    });

    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results);
            setDeveloperState({
                ...developerState,
                users: results.data.results,
            });
        });
    }, []);

    return (
        <MyContext.Provider value={developerState}>
            <div className="table-header-data">
                <TableHeaderData/>
            </div>
        </MyContext.Provider>
    );
};

export default EmployeeData;