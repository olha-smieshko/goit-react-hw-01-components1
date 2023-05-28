import { Item, SpanStatus } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <SpanStatus isOnline={isOnline} />
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
