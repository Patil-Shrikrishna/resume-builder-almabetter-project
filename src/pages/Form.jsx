import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { Navigate, useNavigate } from "react-router-dom";
import Personal from "../components/form/Personal";
import Work from "../components/form/Work";
import Education from "../components/form/Education";
import Skills from "../components/form/Skills";

const parentSX = {
  display: "flex",
  gap: "1rem",
  justifyContent: "space-between",
};
const childSX = {
  display: "flex",
  flexDirection: "column",
  marginTop: "3rem",
  width: "100%",
};

const Form = () => {
  const [form, setForm] = useState(0);

  const formSteps = [
    "Personal Info",
    "Work Experience",
    "Education",
    "Key Skills",
  ];

  const displayForm = () => {
    if (form === 0) {
      return (
        <Personal
          register={register}
          errors={errors}
          setError={setError}
          childSX={childSX}
          parentSX={parentSX}
          control={control}
        />
      );
    } else if (form === 1) {
      return (
        <Work
          register={register}
          errors={errors}
          childSX={childSX}
          parentSX={parentSX}
          control={control}
        />
      );
    } else if (form === 2) {
      return (
        <Education
          register={register}
          errors={errors}
          childSX={childSX}
          parentSX={parentSX}
          control={control}
        />
      );
    } else {
      return (
        <Skills
          register={register}
          errors={errors}
          childSX={childSX}
          parentSX={parentSX}
          control={control}
        />
      );
    }
  };

  const {
    register,
    setError,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  //   const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("data", data);
    // navigate("/preview");
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1115, // desktop
        xl: 1536, // large screens
      },
    },
  });

  return (
    <Box component={"main"}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              maxWidth: {
                xxs: 1100,
              },

              width: {
                xxs: "100%",
                lg: 300,
              },
            }}
          >
            <List
              sx={{
                display: "flex",
                flexDirection: {
                  // md: "row",
                  lg: "column",
                },
                overflowX: {
                  xxs: "scroll",
                  lg: "hidden",
                },
                width: {
                  xxs: "100%",
                },
                justifyContent: "center",
              }}
            >
              {formSteps.map((item, index) => {
                return (
                  <ListItem
                    sx={{
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                      mb: "2px",
                      textAlign: "center",

                      borderLeftColor: {
                        xxs: "transparent",
                        lg: index === form ? "primary.main" : "transparent",
                      },
                      borderBottomColor: {
                        xxs: index === form ? "primary.main" : "transparent",
                        lg: "transparent",
                      },
                      borderLeftStyle: {
                        xxs: "none",
                        lg: "solid",
                      },
                      borderBottomStyle: {
                        xxs: "solid",
                        lg: "none",
                      },
                      borderLeftWidth: {
                        xxs: 0,
                        lg: "0.2em",
                      },
                      borderBottomWidth: {
                        xxs: "0.2em",
                        lg: 0,
                      },
                    }}
                    key={item}
                  >
                    <Typography
                      color={index === form ? "primary.main" : "#777"}
                      fontWeight={index === form ? "500" : "400"}
                      textAlign={"center"}
                      marginX={"auto"}
                      p={".2rem 1.8rem"}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </ThemeProvider>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "700px",
            padding: "3rem",
            borderRadius: ".3rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
          }}
        >
          {
            <Typography variant="h4" fontWeight={600} mb={4}>
              {formSteps[form]}
            </Typography>
          }
          {displayForm()}

          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={4}
            mt={4}
          >
            <Button
              disabled={form === 0}
              variant="outlined"
              onClick={() => setForm((currentPage) => currentPage - 1)}
            >
              Back
            </Button>

            {form === formSteps.length ? (
              <Button type="submit" variant="contained">
                Submit
              </Button>
            ) : (
              <Button
                type={form === formSteps.length ? "submit" : "button"}
                variant="contained"
                onClick={() => {
                  form === 4
                    ? console.log("submit")
                    : setForm((currentPage) => currentPage + 1);
                }}
              >
                {form === formSteps.length - 1 ? "Submit" : "Next"}
              </Button>
            )}
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Form;
