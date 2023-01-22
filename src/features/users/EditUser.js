import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../store/store";

const EditUser = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.users);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = data.filter((value) => {
    return value.id === Number(id);
  });
  const { name, email } = currentUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(editUser({ name: values.name, email: values.email, id: Number(id)}))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Insert a name here" }}
      />
      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "email@example.com" }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
