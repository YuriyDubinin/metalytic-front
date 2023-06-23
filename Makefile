build:
	docker build -t metalytic_front_image:dev .
run: 
	docker run -d -p 3000:3000 -e PORT=3000 --rm --name metalytic_front_container_dev metalytic_front_image:dev
stop:
	docker stop metalytic_front_container_dev