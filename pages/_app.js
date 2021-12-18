import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/resets";
import theme from "../styles/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                filter: `blur(10px)`,
              },
              pageAnimate: {
                filter: `blur(0px)`,
                transition: {
                  duration: 0.5,
                },
              },
              pageExit: {
                filter: `blur(10px)`,
                transition: {
                  duration: 0.5,
                },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
