import React, { useEffect } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, removeUser } from "../../store/store";

import { ReactComponent as Edit } from "../../assets/icons/edit_icon.svg";
import { ReactComponent as Delete } from "../../assets/icons/delete_icon.svg";

const UserList = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  //console.log(users);
  const handleRemoveUser = (id) => {
    dispatch(removeUser({ id }));
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const renderCard = () =>
    data.map((user) => (
      <div
        key={user.id}
        className="bg-gray-300 p-5 flex items-center justify-between"
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <Edit />
            </button>
          </Link>
          <button onClick={() => handleRemoveUser(user.id)}>
            <Delete />
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>

      <div className="grid gap-5 md:grid-cols-2">
        {data.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No user
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
