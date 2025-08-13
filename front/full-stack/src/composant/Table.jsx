import iconDelete from '../../public/images/delete.png';
import iconEdit from '../../public/images/edit.png';



const Table = () => {
    return <table>
        <thead className="bg-gray-500 py-0.5">
            <tr>
                <th className="text-white px-15">id</th>
                <th className="text-white px-15">Name</th>
                <th className="text-white px-15">Real Name</th>
                <th className="text-white px-15">Univers</th>
                <th className="text-white px-15">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white">
                <td className="py-2">1</td>
                <td className="py-2">naruto</td>
                <td className="py-2">naruto</td>
                <td className="py-2">Univers</td>
                <td className='flex gap-3 justify-center items-center py-2'>
                    <button className="border-2 border-green-500 border-solid rounded p-1">
                        <img src={iconEdit} alt="" className='w-5' />
                    </button>
                    <button className="border-2 border-red-500 border-solid rounded p-1">
                        <img src={iconDelete} alt="" className='w-5' />
                    </button>
                </td>
            </tr>
            <tr className="bg-gray-100">
                <td className="py-2">1</td>
                <td className="py-2">naruto</td>
                <td className="py-2">naruto</td>
                <td className="py-2">Univers</td>
                <td className='flex gap-3 justify-center items-center py-2'>
                    <button className="border-2 border-green-500 border-solid rounded p-1">
                        <img src={iconEdit} alt="" className='w-5' />
                    </button>
                    <button className="border-2 border-red-500 border-solid rounded p-1">
                        <img src={iconDelete} alt="" className='w-5' />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>


}
export default Table;