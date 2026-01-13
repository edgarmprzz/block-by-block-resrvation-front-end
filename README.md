# block-by-block-resrvation-front-end

## 📦 Installation

1. **Clone this repository:** \
    **SSH:**
    ```bash
    git clone git@github.com:edgarmprzz/block-by-block-resrvation-front-end.git
    cd reservation-frontend
    ```

## Working Environment

## Local
2. **Using Node locally:** \
    ```npm run dev```

## Container
3. **Build image:** \
   **Podman:**
    ```podman build -t reservation-frontend-dev .```
   **Docker:**
    ```Docker build -t reservation-frontend-dev .```

   **Run container (Podman):**
    ```podman run -p 3000:3000 reservation-frontend-dev```
   **Run container (Docker):**
    ```Docker run -p 3000:3000 reservation-frontend-dev```