export function IconBar() {
    return (
        <div className="mr-auto grid grid-cols-6 gap-4 " >
            <div className=" ml-[32px] col-start-1 col-end-1" style={{ height: "485px", borderLeft: "1px solid white" }}>
            </div>
            <div className="col-start-1 col-end-3" >
                <img src={"/public/assets/logo3.png"} />
            </div>
            <div className="ml-[32px] col-start-1 col-end-3" style={{ height: "485px", borderLeft: "1px solid white" }}>
            </div>
        </div>
    )
}