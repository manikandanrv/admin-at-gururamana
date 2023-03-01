import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const RoomsView = () => {

  const groups = [
    { id: 1, title: 'Room M1' }, 
    { id: 2, title: 'Room M2' },
    { id: 3, title: 'Room M3' }
  ]

  const items = [
  {
    id: 1,
    group: 1,
    title: 'Manikandan (checkin:10.00Am 16th March)',
    start_time: moment(),
    end_time: moment().add(14, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'Prasanna from Chennai, India',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(2, 'day')
  },
  {
    id: 3,
    group: 3,
    title: 'Arun from Chennai, India',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'day')
  }
  ]


  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Rooms Snapshort</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
        Room Reservations @ Guru Ramana
        </CardSubtitle>
        <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </CardBody>
    </Card>
  );
};

export default RoomsView;
