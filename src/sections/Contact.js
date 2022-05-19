import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Contact = () => {
  document.title = "Contact | Josh Dela Cruz";

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
            variant="h4"
            color="primary.contrastText"
            sx={{ textDecoration: "underline" }}
            gutterBottom
          >
            Email 
          </Typography>
          <Typography variant="h5" color="primary.contrastText" gutterBottom>
            jdelacr123@gmail.com
          </Typography>
          <Typography
            variant="h4"
            color="primary.contrastText"
            sx={{ textDecoration: "underline" }}
            gutterBottom
          >
            LinkedIn
          </Typography>
          <Typography variant="h5" color="primary.contrastText">
            linkedin.com/in/joshuadelacruz1
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
