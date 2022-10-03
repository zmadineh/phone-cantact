import FormTemplate from "../component/FormTemplate";

const ContactPage = ({contact, setContact, formStatus}) => {

    return (
        <div>
            <FormTemplate contact={contact} setContact={setContact} formStatus={formStatus}/>
        </div>
    )
}

export default ContactPage;