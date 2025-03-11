import React from "react";
import ModelCreateUser from "./ModelCreateUser";
import "./ManagerUser.scss"
const ManagerUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>

      <div className="users-content">
        <div>
          <ModelCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManagerUser;
