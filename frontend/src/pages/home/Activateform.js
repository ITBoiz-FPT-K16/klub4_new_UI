import DotLoader from "react-spinners/DotLoader";

const Activateform = ({type,header,text,loading}) => {
  return (
    <div className="blur">
        <div className="popup">
            <div className={`popup_header ${type === 'success' ? 'success_text' : 'error_text'}`}>
                {header}
            </div>
            <div className="popup_message">
                {text}
            </div>
        <DotLoader color="1876f2" size={30} loading={loading}/>
        </div>
    </div>
  )
}
export default Activateform