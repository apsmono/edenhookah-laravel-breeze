import { useEffect, useState } from "react";

const shishaOptions = [
    {
        id: 1,
        name: "SHISHA Platinum",
        price: 10000,
    },
    {
        id: 2,
        name: "SHISHA Gold",
        price: 20000,
    },
    {
        id: 3,
        name: "SHISHA Elite",
        price: 30000,
    },
];

const recipesOptionsList = {
    bowl: {
        brand: [],
        model: [],
    },
    hookah: {
        brand: [],
        model: [],
    },
    tobacco: {
        brand: [],
        flavour: [],
        percentage: [],
    },
};

export default function MenuList() {
    const shisha = shishaOptions;
    const recipesOptions = recipesOptionsList;
    const recipes = [
        { id: "bowl", displayName: "Bowl" },
        { id: "hookah", displayName: "Hookah" },
        { id: "tobacco", displayName: "Tobacco" },
    ];
    const [tempData, setTempData] = useState({
        shisha: {},
        recipes: {
            bowl: "asd",
            hookah: "",
            tobacco: "",
        },
    });

    function ShishaMenu({ label, data, onClick }) {
        return (
            <button onClick={() => onClick(label, data)}>
                <div
                    className="border mb-4 p-5 align-middle justify-center text-center"
                    style={{
                        height: "100px",
                        width: "200px",
                    }}
                >
                    <div>{data.name}</div>
                    <div>Rp. {data.price}</div>
                </div>
            </button>
        );
    }

    function RecipeMenu({ id, label, data, onClick }) {
        return (
            <div
                className="border text-center mb-3"
                style={{
                    width: "100px",
                    minHeight: "30px",
                }}
            >
                <div className="border w-full py-2 px-2 bg-green-900">
                    <h1>{label}</h1>
                </div>
                {/* {data && (
                    <div className="w-full px-2 py-1">
                        <h1>{data}</h1>
                    </div>
                )} */}
            </div>
        );
    }

    const handleChange = (name, value) => {
        setTempData({ ...tempData, [name]: value });
    };

    useEffect(() => {
        console.log("update", tempData);
    }, [tempData]);

    return (
        <div className="w-full relative flex flex-row h-screen">
            {/* shisha option */}
            <div className="flex flex-col  w-1/3 justify-center items-center">
                {shisha.map((item) => {
                    return (
                        <ShishaMenu
                            key={item.id}
                            data={item}
                            label="shisha"
                            onClick={handleChange}
                        />
                    );
                })}
            </div>

            {/* recipes */}
            <div className="border w-1/3 flex flex-col justify-center items-center">
                {!!tempData.shisha &&
                    recipes.map((key) => {
                        return (
                            <RecipeMenu
                                id={key.id}
                                label={key.displayName}
                                data={tempData.recipes[key.id]}
                            />
                        );
                    })}
            </div>

            {/* recipes options */}
            <div className="border w-1/3 flex flex-col justify-center items-center">
                <RecipeOption />
            </div>

            {/* button */}
            <div className="fixed right-5 bottom-5">
                <button
                    className="rounded-full bg-blue-600 px-5 py-3"
                    onClick={() => console.log("simpan")}
                >
                    simpan
                </button>
            </div>
        </div>
    );
}

function RecipeOption() {
    const options = [
        {
            id: "brand",
            displayName: "Brand",
        },
        {
            id: "model",
            displayName: "Model",
        },
    ];

    const optionsList = [
        "opsi 1",
        "opsi 2",
        "opsi 3",
        "opsi 4",
        "opsi 5",
        "opsi 6",
        "opsi 7",
        "opsi 8",
    ];

    const [show, setShow] = useState("");

    function OptionsList({ show }) {
        return (
            <>
                {show && (
                    <div
                        className="flex flex-col overflow-auto mb-4"
                        style={{ width: "150px", height: "100px" }}
                    >
                        {optionsList.map((item) => (
                            <button onClick={() => console.log(item)}>
                                <div>{item}</div>
                            </button>
                        ))}
                    </div>
                )}
            </>
        );
        return;
    }

    function clickHandle(idx) {
        if (idx === show) return setShow("");
        setShow(idx);
    }

    return (
        <>
            {options.map((item) => {
                return (
                    <>
                        <button onClick={() => clickHandle(item.id)}>
                            <div
                                className="flex border py-2 px-3 mb-3 justify-center items-center"
                                style={{
                                    width: "150px",
                                    height: "50px",
                                }}
                            >
                                <h4>{item.displayName}</h4>
                            </div>
                        </button>

                        <OptionsList show={item.id === show} />
                    </>
                );
            })}
        </>
    );
}

function DropDown() {
    return (
        <div class="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    Options
                    <svg
                        class="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
            <div
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
            >
                <div class="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <a
                        href="#"
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-0"
                    >
                        Account settings
                    </a>
                    <a
                        href="#"
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-1"
                    >
                        Support
                    </a>
                    <a
                        href="#"
                        class="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-2"
                    >
                        License
                    </a>
                    <form method="POST" action="#" role="none">
                        <button
                            type="submit"
                            class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-3"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
