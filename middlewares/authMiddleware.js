import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";
import { verifyJWT } from "../utlits.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new UnauthenticatedError("authentication invalid.");
  }

  try {
    // const { userId, role } = verifyJWT(token);
    const { userId } = verifyJWT(token);
    req.user = { userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid.");
  }
};

export const authenticateAdmin = async (req, res, next) => {
  const isAdmin = req.user.role === "admin";
  if (!isAdmin) {
    throw new UnauthorizedError("Unauthorized to access this route");
  }
  next();
};

export const checkIsTestUser = (req, res, next) => {
  if (req.user.isTestUser) {
    throw new BadRequestError("Demo User, Read Only.");
  }

  next();
};
