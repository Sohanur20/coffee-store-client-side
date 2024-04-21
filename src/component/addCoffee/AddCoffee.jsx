

const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0]">

            <div className="text-center pt-14 space-y-5">
                <h1 className="text-5xl font-normal">Add New Coffee</h1>
                <p className="text-lg text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
            </div>


            <section className="p-6">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12 lg:ml-40">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="Enter coffee name" className="text-sm">Name</label>
                                <input id="firstname" type="text" placeholder="Enter coffee name" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Chef</label>
                                <input id="lastname" type="text" placeholder="Enter coffee chef" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="" className="text-sm">Supplier</label>
                                <input id="" type="text" placeholder="Enter coffee supplier" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="" className="text-sm">Taste</label>
                                <input id="" type="text" placeholder="Enter coffee taste" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="" className="text-sm">Category</label>
                                <input id="" type="text" placeholder="Enter coffee category" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="" className="text-sm">Details</label>
                                <input id="" type="text" placeholder="Enter coffee details" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="" className="text-sm">Photo</label>
                                <input id="" type="text" placeholder="Enter photo URL" className="w-full rounded-md p-2" />
                            </div>
                            <div className="col-span-full">

                                <input id="" type="Submit" value="Add Coffee" className="w-full rounded-md p-2 btn bg-[#D2B48C]" />
                            </div>



                        </div>
                    </fieldset>

                </form>
            </section>
        </div>
    );
};

export default AddCoffee;