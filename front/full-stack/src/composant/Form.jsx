import iconPlus from '../../public/images/plus.png'


const Form = () => {
    return <section className="w-full flex justify-center">
        <div className="flex flex-col justify-center items-center bg-blue-300 p-3 w-[350px]  rounded">
            <h3 className="text-white text-3xl font-bold">Add chracters</h3>
            <hr className='text-white w-16'/>
            <form action="" className="flex flex-col">
                <input type="text" placeholder="Enter your nickname" />
                <input type="text" placeholder="Enter your Realname" />
                <input type="text" placeholder="Enter your Universe" />
                <button className='bg-blue-600'>
                    <img src={iconPlus} alt="" />
                </button>
            </form>
        </div>
    </section>
}

export default Form;