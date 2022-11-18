
const MessageContainer = (props) => {
    //console.log(props.show)
    return (
        <div className={'message_container'} style={{display: props.show}}>
            {props.children}
        </div>
    )
}

export default MessageContainer;