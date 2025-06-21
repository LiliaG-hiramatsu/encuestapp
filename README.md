# 🗳️ EncuestApp - Fullstack App con CI/CD, GitOps y Kubernetes

Este proyecto es una aplicación web fullstack desarrollada con **React**, **Node.js + Express** y **MongoDB**, empaquetada en una sola imagen Docker y desplegada automáticamente en un clúster de Kubernetes usando **Jenkins**, **Helm** y **ArgoCD** siguiendo las mejores prácticas de **DevOps** y **GitOps**.

## 🚀 Tecnologías utilizadas

### 🔧 Backend
- Node.js + Express
- MongoDB (Mongo Atlas)
- Variables de entorno inyectadas con `Secret`

### 🎨 Frontend
- React (Vite)
- Build optimizado para producción

### 📦 Contenedor
- Imagen unificada: React + Express en un solo contenedor
- Docker multi-stage build
- Servidor Express sirve archivos estáticos del frontend + API REST

### ☸️ Infraestructura
- Kubernetes (manifiestos + Helm)
- NGINX Ingress Controller
- Harbor como registro de imágenes
- Jenkins para CI
- ArgoCD para CD automatizado
- Helm para empaquetado del despliegue

## 📁 Estructura del proyecto

```
encuestapp/
├── backend/            # Código de Express y conexión a MongoDB
│   ├── app.js
│   ├── [www.js](http://www.js)          # Punto de entrada principal del servidor
├── frontend/           # App React (Vite)
│   ├── src/
│   └── ...
├── Dockerfile          # Imagen unificada multi-stage (build + serve)
├── k8s/        # YAMLs de K8s para despliegue manual o con Helm
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   └── secret.yaml
├── helm/               # Helm Chart
│   ├── Chart.yaml
│   ├── values.yaml
│   └── templates/
└── Jenkinsfile         # Pipeline CI para build, test y push
```

## ⚙️ Despliegue manual (Minikube)

1. **Habilitar Ingress**:

```bash
minikube addons enable ingress
minikube tunnel
````

2. **Aplicar manifiestos**:

```bash
kubectl apply -f k8s/
```

3. **Agregar dominio local (Windows)**:

Agregar en `C:\Windows\System32\drivers\etc\hosts`:

```
<minikube-ip> encuestapp.com
```

4. **Acceder en el navegador**:

```
http://encuestapp.com
```

## 🧪 CI/CD Pipeline

### 🔨 Jenkins

* `Jenkinsfile` realiza:

  * Build de imagen
  * Push a Harbor (`lilo2024/pipeline-prueba:latest`)
  * Actualización de versión en `values.yaml`

### 🚢 ArgoCD

* Observa cambios en el repositorio Git (modo GitOps)
* Aplica automáticamente el Helm Chart en el clúster

## 🔐 Variables de entorno

Las variables sensibles como la URI de Mongo se cargan mediante Kubernetes Secrets:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: miapp-secret
type: Opaque
data:
  MONGO_URI: <base64>
```

Y se inyectan en el `Deployment` como `env`.

## 📦 Imagen Docker

### Multi-stage para build + serve

* Etapa 1: compila React (`npm run build`)
* Etapa 2: sirve React desde Express (copiado a `/public`)
* Backend sirve en `8080`, y enruta `/api` hacia las rutas de Express.

### Comando de ejecución:

```dockerfile
CMD ["node", "www.js"]
```

## 📌 Notas finales

* Asegurate de que `www.js` conecte a `process.env.LINK_DB` (si lo usás así) o ajustalo para `MONGO_URI`.
* Si desplegás en clúster real, configurá DNS público para `encuestapp.com` y certificados TLS (Let's Encrypt + cert-manager).

## ✨ Créditos

Proyecto desarrollado por NimbusOps.
Automatización y despliegue siguiendo buenas prácticas de DevOps y GitOps.
