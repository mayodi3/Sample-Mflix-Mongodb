import { Router } from "express";
import {
  filterGenres,
  getAllMovies,
  getSingleMovie,
} from "../controllers/moviesController.js";

const router = Router();

router.get("/", getAllMovies);
router.get("/:id", getSingleMovie);
router.post("/:genre", filterGenres);

export default router;
