# Build docker images
docker build -t jonthornton07personal-website:latest -t jonthornton07/personal-website:$SHA -f ./Dockerfile.dev .

# Push docker images
docker push jonthornton07/personal-website:latest
docker push jonthornton07/personal-website:$SHA

# Apply all the k8s
kubectl apply -f k8s

# Set latest images
kubectl set image deployments/web-deployment client=jonthornton07/personal_website:$SHA