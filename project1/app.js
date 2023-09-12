const express = require("express");
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
  const date = new Date();
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [datePart, timePart] = date.toISOString().split("T");
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const updatedate = `${datePart}T${time}Z`;
  res.send({
    slack_name: req.query.slack_name,
    current_day: day[date.getDay()],
    utc_time: updatedate,
    track: req.query.track,
    github_file_url:
      "https://github.com/Oluwademiladeogo/hng-internship/blob/master/project1/app.js",
    github_repo_url:
      "https://github.com/Oluwademiladeogo/hng-internship/tree/master/project1",
    status_code: 200,
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
