import {
  Title,
  Section,
  List,
  Item,
  SpanLabel,
  SpanPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <SpanLabel>{label}</SpanLabel>
          <SpanPercentage>{percentage}%</SpanPercentage>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
