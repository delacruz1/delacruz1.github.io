import "./sections.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import headshot from "../assets/IMG_9775.jpg";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Home = () => {
  document.title = "Home | Josh Dela Cruz";
  return (
    <div className="home">
      <Card
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "primary.dark",
        }}
      >
        <CardContent>
          <Avatar
            alignItems="center"
            alt="Josh Dela Cruz"
            src={headshot}
            sx={{
              margin: "auto",
              width: 200,
              height: 200,
              border: "1px solid black",
            }}
          ></Avatar>
          <Typography variant="h4" color="primary.contrastText">
            Josh Dela Cruz
          </Typography>
          <Typography variant="h6" color="primary.contrastText">
            Software Engineer | Creative | Learner
          </Typography>
          <Typography variant="h6" color="primary.contrastText">
            Based in the Bay Area
          </Typography>
          <Typography variant="h6" color="primary.contrastText">
            <Link
              href="https://docs.google.com/document/d/1BOIP89uVt_z9GaZP-14vzUFgRCg9qYfIFfS1YCRRbnA/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              Resume
            </Link>{" "}
            //{" "}
            <Link
              href="https://github.com/delacruz1/"
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              Github
            </Link>{" "}
            //{" "}
            <Link
              href="https://linkedin.com/in/joshuadelacruz1"
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              LinkedIn
            </Link>{" "}
            //{" "}
            <Link
              href="https://medium.com/@jdelacr123"
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              Medium
            </Link>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
