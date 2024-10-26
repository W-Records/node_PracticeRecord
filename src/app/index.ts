import express from "express";

const app = express();

app.use(express.json());

// 默认导出
export default app;