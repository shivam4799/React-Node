import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import { Calendar } from "@fullcalendar/core";

export default class AddCalendar extends Component {
  state = {
    title: "",
    color: ["#00a65a", "#f39c12", "#f56954", "#3c8dbc"],
    calendarEvents: [
      {
        title: "event 1",
        date: "2020-03-01",
        backgroundColor: "#3c8dbc",
        borderColor: "#3c8dbc",
      },
      {
        title: "event 2",
        date: "2020-03-02",
        backgroundColor: "#f39c12",
        borderColor: "#f39c12",
      },
    ],
  };

  drop = (e) => {
    console.log(e);

    console.log(new Date(e.event.start).toLocaleDateString());

    let calendarEvents = this.state.calendarEvents;
    calendarEvents.map((event) => {
      if (event.title === e.event.title) {
        event.date = new Date(e.event.start).toLocaleDateString();
      }
    });

    this.setState({
      calendarEvents: calendarEvents,
    });
  };
  dateclick = (e) => {
    console.log(e);
    Alert.fire({
      title: "Add Event",
      input: "text",

      inputPlaceholder: "Enter",

      showCancelButton: true,
      confirmButtonColor: "#00a65a",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Add Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        let ran = Math.floor(Math.random() * this.state.color.length);

        this.setState({
          calendarEvents: this.state.calendarEvents.concat({
            title: result.value,
            date: e.dateStr,
            backgroundColor: this.state.color[ran],
            borderColor: this.state.color[ran],
          }),
        });
        Alert.fire("Success!", "Your Event has been added.", "success");
      }
    });
  };

  /**
   * when we click on event we are displaying event details
   */
  eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  render() {
    console.log(this.state.events);
    console.log(this.state.calendarEvents);
    {
      /* <div className="wrapper">
        <Topmenu />
        <Sidemenu />

        <div className="content-wrapper"> */
    }
    return (
      <>
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Calendar</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Calendar</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card card-primary">
                  <div class="card-body p-0">
                    <FullCalendar
                      defaultView="dayGridMonth"
                      header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                      }}
                      rerenderDelay={10}
                      eventDurationEditable={false}
                      editable={true}
                      droppable={true}
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      ref={this.calendarComponentRef}
                      weekends={this.state.calendarWeekends}
                      events={this.state.calendarEvents}
                      eventDrop={this.drop}
                      // drop={this.drop}
                      eventReceive={this.eventReceive}
                      eventClick={this.eventClick}
                      dateClick={this.dateclick}
                      // selectable={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
{
  /* </div>
</div> */
}
