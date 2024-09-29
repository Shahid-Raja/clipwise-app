import { Grid, Button, Typography, Box } from "@mui/material";

const MainComponent = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: "20px",
        backgroundColor: "blue",
         height:"92vh",
      }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Subheading
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Button 1
            </Button>
            <Button variant="outlined" color="secondary">
              Button 2
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="350px"
          width="350px"
          style={{ border: "1px solid #ddd", padding: "20px" }}
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Sample"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export { MainComponent };
