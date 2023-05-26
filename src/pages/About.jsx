import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import AboutImg from "../assets/about.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    id: 1,
    goto: "https://facebook.com",
    icon: <FacebookIcon htmlColor="#3b5998" fontSize="large" />,
  },
  {
    id: 2,
    goto: "https://linkedin.com",
    icon: <LinkedInIcon htmlColor="#0077B5" fontSize="large" />,
  },
  {
    id: 3,
    goto: "https://whatsapp.com",
    icon: <WhatsAppIcon htmlColor="#128C7E" fontSize="large" />,
  },
  {
    id: 4,
    goto: "https://twitter.com",
    icon: <TwitterIcon htmlColor="#1da1f2" fontSize="large" />,
  },
  {
    id: 5,
    goto: "https://gmail.com",
    icon: <EmailIcon htmlColor="grey" fontSize="large" />,
  },
];

function About() {
  return (
    <Container
      style={{
        padding: "0 1rem 2rem",
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat( auto-fit, minmax(288px, 1fr) )"
        alignItems={"center"}
        gap={2}
      >
        <Box>
          <Box>
            <Typography variant="h2" fontWeight="bold">
              Resume{" "}
            </Typography>
            <Typography variant="h2" fontWeight="bold">
              <span className="underline">Builder</span>
            </Typography>
            <Box overflow={"hidden"}>
              <svg height="30" width="400">
                <path
                  d="M 0 10 q 100 10 150 1"
                  stroke="#2F58CD"
                  stroke-width="3"
                  fill="none"
                />
                <path
                  d="M 0 10 q 100 12 150 1"
                  stroke="#2F58CD"
                  stroke-width="3"
                  fill="none"
                />
                <path
                  d="M 0 10 q 100 14 150 1"
                  stroke="#2F58CD"
                  stroke-width="3"
                  fill="none"
                />
                <path
                  d="M 0 10 q 100 16 150 1"
                  stroke="#2F58CD"
                  stroke-width="3"
                  fill="none"
                />
                <path
                  d="M 0 10 q 100 18 150 1"
                  stroke="#2F58CD"
                  stroke-width="3"
                  fill="none"
                />
              </svg>
            </Box>
          </Box>

          <Box
            fontStyle="oblique"
            marginTop={2}
            fontWeight={"bold"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            textAlign={"justify"}
          >
            <Typography fontWeight={500} lineHeight={"1.6rem"}>
              As the job market becomes increasingly competitive, having a
              well-crafted and professional resume is more important than ever.
              That's where our resume builder website comes in. We understand
              that creating a standout resume can be daunting, which is why
              we've developed an easy-to-use platform that streamlines the
              process.
            </Typography>
            <Typography fontWeight={500} lineHeight={"1.6rem"}>
              Our website offers a variety of templates and customizable designs
              to suit your individual needs and preferences. Whether you're a
              recent graduate looking to land your first job or a seasoned
              professional seeking a career change, we've got you covered.
            </Typography>
            <Typography fontWeight={500} lineHeight={"1.6rem"}>
              With our user-friendly interface, you can quickly and easily input
              your personal information, work experience, education, and skills,
              and watch as our platform transforms your information into a sleek
              and polished resume. Our intuitive design ensures that your resume
              will look professional and impressive to potential employers,
              helping you stand out from the crowd.
            </Typography>
            <Typography fontWeight={500} lineHeight={"1.6rem"}>
              So why wait? Sign up for our resume builder website today and take
              the first step towards landing the job of your dreams.
            </Typography>
          </Box>
        </Box>
        <Box textAlign={"center"}>
          <img
            width={"100%"}
            style={{ transform: "scaleX(-1)" }}
            src={AboutImg}
            alt="About"
          />
        </Box>
      </Box>

      <Box>
        <Typography marginTop={5} variant="h5" fontWeight={"bold"}>
          Share with your friends
        </Typography>

        <List
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
            padding: " 1rem  0  0",
          }}
        >
          {socialLinks.map((social) => {
            return (
              <ListItem
                key={social.id}
                style={{ width: "auto" }}
                disablePadding
              >
                <Link to={social.goto} target="_blank">
                  <ListItemIcon
                    style={{
                      minWidth: "auto",
                      background: "#eee",
                    }}
                  >
                    {social.icon}
                  </ListItemIcon>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default About;