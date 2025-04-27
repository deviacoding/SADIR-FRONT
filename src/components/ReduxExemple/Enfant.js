import React from "react";
import { useSelector } from 'react-redux'

const Enfant = (props) => {
  // 1 
  const userInfoSecret = useSelector(state => state.userInfo.secret)


  return (
    <div>
      Enfant dit " papy m'a dit que : {userInfoSecret} ""

    </div>
  );
};

export default Enfant;
