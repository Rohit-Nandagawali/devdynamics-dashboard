import './UserCard.css'
interface UserCardProps {
    classnames?: string;
}
export const UserCard: React.FC<UserCardProps> = ({ classnames }) => {
    return (
        <li>
            <div className={`user-card ${classnames ? classnames : ''}`}>
                <img src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330'} alt="User" className="user-image" />
                <span className="user-name">John Doe</span>
            </div>
        </li>
    )
}

