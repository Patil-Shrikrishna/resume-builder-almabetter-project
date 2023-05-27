import { Box, Button, Input, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import AddIcon from "@mui/icons-material/Add";

const Work = ({ register, errors, childSX, parentSX, control }) => {
  // const [components, setComponents] = useState([]);

  const [jobDesc, setJobDesc] = useState([0]);

  const jobDescription = () => {
    setJobDesc([...jobDesc, jobDesc.length]);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "exp",
  });

  if (fields.length === 0) fields.push("");

  return (
    <Box>
      {fields.map((field, index) => (
        <Box
          key={field.id}
          borderBottom={1}
          borderColor={"#c2c2c2"}
          pb={2}
          mb={2}
        >
          <Typography variant="h6">Experience {index + 1}</Typography>
          {/* title  */}
          <Box sx={parentSX}>
            <Box sx={childSX}>
              <label htmlFor="JobTitle">Job Title</label>
              <Input
                type="text"
                id="JobTitle"
                placeholder="eg. Software Engineer"
                {...register(`work.${index}.jobTitle`, {
                  required: true,
                  maxLength: 80,
                })}
              />
            </Box>
            <Box sx={childSX}>
              <label htmlFor="Orgnization">Orgnization</label>
              <Input
                type="text"
                placeholder="Orgnization"
                id="Orgnization"
                {...register(`work.${index}.orgnization`, {
                  required: true,
                  maxLength: 80,
                })}
              />
            </Box>
          </Box>

          {/* jd */}

          {/* <Box flex={"flex"} alignItems={"center"}>
            <Box>
              {fields.map((field, index) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "space-between",
                    mt: 3,
                  }}
                  key={field.id}
                >
                  <Box width={"100%"}>
                    <label htmlFor={`profile_description_${field}`}>
                      Profile Description-{index + 1}
                    </label>
                    <TextField
                      id={`profile_description_${field}`}
                      fullWidth
                      multiline
                      size="large"
                      placeholder="profile description."
                      {...register(`work.description.${field}`, {
                        required: "job description is required",
                      })}
                      // error={!!errors.email}
                      // helperText={errors.email?.message}
                    />
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        color: "red",
                        mb: 1,
                        ":hover": {
                          background: "none",
                        },
                      }}
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <HighlightOffIcon sx={{ fontSize: 25 }} />
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box>
              <Button
                onClick={() => {
                  append({ name: "test2" });
                }}
              >
                Add Description
              </Button>
            </Box>
          </Box> */}

          {/* years */}

          <Box sx={parentSX}>
            <Controller
              control={control}
              name={`work.${index}.start_year`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Box sx={childSX}>
                  <label htmlFor="start_year">Start Year</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      views={["year"]}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  </LocalizationProvider>
                </Box>
              )}
            />
            <Controller
              control={control}
              name={`work.${index}.end_year`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Box sx={childSX}>
                  <label htmlFor="end_year">End Year</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      views={["year"]}
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                    />
                  </LocalizationProvider>
                </Box>
              )}
            />
          </Box>

          {
            <Box display={index === 0 && "none"}>
              <Button
                // disabled={index === 0}
                onClick={() => {
                  remove(index);
                }}
              >
                Remove
              </Button>
            </Box>
          }
        </Box>
      ))}

      <Box mt={2} textAlign={"center"}>
        <Button
          sx={{ fontSize: 16 }}
          onClick={() => {
            append({ expe: "" });
          }}
        >
          {/* <AddIcon
            sx={{ color: "#fff", bgcolor: "#1976d2", borderRadius: "50%" }}
          /> */}
          Add Experience
        </Button>
      </Box>
    </Box>
  );
};

export default Work;
