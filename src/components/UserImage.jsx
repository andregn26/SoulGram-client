import { Box } from "@mui/material"

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`https://dull-rose-lemur-coat.cyclic.app/assets/${image}`}
        width={size}
        height={size}
        alt="user"
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </Box>
  )
}

export default UserImage
