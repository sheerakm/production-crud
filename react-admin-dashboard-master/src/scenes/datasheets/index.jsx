import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";


const DataSheets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    

    <Box
    gridColumn="span 4"
    gridRow="span 2"
    backgroundColor={colors.primary[400]}
    overflow="auto"
  >
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`4px solid ${colors.primary[500]}`}
      colors={colors.grey[100]}
      p="15px"
    >
      <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
        Transactions
      </Typography>

      <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
    </Box>
    {mockTransactions.map((transaction, i) => (
      <Box
        key={`${transaction.txId}-${i}`}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        p="15px"
      >
        <Box>
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            {transaction.txId}
          </Typography>
          <Typography color={colors.grey[100]}>
            {transaction.user}
          </Typography>
        </Box>
        <Box color={colors.grey[100]}>{transaction.date}</Box>
        <Box
          backgroundColor={colors.greenAccent[500]}
          p="5px 10px"
          borderRadius="4px"
        >
          ${transaction.cost}
        </Box>
      </Box>
    ))}
  </Box>


  )


};



export default DataSheets;