import { useSelector } from "react-redux";
import EditableProfileCard from "../../components/EditableProfileCard";

const ProfilePage = () => {

  // const account = useSelector((state) => state.account)

  return (
    <div style={{width: '80vw', margin: 'auto'}}>
      <EditableProfileCard />
    </div>
  )
}

export default ProfilePage;