import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Manikandan From Chennai, India",
    icon: "bi bi-person",
    color: "primary",
    date: "9:30 AM",
  },
  {
    title: "Manikandan From Chennai, India",
    icon: "bi bi-person",
    color: "primary",
    date: "9:30 AM",
  },
  {
    title: "Manikandan From Chennai, India",
    icon: "bi bi-person",
    color: "primary",
    date: "9:30 AM",
  },


];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Today's Guests</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Upcoming Checkins
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
