import { Link } from "react-router-dom";
import { Box } from "@mui/material";

interface LogoProps {
  isDarkMode: boolean;
}

const Logo = ({ isDarkMode }: LogoProps): JSX.Element => {
  return (
    <Box sx={styles.box}>
      <Link to="/" style={styles.link}>
        <img
          src={`/images/logo-${isDarkMode ? "dark" : "light"}.jpg`}
          alt="Dunder Mifflin Logo"
          style={styles.img}
        />
      </Link>
    </Box>
  );
};

const styles: Record<string, React.CSSProperties> = {
  box: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    textDecoration: "none"
  },
  img: {
    width: "90px",
    marginTop: "5px",
    marginRight: "10px"
  },
};

export default Logo;
