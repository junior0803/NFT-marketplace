import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

/**
 * App Vairables
*/

if(!process.env.PORT) {
    process.exit(1)
}
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
app.get("/server", (req, res) =>{
    res.json({message:"Hello from server!!"})
})

app.listen(PORT, ()=>{
    console.log("Listening on port", PORT)
});
