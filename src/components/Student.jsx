import React from "react";
const Student = ({ credentials }) => {
  return (
    <div>
      username: {credentials.username}
      <br />
      telephone: {credentials.telephone}
    </div>
  );
};

export default Student;
