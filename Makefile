build:
	docker build -t metalytic-front .
run: 
	docker run -d -p 3000:3000 -e PORT=3000 --rm --name metalytic-front-container-dev
stop:
	docker stop metalytic-front-container-dev