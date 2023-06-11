import React from "react";
import { Timeline } from "@mui/lab";
import { TimelineItem } from "@mui/lab";
import { TimelineSeparator } from "@mui/lab";
import { TimelineConnector } from "@mui/lab";
import { TimelineContent } from "@mui/lab";
import { TimelineDot } from '@mui/lab';
import { TimelineOppositeContent } from '@mui/lab';
import Typography from "@mui/material/Typography";
import Projects from "./Projects";
import { dataBase } from "./../Database/Data";
import "./../CssFiles/ProjectTimeline.css";

const ProjectTimeline = () => {
  return (
    <div className="timeline" id="project">
      <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
      <Timeline position="alternate">
        {dataBase.projects.map((project, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography className="timeline_duration">
                  {project.duration}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Projects data={project} />
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
