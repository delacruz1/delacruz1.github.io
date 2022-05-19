import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import pic from "../assets/IMG_9847.jpg";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const About = () => {
  document.title = "About | Josh Dela Cruz";

  return (
    <div className="about">
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.dark",
          minHeight: { xs: "100vh" },
        }}
      >
        <Grid container m={2}>
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={pic}
              alt="Josh Dela Cruz"
              sx={{
                height: 500,
                width: 500,
                maxHeight: { xs: 200, sm: 400 },
                maxWidth: { xs: 200, sm: 400 },
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              Hi! I'm Josh Dela Cruz and I'm a full-stack software engineer
              based in the Bay Area. Currently I'm looking for my next
              opportunity in software engineering.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              I previously worked at Infosys where I did support work for one of
              their biggest clients. Before that, I wore multiple hats for two
              summers as an intern at Vusar, where I did customer lifecycle
              management as well as some front end work for the startup's
              augemented reality design tool. Prior to Vusar, I completed my
              Bachelor's in Informatics at UC Irvine in 2019.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              I'm interested in tech because I want to learn and create as much
              as I can. Using what I contribute to the field, I hope I can
              empower others and make a positive impact on people's lives.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              When I'm not working, I'm usually hanging out with friends, listening to/making music,
              reading books or playing video games. Some of my other hobbies include
              Pokemon card collecting and modding old Thinkpads. 
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="primary.contrastText"
              mb={2}
            >
              If you want to get in contact with me, feel free to reach out via{" "}
              <Link color="secondary" href="mailto:jdelacr123@gmail.com">
                email
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default About;
