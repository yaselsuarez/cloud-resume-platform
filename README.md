🚀 Cloud Resume Platform
📌 Descripción

Este proyecto es una plataforma de ejemplo tipo Cloud Resume, diseñada para demostrar habilidades en desarrollo backend, contenerización y despliegue en Kubernetes siguiendo prácticas DevOps.

Incluye una API REST desarrollada en Node.js, containerizada con Docker y desplegada en un clúster Kubernetes (K3s), expuesta mediante Ingress y accesible desde dominios internos.

🧱 Arquitectura

La arquitectura del sistema es la siguiente:

API REST en Node.js
Contenerización con Docker
Orquestación con Kubernetes (K3s)
Exposición mediante Ingress Controller
Resolución DNS local con Pi-hole
⚙️ Tecnologías utilizadas
Node.js
Express
Docker
Kubernetes (K3s)
Traefik Ingress Controller
Pi-hole (DNS local)
Git / GitHub
📡 Endpoints de la API
🔹 GET /api/profile

Devuelve información del perfil en formato JSON:

{
  "name": "Yasel Suárez",
  "role": "DevOps Engineer",
  "skills": [
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Terraform"
  ]
}
🔹 GET /health

Endpoint de salud para Kubernetes:

{
  "status": "ok"
}

🐳 Docker

Construir imagen
docker build -t cloud-resume-api .
Ejecutar contenedor
docker run -p 3000:3000 cloud-resume-api
☸️ Kubernetes (K3s)

El proyecto incluye:

Deployment con replicas
Service tipo ClusterIP
Ingress para exposición externa
Health checks (liveness & readiness probes)
🌐 Acceso al servicio

La aplicación es accesible mediante DNS local:

http://api1.home/api/profile
http://api2.home/api/profile

📊 Características destacadas

Arquitectura basada en microservicios
Escalado con replicas en Kubernetes
Separación de capas (Ingress / Service / Pods)
Uso de DNS interno para simulación de entorno corporativo
Preparado para CI/CD (fase futura)

🚀 Estado del proyecto

✔ Backend completado
✔ Docker completado
✔ Kubernetes completado
✔ Ingress configurado
🟡 HTTPS (fase siguiente)
🟡 CI/CD (pendiente)
🟡 Monitorización (pendiente)

🎯 Objetivo

Este proyecto simula un entorno real de producción para demostrar habilidades en:

Desarrollo backend
DevOps
Cloud native applications
Kubernetes
Automatización de despliegues
