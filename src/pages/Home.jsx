import {
    Button,
    Container,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";
import React from "react";
import Templete1 from "../assets/temp1.webp";
import Templete2 from "../assets/temp2.webp";
import Templete3 from "../assets/temp3.webp";
import Templete4 from "../assets/temp4.webp";
import { Link } from "react-router-dom";

const Home = () => {
    const tempImages = [
        {
            image: Templete1,
            goto: "/form",
        },
        {
            image: Templete2,
            goto: "/form",
        },
        {
            image: Templete3,
            goto: "/form",
        },
        {
            image: Templete4,
            goto: "/form",
        },
    ];

    return (
        <Container maxWidth="xl" component={"main"}>
            <Typography variant="h4">Templetes</Typography>
            <Typography>Select a Templete to get started</Typography>
            <ImageList
                gap={30}
                sx={{
                    marginTop: "3rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                }}
            >
                {tempImages.map((tempImage) => (
                    <ImageListItem
                        sx={{ maxWidth: "20rem", position: "relative" }}
                        key={tempImage.image}
                    >
                        <img
                            src={tempImage.image}
                            alt="Resume-Templete"
                            loading="lazy"
                            border="1px solid black"
                        />
                        <Button
                            id="selectTemplate"
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "10rem",
                            }}
                            variant="contained"
                            size="large"
                        >
                            <Link
                                to={tempImage.goto}
                                style={{ color: "white", textDecoration: "none" }}
                            >
                                Use Template
                            </Link>
                        </Button>
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default Home;
