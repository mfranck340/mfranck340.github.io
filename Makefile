IMAGE_NAME := mi-web-astro
PORT := 4321

.PHONY: build run

build:
	docker build -t $(IMAGE_NAME) .

run: build
	docker run --rm -it \
		-p $(PORT):$(PORT) \
		-v "$(CURDIR):/app" \
		-v /app/node_modules \
		-e CHOKIDAR_USEPOLLING=true \
		$(IMAGE_NAME)
