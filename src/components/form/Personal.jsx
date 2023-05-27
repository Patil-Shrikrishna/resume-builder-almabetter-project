import { Avatar, Box, Input, TextField, Typography } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";

const Personal = ({ register, errors, setError, childSX, parentSX }) => {
  const [image, setImage] = useState("");

  return (
    <Box>
      <Avatar
        src={image}
        sx={{ width: 100, height: 100 }}
        alt="Profile"
        id="avatar"
      />
      <Box mt={2}>
        <label
          htmlFor="profile"
          style={{ color: "#1976d2", cursor: "pointer", fontWeight: "500" }}
        >
          {image === "" ? "Upload Profile" : "Edit Profile"}
          {/* Edit Profile */}
        </label>
        <input
          accept="image/*"
          type="file"
          id="profile"
          hidden
          InputLabelProps={{
            shrink: true,
          }}
          {...register("personal.Profile", {
            required: true,
            onChange: (e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
            },
          })}
        />
      </Box>

      <Box sx={parentSX}>
        {/* Name Input  */}
        <Box sx={childSX}>
          <label htmlFor="">First Name</label>
          <TextField
            type="text"
            placeholder="John"
            {...register("personal.FirstName", {
              required: "This is required.",
              maxLength: 8,
            })}
          />
          <Typography color={"error"}>
            <ErrorMessage errors={errors} name="FirstName" />
          </Typography>
        </Box>

        <Box sx={childSX}>
          <label htmlFor="">Last Name</label>
          <TextField
            type="text"
            placeholder="Doe"
            {...register("personal.LastName", {
              required: true,
              maxLength: 100,
            })}
          />
        </Box>
      </Box>

      <Box sx={parentSX}>
        <Box sx={childSX}>
          <label htmlFor="">Email</label>

          <TextField
            type="email"
            placeholder="fake@gmail.com"
            {...register("personal.email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && errors.email.message}
        </Box>

        <Box sx={childSX}>
          <label htmlFor="">Mobile</label>
          <TextField
            type="tel"
            placeholder="+91 9876543210"
            {...register("personal.MobileNumber", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </Box>
      </Box>

      {/* Address  */}
      <Box sx={childSX}>
        <label htmlFor="">Address</label>
        <TextField
          type="text"
          placeholder="72 - New West"
          {...register("personal.Address", {
            required: true,
          })}
        />
      </Box>
      {/* City and State  */}

      <Box sx={parentSX}>
        <Box sx={childSX}>
          <label htmlFor="">City</label>
          <TextField
            type="text"
            placeholder="City"
            {...register("personal.City", {
              required: true,
            })}
          />
        </Box>

        <Box sx={childSX}>
          <label htmlFor="">State</label>
          <TextField
            type="text"
            placeholder="State"
            {...register("personal.State", {
              required: true,
            })}
          />
        </Box>
      </Box>

      <Box sx={childSX}>
        <label htmlFor="">Postal Code</label>
        <TextField
          type="number"
          placeholder="Postal Code"
          {...register("personal.PostalCode", {
            required: true,
          })}
        />
      </Box>

      <Box sx={childSX}>
        <label htmlFor="">Objective</label>
        <TextField
          fullWidth
          multiline
          size="large"
          placeholder="An eye-catching statement of your career intent that's placed on top of your resume."
          {...register("personal.Objective", {
            required: "email is required",
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Box>
    </Box>
  );
};

export default Personal;
