import { Box, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTruck, faUsers, faHeart } from '@fortawesome/free-solid-svg-icons';

const CounterSection = () => {
  return (
    <>
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(rgba(25, 64, 154, 0.9), rgba(25, 64, 154, 1)), url("../../Vendors/image/fact-bg.jpg")',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingY: 5,
        marginY:3,
      }}
    >
      <div className="container py-5">
        <Grid container spacing={5}>
          {/** Counter Item 1 */}
          <Grid item xs={12} sm={6} lg={3}>
            <Box className="counter-item text-center">
              <Box
                className="counter-item-icon mx-auto"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faThumbsUp} size="3x" className="text-white" />
              </Box>
              <Typography variant="h4" className="text-white my-4">Happy Clients</Typography>
              <Box className="counter-counting d-flex justify-content-center align-items-center">
                <Typography variant="h4" className="text-white fw-bold">456</Typography>
                <Typography variant="h3" className="fw-bold text-white ms-2">+</Typography>
              </Box>
            </Box>
          </Grid>

          {/** Counter Item 2 */}
          <Grid item xs={12} sm={6} lg={3}>
            <Box className="counter-item text-center">
              <Box
                className="counter-item-icon mx-auto"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faTruck} size="3x" className="text-white" />
              </Box>
              <Typography variant="h4" className="text-white my-4">Transport</Typography>
              <Box className="counter-counting d-flex justify-content-center align-items-center">
                <Typography variant="h4" className="text-white fw-bold">513</Typography>
                <Typography variant="h3" className="fw-bold text-white ms-2">+</Typography>
              </Box>
            </Box>
          </Grid>

          {/** Counter Item 3 */}
          <Grid item xs={12} sm={6} lg={3}>
            <Box className="counter-item text-center">
              <Box
                className="counter-item-icon mx-auto"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faUsers} size="3x" className="text-white" />
              </Box>
              <Typography variant="h4" className="text-white my-4">Employees</Typography>
              <Box className="counter-counting d-flex justify-content-center align-items-center">
                <Typography variant="h4" className="text-white fw-bold">53</Typography>
                <Typography variant="h3" className="fw-bold text-white ms-2">+</Typography>
              </Box>
            </Box>
          </Grid>

          {/** Counter Item 4 */}
          <Grid item xs={12} sm={6} lg={3}>
            <Box className="counter-item text-center">
              <Box
                className="counter-item-icon mx-auto"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: '#0d6efd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FontAwesomeIcon icon={faHeart} size="3x" className="text-white" />
              </Box>
              <Typography variant="h4" className="text-white my-4">Years Experience</Typography>
              <Box className="counter-counting d-flex justify-content-center align-items-center">
                <Typography variant="h4" className="text-white fw-bold">17</Typography>
                <Typography variant="h3" className="fw-bold text-white ms-2">+</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  </>
  )
};

export default CounterSection;
