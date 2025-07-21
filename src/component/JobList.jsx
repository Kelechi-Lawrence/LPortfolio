import React, { useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import AOS from "aos";
import "../css/joblist.css";
const JobList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const jobs = [
    {
      title: "Deo Potential Schools",
      role: "Web Developer",
      date: "Jan 2022 – Mar 2022",
      description:
        "Led and built the school’s website, boosting online presence and resource access.",
      color: "primary",
    },
    {
      title: "Crawford University",
      role: "B.Sc. Computer Science",
      date: "2020 – 2024",
      description: "Graduated in Computer Science to make my parents proud.",
      color: "primary",
    },
    {
      title: "GDSC Crawford",
      role: "Member (Web Development)",
      date: "Nov 2023 – Jun 2024",
      description:
        "Participated in web development study jams and workshops focused on front-end frameworks like React and version control with Git.",
      color: "primary",
    },
    {
      title: "SanlamAllianz Insurance",
      role: "Software Engineer | Data Analyst",
      date: "Jul 2023 – Oct 2023",
      description:
        "Utilized React.js to create reusable code allowing easy re-rendering of recurring user interface elements. Built Power BI dashboards that accelerated data‑driven decisions.",
      color: "success",
    },
    {
      title: "Fliptotech",
      role: "Web Dev Instructor",
      date: "Jun 2023 – Jul 2023",
      description:
        "Taught HTML, CSS, JS & Figma using hands‑on, project‑based learning.",
      color: "error",
    },
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="tline" data-aos="fade-right">
        Timeline
      </h2>
      <Timeline
        position="right"
        sx={{
          width: "100%",
          maxWidth: "1100px",
          paddingX: { xs: 1, sm: 3 },
          [`& .MuiTimelineItem-root`]: {
            minHeight: "auto",
            margin: 0,
          },
          [`& .MuiTimelineContent-root`]: {
            paddingLeft: "12px",
            marginTop: "-4px",
          },
          [`& .MuiTimelineSeparator-root`]: {
            minWidth: 20,
          },
        }}
      >
        {jobs.map((job, i) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot color={job.color} />
              {i < jobs.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <div className="job-card">
                <div className="job-title-line">
                  <Typography variant="h6" color="white">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" className="job-date">
                    {job.date}
                  </Typography>
                </div>

                <Typography
                  variant="subtitle2"
                  fontStyle="italic"
                  color="grey"
                  marginTop={0.5}
                >
                  {job.role}
                </Typography>

                <ul className="job-description-list">
                  <li>{job.description}</li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default JobList;
