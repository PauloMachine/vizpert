import md5 from "../utils/functions/md5";

// Keys estariam em um .env, coloquei aqui apenas para simplificar o processo
export const timeStamp = Date.now().toString();
export const publicKey = "afe311bdced6bc3d8ea44f61cb0f2f36";
const privateKey = "9fd08cd5658ebade17a5e1d04ee890cfa9162e50";
export const hash = md5(timeStamp + privateKey + publicKey);
