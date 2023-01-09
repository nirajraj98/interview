import { Box, Container, Heading, HStack, Stack } from '@chakra-ui/react'
// import { Tooltip } from 'react-tooltip'
import GitHubCalendar from "react-github-calendar";
import styles from "./GitStat.module.css"
function GitStat() {
  const colorTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <Box className={styles.stats} p={10}   alignItems="center">
      
  <Container  maxW={{base:'container.sm',sm:'container.lg',md:'container.md',lg:'container.lg'}} p={5}  centerContent >
    <Heading>Git Hub Stats</Heading>
    <Box className={styles.middleBox} >
     <Box align="left" ><img style={{width:"100%",height:"100%"}} align="center" src="https://github-readme-stats.vercel.app/api?username=nirajraj98&theme=shades-of-purple&show_icons=true&locale=en" alt="nirajraj98" /></Box>
     <Box align="left"><img style={{width:"100%",height:"100%"}} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=nirajraj98&theme=shades-of-purple" alt="nirajraj98" /></Box>
    </Box>

  </Container>
  </Box>
  )
}

export default GitStat