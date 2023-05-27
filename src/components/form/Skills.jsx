import { Box, Button, TextField } from "@mui/material";
// import { MuiChipsInput } from "mui-chips-input";
import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Skills = ({ register, control, errors, childSX, parentSX }) => {
  // const [skills, setSkills] = useState();

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "skill",
  });

  return (
    <Box>
      {fields.map((field, index) => (
        <Box
          key={field.id}
          display={"flex"}
          alignItems={"end"}
          justifyContent={"space-between"}
        >
          {field.skill[index]}
          <Box sx={childSX}>
            <label htmlFor={`skill_${index}`}>Skill No. {index + 1}</label>
            <TextField
              id={`skill_${index}`}
              // value={skills}
              // onChange={(newChips) => setSkills(newChips)}
              placeholder="Negotiation"
              {...register(`skills.${index}`, {
                required: true,
              })}
            />
          </Box>

          <Box mb={1} ml={1}>
            <Button
              sx={{
                minWidth: "max-content",
                ":hover": {
                  background: "none",
                },
              }}
              onClick={() => {
                remove(index);
              }}
            >
              <HighlightOffIcon />
            </Button>
          </Box>
        </Box>
      ))}

      <Box mb={1} ml={1}>
        <Button
          sx={{
            minWidth: "max-content",
            ":hover": {
              background: "none",
            },
          }}
          onClick={() => {
            append({ skill: "" });
          }}
        >
          Add new
        </Button>
      </Box>
    </Box>
  );
};

export default Skills;
