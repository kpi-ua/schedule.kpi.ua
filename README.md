# schedule.kpi.ua
New responsive, maintainable, scalable, fast and simple UI for kpi-schedule with modern design.

Demo: http://167.172.103.72:3000/sessions

Production: https://schedule.kpi.ua

Docker images: https://hub.docker.com/r/kpiua/schedule.kpi.ua

Latest docker image: ![Docker Image Version (latest by date)](https://img.shields.io/docker/v/kpiua/schedule.kpi.ua)

## API usage
Base URL: https://schedule.kpi.ua/api/

Endpoints:
- Groups list: schedule/groups
- Lecturers list: schedule/lecturer/list
- Group schedule: schedule/lessons?groupId={group id}
- Group exams: exams/group?groupName={group name, case-sensitive}
- Lecturer schedule: schedule/lecturer?lecturerId={id from list}
- Current day and week: time/current

## Authors :

* **Rusanovskiy Dmytro**
* **Alexey Novoseltsev**

#### Run it and Develop

```
npm start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
npm run build
```
To make a production build


### Docker container

#### Build
```
docker build ./ --file ./.dockerfile --tag schedule-kpi-ua:latest
```

#### Run
```
docker run --rm -it  -p 80:80/tcp schedule-kpi-ua:latest
```
