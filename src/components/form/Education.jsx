import { Box, Input } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import React from "react";
import { Controller } from "react-hook-form";

const Education = ({ register, errors, childSX, parentSX, control }) => {
  return (
    <Box>
      <Box sx={childSX}>
        <label htmlFor="EduType">Type</label>
        <Input
          type="text"
          id="EduType"
          placeholder="eg. Formal Education"
          {...register("education.Type", {
            required: true,
          })}
        />
      </Box>
      {/* college  */}
      <Box sx={parentSX}>
        <Box sx={childSX}>
          <label htmlFor="University">University</label>
          <Input
            id="University"
            type="text"
            placeholder="eg. University of Glasgow"
            {...register("education.University", {
              required: true,
            })}
          />
        </Box>
        <Box sx={childSX}>
          <label htmlFor="Degree">Degree</label>
          <Input
            type="text"
            id="Degree"
            placeholder="eg. MCA"
            {...register("education.Degree", {
              required: true,
              maxLength: 80,
            })}
          />
        </Box>
      </Box>
      {/* Year  */}

      <Box sx={parentSX}>
        <Controller
          control={control}
          name="education.EduStartYear"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Box sx={childSX}>
              <label htmlFor="EduStartYear">Start Year</label>
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
          name="education.EduEndYear"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Box sx={childSX}>
              <label htmlFor="EduEndYear">End Year</label>
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
    </Box>
  );
};

export default Education;
