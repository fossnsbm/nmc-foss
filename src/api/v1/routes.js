import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello API V1");
});

export default router;
