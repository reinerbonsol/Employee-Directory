import React, { useContext } from "react";
import MyContext from "../../utils/MyContext";


function TableBodyData() {
    const context = useContext(MyContext);

    return (
        <tbody>
            {context.developerState.user.map(({name, email, dob, phone, picture}) => (
                <tr>
                    <td className="first-name">
                        {name.first}
                    </td>
                    <td className="last-name">
                        {name.last}
                    </td>
                    <td className="email">
                        {email}
                    </td>
                    <td className="age">
                        {dob.age}
                    </td>
                    <td className="phone-number">
                        {phone}
                    </td>
                    <td className="image">
                        <img src={picture.thumbnail}/>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBodyData;