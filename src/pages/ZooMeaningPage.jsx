// Package Imports
import { Typography, Link, useTheme, Container } from "@mui/material";

const ZooMeaningPage = () => {
  const theme = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container
        maxWidth="md"
        style={{
          margin: theme.spacing(6, 0, 7),
          textAlign: "justify",
        }}
      >
        <Typography
          variant="h4"
          id="zoo-meaning"
          style={{
            textAlign: "center",
          }}
        >
          Meaning of ZOO
        </Typography>
        <Typography variant="body1" paragraph style={{}}>
          The meaning behind ZOO has been a long-standing question amongst many
          people, Council members included. Many have saught after the meaning,
          yet no story has been considered the absolute truth. Despite this
          fact, there is one story in particular that stands out; the one story
          that is commonly used by the Society when asked the age-old question.
          This story, provided by a ZOO Alumni, was written as follows:
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            fontStyle: "italic",
            margin: theme.spacing(0, 5, 2),
          }}
        >
          As of today, we may [be] even greater goofballs than we were in 1974.
          But that was the year where we started. Some would say it was a cold
          winter day; others would say it was quite sunny. But we do know that
          there was a group of students who wanted to prove a point to their
          professor Dr. R. B. S. Jr. This [story, as I've been told], was a
          professor who would go an entire class without looking at his students
          and just writing on the blackboard. So this day, in early 1974, an
          entire class of 4th year Electrical Engineering students decided to
          skip his class and see if their prof would even notice.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{
            fontStyle: "italic",
            margin: theme.spacing(0, 5, 2),
          }}
        >
          The group stuffed all of their jackets full, added some fake faces,
          and skipped out to Dinny's Den. A few of them hid in the class to see
          the reaction, but it nearly took half the class. Once the prof finally
          realized his class was inordinately quiet, he finally turns around and
          realizes that he is being pranked. He just exclaims that the class is
          a ZOO, and walks out.
        </Typography>

        <hr />

        <Typography
          style={{
            textAlign: "center",
          }}
        >
          The name stuck, and from 1974 until forever, we have been, and will
          be, recognized as ZOO.
        </Typography>
      </Container>
    </div>
  );
};

export default ZooMeaningPage;
