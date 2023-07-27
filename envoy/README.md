# Envoy

## Usage

1. Build the docker file
    ```bash
    docker build -t grpc-proxy .
    ```
    This builds a Docker image with the name grpc-proxy. 
2. Now, we run the Docker:
    ```bash
    docker run -d --name grpc-web-react -p 8080:8080 -p 9901:9901 grpc-web-react
    ```
    This runs the Docker image with the name grpc-proxy and exposes the port 8080 and 9901.
3. Now, we can access the envoy proxy at port 8080 in the client.