import React, { useState } from "react";
import ModelCreateUser from "./ModelCreateUser";
import "./ManagerUser.scss";
import { CgAdd } from "react-icons/cg";

const ManagerUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>

      <div className="users-content">
        <div>
          <button
            className="btn-add-new btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <CgAdd />
            Add New User
          </button>
        </div>
        <div className="table-users-container">tables users</div>
        <ModelCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManagerUser;
