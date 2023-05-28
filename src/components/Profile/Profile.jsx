import PropTypes from 'prop-types';
import {
  Card,
  Container,
  ParTag,
  ParUsername,
  ParLocation,
  List,
  Span,
} from './Profile.styled';


export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <Card>
    <Container>
      <img src={avatar} alt="User avatar" />
      <ParUsername>{username}</ParUsername>
      <ParTag>{tag}</ParTag>
      <ParLocation>{location}</ParLocation>
    </Container>

    <List>
      <li>
        <span>Followers</span>
        <Span>{followers}</Span>
      </li>
      <li>
        <span>Views</span>
        <Span>{views}</Span>
      </li>
      <li>
        <span>Likes</span>
        <Span>{likes}</Span>
      </li>
    </List>
  </Card>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
