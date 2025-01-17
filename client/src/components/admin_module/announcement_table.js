import edit_icon from "../../images/edit_FILL0_wght400_GRAD0_opsz48.png";
import delete_icon from "../../images/delete_FILL0_wght400_GRAD0_opsz48.png";

const AnnouncementTable = ({ viewAnnouncement, editAnnounce, checkDeleteAnnounce }) => {

    return (
        <>
        <tr className="winAtt_viewStudent_table_body-b announce-tb-body">
            <td>{viewAnnouncement.type}</td>
            <td>{viewAnnouncement.name}</td>
            <td>{viewAnnouncement.date}</td>
            <td>{viewAnnouncement.time}</td>
            <td>{viewAnnouncement.place}</td>
            <td>
                <button className="windowAttendance_notify">
                    <img src={edit_icon} alt="edit" 
                    onClick={event => {editAnnounce(event, viewAnnouncement._id)}}
                    >
                    </img>
                </button>
                <button className="windowAttendance_notify">
                    <img src={delete_icon} alt="delete" 
                    onClick={e => {checkDeleteAnnounce(e, viewAnnouncement._id)}}
                    >
                    </img>
                </button>
            </td>
        </tr>
        </>
    )
}

export default AnnouncementTable