import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ButtonGroup } from "@mui/material";
import { clubs } from "../../data/clubs";
const Profile = () => {
  const user = useSelector((state) => state.state.auth.currentUser);
  const image = clubs[0].coverImage;
  console.log("user", user);
  return (
    <div className="post" style={{ hover: "none" }}>
      <div className="post_header">
        <div className="">
          <div className="post_text">
            <strong>Your Profile</strong>
          </div>
          <div className="post_infos">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <img
                    src={user.avatar}
                    alt="profile"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: 200,
                    }}
                  />
                </div>
              </div>
              <div className="mt-8">
                <FormControl>
                  <InputLabel htmlFor="component-outlined">Name</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    defaultValue={user.name}
                    label="Name"
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-outlined">
                    Date of Birth
                  </InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    defaultValue={user.DOB}
                    label="Date of Birth"
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="component-outlined">Email</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    defaultValue={user.email}
                    label="Email"
                  />
                </FormControl>
                <ButtonGroup
                  sx={{
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  <Button variant="contained" color="success">
                    Update
                  </Button>
                  <Button variant="outlined" color="error">
                    Cancel
                  </Button>
                </ButtonGroup>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
