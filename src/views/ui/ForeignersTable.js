import { Button, Card, CardBody, CardTitle, CardSubtitle, Table,  Input } from "reactstrap";
import { Link } from "react-router-dom";
import user1 from "../../assets/images/logos/sri-ramana_small.png";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Manikandan RV",
    email: "manikandan.rv@gmail.com",
    Request: "USA",
    status: "Checked-In",
    weeks: "2022-02-04",
    passport: "A1239867",
  },
  {
    avatar: user2,
    name: "Prasanna",
    email: "rprasannamalai@gmail.com",
    Request: "USA",
    status: "Checked-In",
    weeks: "2022-02-04",
    passport: "F7923456",
  },
  {
    avatar: user3,
    name: "Arun",
    email: "ckrajan@gmail.com",
    Request: "Germany",
    status: "Checked-In",
    weeks: "2022-02-04",
    passport: "G8754369",
  },
  {
    avatar: user4,
    name: "Kamesh",
    email: "Kamesh@gmail.com",
    Request: "United Kingdom",
    status: "Checked-In",
    weeks: "2022-02-04",
    passport: "D4561239",
  },
  {
    avatar: user5,
    name: "Srinu",
    email: "srinu@gmail.com",
    Request: "USA",
    status: "Checked-In",
    weeks: "2022-02-04",
    passport: "R5693456",
  },
];
const handleClick = (process) => {
  console.log('Submit clicked');
  switch(process){
    case 1:
    case 2:
    case 3:
        
  }
}
const RequestTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
        <CardTitle tag="h5">Foreign Devotee Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
             Select foreign guests to report
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Devotee Name</th>
                <th>Country of Origin</th>

                <th>Checkin Status</th>
                <th>Checkin Date</th>
                <th>Passport No</th>
                <th>Upload to FRRO</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.Request}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.passport}</td>
                  <td>
                  <Input id="purpose" name="purpose" type="checkbox" /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default RequestTables;
