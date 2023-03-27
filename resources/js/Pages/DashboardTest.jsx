import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import OrderList from "@/Components/dashboard/OrderList";
import MenuList from "@/Components/dashboard/MenuList";

const tableData = [
    {
        orderID: 1,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 5,
    },
    {
        orderID: 2,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 8,
    },
    {
        orderID: 3,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 6,
    },
    {
        orderID: 4,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 5,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 6,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 7,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 8,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 9,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 10,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 11,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
    {
        orderID: 12,
        user: {
            id: "h1kj2h34123",
            name: "purwanto",
            status: "member",
        },
        tableID: 3,
    },
];

export default function DashboardTest() {
    // const tableData = tableData;

    useEffect(() => {});
    return (
        <>
            {/* navigation bar */}
            <NavBar />
            {/* main content */}
            <div className="flex flex-row border flex-grow relative">
                {/* list order */}
                <div className="border width-1/4">
                    <OrderList data={tableData} />
                </div>

                {/* sisha */}
                <div className="border w-3/4">
                    <MenuList />
                </div>
            </div>
        </>
    );
}
