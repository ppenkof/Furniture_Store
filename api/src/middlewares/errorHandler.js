import { getErrorMessage } from "../utils/errorUtils.js";

export function errorHandler(err, req, res, next) {
 
    const status = err.status || 500;
    const message = getErrorMessage(err) || 'Something went wrong!';
    res.status(status).json({ message });
}