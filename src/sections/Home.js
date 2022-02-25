import "./sections.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import headshot from "../assets/IMG_9775.jpg";
import Typography from "@mui/material/Typography";

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
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
