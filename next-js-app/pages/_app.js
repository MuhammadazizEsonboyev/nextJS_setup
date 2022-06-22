import '../styles/globals.css'
import { nanoid } from "nanoid";

model.id = nanoid();
const MyApp = ({ Component, pageProps }) => {
return  <Component {...pageProps} />
}

export default MyApp
