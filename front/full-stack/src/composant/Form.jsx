
const Form = () => {
    return (
        <div className="border p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-bold">Mon Formulaire</h2>
            <input type="text" placeholder="Nom" className="border p-2 block mb-2" />
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
                Enregistrer
            </button>
        </div>
    );
}

export default Form;