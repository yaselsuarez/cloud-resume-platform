const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint principal
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Yasel Suárez",
    role: "DevOps Engineer",
    skills: [
      "Linux",
      "Docker",
      "Kubernetes (K3s)",
      "CI/CD",
      "Terraform"
    ]
  });
});

// Endpoint de salud (MUY importante en Kubernetes)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime()
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
