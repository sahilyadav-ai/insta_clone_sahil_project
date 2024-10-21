import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config({});

cloudinary.config({
    cloud_name:  'dc2ulb6jb',
    api_key:  "936951827932364",
    api_secret:  'l_L_WKBwnl6lmYX3-j98u4QLm4Y'
});
export default cloudinary;