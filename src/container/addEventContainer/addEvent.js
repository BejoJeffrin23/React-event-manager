import React, { useState } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
  Card,
  notification,
} from "antd";
import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { ArrowLeftOutlined, UnorderedListOutlined } from "@ant-design/icons";
import axios from "axios";
import { CardStyleWrapper } from "./style";
import logo from "../../static/images/heart.jpg";
import * as Constants from "../../constants";

const AddEvent = () => {
  const history = useHistory();

  const [eventDetails, setEventDetails] = useState({
    location: "",
    eventType: null,
    title: "",
    dateAndTime: null,
    notification: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const changeInput = (e, name) => {
    if (name === "location") {
      setEventDetails({
        ...eventDetails,
        location: e.target.value,
      });
    } else if (name === "title") {
      setEventDetails({
        ...eventDetails,
        title: e.target.value,
      });
    }
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    let dateTokens = dateString.split("/");
    let year = parseInt(dateTokens[2]);
    let month = parseInt(dateTokens[1]) - 1;
    let day = parseInt(dateTokens[0]);
    //creating date object from specified year, month, and day
    let date1 = new Date(year, month, day);
    let milliseconds = date1.getTime();
    setEventDetails({
      ...eventDetails,
      date,
      dateString,
      dateAndTime: milliseconds,
    });
  };

  const handleSelect = (e, name) => {
    if (name === "eventType") {
      setEventDetails({
        ...eventDetails,
        eventType: e,
      });
    }
  };

  const switchChange = (e) => {
    console.log(e);
    setEventDetails({
      ...eventDetails,
      notification: e,
    });
  };

  const openNotificationPlacement = (message) => {
    let placement = "topRight";
    notification.info({
      message: `Error`,
      description: message,
      placement,
    });
  };

  const AddEventData = () => {
    let allowPost = true;
    // console.log('addClient ', this.state);
    if (eventDetails.eventType === null) {
      let message;
      message = "Please select the event type";
      openNotificationPlacement(message);
      allowPost = false;
    } else if (eventDetails.title === "") {
      let message;
      message = "Please enter the title";
      openNotificationPlacement(message);
      allowPost = false;
    } else if (eventDetails.location === "") {
      let message;
      message = "Please enter the location";
      openNotificationPlacement(message);
      allowPost = false;
    } else if (eventDetails.dateAndTime === null) {
      let message;
      message = "Please select data and time of event";
      openNotificationPlacement(message);
      allowPost = false;
    }

    if (allowPost === true) {
      PostData();
    }
  };

  const PostData = () => {
    setIsLoading(true);

    let data = {};

    const { location, eventType, title, dateAndTime, notification } =
      eventDetails;

    const addEventEndPoint = `${Constants.API}events?${Constants.API_KEY}`;

    data = {
      location: location,
      eventType: eventType,
      title: title,
      dateAndTime: dateAndTime,
      notification: notification,
    };

    //return;
    setIsLoading(true);

    axios
      .post(addEventEndPoint, data)
      .then((result) => {
        history.push("/");
      })
      .catch((error) => {
        //console.log('error',error);
      });
  };

  return (
    <>
      <CardStyleWrapper>
        <Card className="cardBackground">
          <Row style={{ padding: "0px 20px 0px 20px", textAlign: "center" }}>
            <Col xs={4}>
              <h2>
                <NavLink to="/" style={{ color: "#1ddcf5" }}>
                  <ArrowLeftOutlined />
                </NavLink>
              </h2>
            </Col>

            <Col xs={16}>
              <h2 style={{ color: "white" }}>Add new thing</h2>
            </Col>

            <Col xs={4}>
              <h2>
                <UnorderedListOutlined style={{ color: "#1ddcf5" }} />
              </h2>
            </Col>
          </Row>

          <Col className="logo">
            <img
              src={logo}
              alt=""
              style={{ borderRadius: "50%", height: "50px", width: "50px" }}
            />
          </Col>

          <Col style={{ padding: "0px 20px 0px 20px" }}>
            <Select
              style={{ width: "100%", marginTop: "50px", color: "white" }}
              bordered={false}
              placeholder="Event type"
              onChange={(e) => handleSelect(e, "eventType")}
            >
              <Select.Option value="business">Business</Select.Option>
              <Select.Option value="personal">Personal</Select.Option>
            </Select>
            <hr style={{ border: "1px solid white", marginTop: "-3px" }} />

            <Input
              style={{ width: "99%", marginTop: "30px", color: "white" }}
              value={eventDetails.title}
              bordered={false}
              onChange={(e) => {
                changeInput(e, "title");
              }}
              allowClear
              defaultValue={""}
              placeholder="Title"
            />
            <hr style={{ border: "1px solid white", marginTop: "-3px" }} />
            <Input
              style={{ width: "99%", marginTop: "30px", color: "white" }}
              value={eventDetails.location}
              bordered={false}
              onChange={(e) => {
                changeInput(e, "location");
              }}
              allowClear
              defaultValue={""}
              placeholder="Place"
            />
            <hr style={{ border: "1px solid white", marginTop: "-3px" }} />

            <DatePicker
              style={{ width: "99%", marginTop: "30px" }}
              placeholder={"Date and time"}
              bordered={false}
              onChange={onChange}
              showTime
              use12Hours
              format={"DD/MM/YYYY HH:mm A"}
            />
            <hr style={{ border: "1px solid white", marginTop: "-3px" }} />

            <h4 style={{ marginTop: "30px", color: "white" }}>
              {"Notification"}
            </h4>

            <Switch
              checked={eventDetails.notification}
              onChange={switchChange}
            />
          </Col>
          <Row style={{ padding: "30px 20px 0px 20px", textAlign: "center" }}>
            <Button
              size="large"
              loading={isLoading}
              onClick={(e) => AddEventData()}
              style={{
                width: "100%",
                backgroundColor: "#1ddcf5",
                color: "white",
              }}
            >
              Add your thing
            </Button>
          </Row>
        </Card>
      </CardStyleWrapper>
    </>
  );
};

export default AddEvent;
