import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Experience = () => {
  return (
    <div className="contact">
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
          <Typography
            variant="h3"
            color="primary.contrastText"
            gutterBottom
          >
            Section Under Construction
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
