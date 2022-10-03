
const FormInput = ({input, handleChange, form, formStatus}) => {
    return (
        <div>
            <h4>{input.title}</h4>
            <input key={input.name} className='form_input' onChange={handleChange} name={input.name} value={form[input.name]} style={{marginRight: '20px'}} disabled={formStatus === 'Show'}/>
        </div>
    )
}

export default FormInput;