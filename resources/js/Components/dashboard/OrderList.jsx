export default function OrderList({ data }) {
    return (
        <div className="w-full h-screen overflow-auto relative py-4">
            {data.map((item) => {
                return <OrderCard key={item.orderID} data={item} />;
            })}
        </div>
    );
}

function OrderCard({ data }) {
    return (
        <div className="">
            <button onClick={() => console.log(data.orderID)}>
                <div className="border border-1 mx-3 my-2 py-4 px-5 grid grid-cols-2 mb-2 text-left">
                    {/* order ID */}
                    <div className="mr-4 w-full">No. Pesanan</div>
                    <div className="w-full">{data.orderID}</div>

                    {/* member name */}
                    <div className="mr-4">Nama</div>
                    <div className="w-full">{data.user.name}</div>

                    {/* member status */}
                    <div>Status</div>
                    <div className="w-full">{data.user.status}</div>
                    {/* table number */}
                    <div>No. Meja</div>
                    <div className="w-full">{data.tableID}</div>
                </div>
            </button>
        </div>
    );
}
