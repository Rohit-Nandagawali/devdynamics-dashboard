import './UserCard.css'
import Avatar, { genConfig } from 'react-nice-avatar'
interface UserCardProps {
    developerName: string,

}
const UserCard: React.FC<UserCardProps> = ({ developerName }) => {


    const config = genConfig()
    return (
        <li className={`user-card`} title={developerName}>

            <Avatar className="user-image"  {...config} />

            <span className="user-name">{developerName}</span>
        </li>
    )
}

export default UserCard
