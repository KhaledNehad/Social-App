import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExp = ({
  experience: { company, title, location, current, to, from, description }
}) => {
  return (
    <Fragment>
      <div>
        <h3 class='text-dark'>{company}</h3>
        <p>
          <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
          {!to ? <span> Now</span> : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>
        <p>
          <strong>Position: </strong>
          {title}
        </p>
        <p>
          <strong>Description: </strong> {description}
        </p>
      </div>
    </Fragment>
  );
};
ProfileExp.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExp;
