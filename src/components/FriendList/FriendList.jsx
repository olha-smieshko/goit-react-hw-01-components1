import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      ></FriendListItem>
    ))}
  </List>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
