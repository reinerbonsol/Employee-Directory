import React, { Component } from "react";
import API from "../../utils/API";
import TableDataHead from "../TableDataHead/index";
import Nav from "../Nav/index";;



class TableDataArea extends Component {
    constructor() {
        super();
        this.state = {
            users: [{}],
            order: "descend",
            filteredUsers: [{}],
            headings: [
                { name: "Image" },
                { name: "Name", },
                { name: "Phone", },
                { name: "Email", },
                { name: "DOB", }
            ],

            handleSort: heading => {
                if (this.state.order === "descend") {
                    this.setState({
                        order: "ascend"
                    })
                } else {
                    this.setState({
                        order: "descend"
                    })
                }
                const compareFnc = (a, b) => {
                    if (this.state.order === "ascend") {
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        else if (heading === "name") {
                            return a[heading].first.localeCompare(b[heading].first);
                        } else {
                            return a[heading] - b[heading];
                        }
                    } else {
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        else if (heading === "name") {
                            return b[heading].first.localeCompare(a[heading].first);
                        } else {
                            return b[heading] - a[heading];
                        }
                    }

                }
                const sortedUsers = this.state.filteredUsers.sort(compareFnc);
                this.setState({ filteredUsers: sortedUsers });
            },

            handleChange: event => {
                console.log(event.target.value);
                const filter = event.target.value;
                const filteredList = this.state.users.filter(item => {
                    let values = Object.values(item)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });
                this.setState({ filteredUsers: filteredList });
            }
        };
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }

    render() {
        return (
            <>
                <Nav handleChange={this.state.handleChange} />
                <div className="data-area">
                    <TableDataHead
                        headings={this.state.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.state.handleSort}
                    />
                </div>
            </>
        );
    }
}

export default TableDataArea;