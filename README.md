[![GitHub license](https://img.shields.io/github/license/kpi-ua/schedule.kpi.ua.svg)](https://github.com/kpi-ua/schedule.kpi.ua/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/kpi-ua/schedule.kpi.ua.svg)](https://GitHub.com/kpi-ua/schedule.kpi.ua/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/kpi-ua/schedule.kpi.ua.svg)](https://GitHub.com/kpi-ua/schedule.kpi.ua/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/kpi-ua/schedule.kpi.ua.svg)](https://GitHub.com/kpi-ua/schedule.kpi.ua/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![GitHub watchers](https://img.shields.io/github/watchers/kpi-ua/schedule.kpi.ua.svg?style=social&label=Watch)](https://GitHub.com/kpi-ua/schedule.kpi.ua/watchers/)
[![GitHub forks](https://img.shields.io/github/forks/kpi-ua/schedule.kpi.ua.svg?style=social&label=Fork)](https://GitHub.com/kpi-ua/schedule.kpi.ua/network/)
[![GitHub stars](https://img.shields.io/github/stars/kpi-ua/schedule.kpi.ua.svg?style=social&label=Star)](https://GitHub.com/kpi-ua/schedule.kpi.ua/stargazers/)



# schedule.kpi.ua
New responsive, maintainable, scalable, fast and simple UI for kpi-schedule with modern design.

[Demo version](http://167.172.103.72:3000/sessions) | 
[Production version](https://schedule.kpi.ua) | 
[Docker images](https://hub.docker.com/r/kpiua/schedule.kpi.ua)


## API usage
Base URL: https://schedule.kpi.ua/api/

Endpoints:
- Groups list: schedule/groups
- Lecturers list: schedule/lecturer/list
- Group schedule: schedule/lessons?groupId={group id}
- Group exams: exams/group?groupName={group name, case-sensitive}
- Lecturer schedule: schedule/lecturer?lecturerId={id from list}
- Current day and week: time/current

## Run and Develop

### Run in the development mode
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Make a production build
```
npm run build
```

### Build Docker container
```
docker build ./ --file ./.dockerfile --tag schedule-kpi-ua:latest
```

### Run latest Docker container
```
docker run --rm -it  -p 80:80/tcp schedule-kpi-ua:latest
```

## Related Projects
If you are owner of iPhone or iPad you can use this simple [iOS application](https://github.com/MrPaschenko/Schedule-KPI/blob/main/README.md) which built over schedule API.

[![Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917](https://user-images.githubusercontent.com/64316080/168581675-cfc29e4a-410c-4664-9213-31f11560813c.svg)](https://apps.apple.com/us/app/schedule-kpi/id1625484300)

## Authors
* **Rusanovskiy Dmytro**
* **Alexey Novoseltsev**

## License

Copyright (c) Igor Sikorsky Kyiv Polytechnic Institute. All rights reserved.

Licensed under the [BSD 3-Clause License](LICENSE) license.
