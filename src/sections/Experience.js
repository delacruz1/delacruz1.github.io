import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

const Experience = () => {
  document.title = "Experience | Josh Dela Cruz";

  return (
    <div className="experience">
      <Card
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          bgcolor: "primary.dark",
          minHeight: { xs: "100vh" },
        }}
      >
        <Typography
          variant="h4"
          align="Center"
          color="primary.contrastText"
          m={2}
          sx={{ textDecoration: "underline" }}
        >
          Skills
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="primary.contrastText"
          m={2}
        >
          <b>Programming Languages:</b> Javascript, Python, Java
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="primary.contrastText"
          m={2}
        >
          <b>Frameworks/Libraries/Platforms:</b> React, Angular, Spring,
          Bootstrap, Material UI
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="primary.contrastText"
          m={2}
        >
          <b>Databases:</b> SQL
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="primary.contrastText"
          m={2}
        >
          <b>UI/UX:</b> Figma, Adobe XD, Balsamiq, Prototyping
        </Typography>
        <Typography
          variant="h6"
          align="left"
          color="primary.contrastText"
          m={2}
        >
          <b>Tools/Operating Systems:</b> Git, XAMPP, Linux, Splunk
        </Typography>

        <Typography
          variant="h4"
          align="center"
          color="primary.contrastText"
          m={2}
          sx={{ textDecoration: "underline" }}
        >
          Experience
        </Typography>

        <List sx={{ color: "primary.contrastText" }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Infosys</b> - Cupertino, CA & Remote
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Associate Engineer
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>October 2020 - June 2021</b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Completed 500+ hours of training on full-stack development
                    using Java, Spring and Angular
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Ensured the delivery of requested data to hundreds of
                    client company's users as per the EU's General Data
                    Protection Regulation (GDPR)
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Managed hundreds of tickets for errors in system and
                    coordinated with appropriate departments to resolve issues
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    -Queried and analyzed client's Splunk logs to identify
                    errors in user requests to client's privacy control portal
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Vusar</b> - Irvine, CA & Remote
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Customer Lifecycle Management Intern
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Summer 2019 & Summer 2020</b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Utilized Amplitude to gather and analyze data on current
                    app users
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Expedited download rates for Vusar's mobile app by
                    implementing QR code feature on their web platform using
                    React
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Maintained Vusar's automated task infrastructure using
                    Segment.io
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Led 10+ engaging email campaigns using Customer.io to
                    retain Vusar's 100+ customer base
                  </Typography>
                </div>
              }
            />
          </ListItem>
        </List>

        <Typography
          variant="h4"
          align="center"
          color="primary.contrastText"
          m={2}
          sx={{ textDecoration: "underline" }}
        >
          Projects
        </Typography>

        <List sx={{ color: "primary.contrastText" }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Slow and Reverbifier</b>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Version 1 -{" "}
                    <Link
                      href="https://www.youtube.com/watch?v=9kxJ3-2BFtY"
                      color="secondary"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Latest Update: May 2022</b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Code:{" "}
                    <Link
                      href="https://github.com/delacruz1/slow-and-reverbifier"
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                    >
                      github.com/delacruz1/slow-and-reverbifier
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Technologies Used: Python, PyQT, Spotify Pedalboard
                    Library
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - GUI Program to slow down songs and add reverb to them
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Feature(s) to be added: Processing multiple audio files,
                    Drag and drop file(s), web app verison
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Pompom</b>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Version 1 -{" "}
                    <Link
                      href="https://pompom-a6452.web.app/"
                      color="secondary"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Latest Update: March 2022</b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Code:{" "}
                    <Link
                      href="https://github.com/delacruz1/pompom"
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                    >
                      github.com/delacruz1/pompom
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Technologies Used: React, Material UI, Firebase
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Pomodoro Timer made using React, Material UI and Firebase
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Feature(s) to be added: Keeping track of how many sessions
                    completed, Logging in w/ Google, Todo List Section
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Personal Website</b>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Version 2 - This Site!
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Latest Update: March 2022 </b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Code:{" "}
                    <Link
                      href="https://github.com/delacruz1/delacruz1.github.io"
                      target="_blank"
                      rel="noopener"
                      color="secondary"
                    >
                      github.com/delacruz1/delacruz1.github.io
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Technologies Used: React, Material UI, Github Pages
                  </Typography>
                </div>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <div>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Streak - Etch A Sketch</b>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    Finished -{" "}
                    <Link
                      href="https://joshdelacruz.com/streak"
                      color="secondary"
                      target="_blank"
                      rel="noopener"
                    >
                      Demo
                    </Link>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    color="primary.contrastText"
                  >
                    <b>Latest Update: December 2021 </b>
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Code:{" "}
                    <Link
                      href="https://github.com/delacruz1/streak"
                      color="secondary"
                      target="_blank"
                      rel="noopener"
                    >
                      github.com/delacruz1/streak
                    </Link>
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Technologies Used: Vanilla Javascript, HTML, CSS
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Etch-a-Sketch project made using Javascript.
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="primary.contrastText"
                    m={2}
                  >
                    - Project based on The Odin Project's Foundations in Web Dev
                    Course.
                  </Typography>
                </div>
              }
            />
          </ListItem>
        </List>
        <Typography
          variant="h4"
          align="center"
          color="primary.contrastText"
          m={2}
          sx={{ textDecoration: "underline" }}
        >
          Education
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="primary.contrastText"
          m={2}
        >
          <b>Bachelor's of Informatics, </b> University of California, Irvine
          '19 - Irvine, California
        </Typography>
      </Card>
    </div>
  );
};

export default Experience;
