import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
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
    Request: "Chennai, India",
    status: "pending",
    weeks: "2022-02-04 to 2022-02-04",
    budget: "3",
  },
  {
    avatar: user1,
    name: "Prasanna",
    email: "rprasannamalai@gmail.com",
    Request: "Chennai, India",
    status: "pending",
    weeks: "2022-02-04 to 2022-02-04",
    budget: "3",
  },
  {
    avatar: user1,
    name: "Arun",
    email: "ckrajan@gmail.com",
    Request: "Chennai, India",
    status: "pending",
    weeks: "2022-02-04 to 2022-02-04",
    budget: "3",
  },
  {
    avatar: user1,
    name: "Kamesh",
    email: "Kamesh@gmail.com",
    Request: "Chennai, India",
    status: "pending",
    weeks: "2022-02-04 to 2022-02-04",
    budget: "3",
  },
  {
    avatar: user1,
    name: "Srinu",
    email: "srinu@gmail.com",
    Request: "Chennai, India",
    status: "done",
    weeks: "2022-02-04 to 2022-02-04",
    budget: "3",
  },
];

const RequestTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Request Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
             Requests pending Approval
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Devotee Name</th>
                <th>Devotee Address</th>

                <th>Status</th>
                <th>Likely Dates</th>
                <th>Number of Persons</th>
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
                  <td>{tdata.budget}</td>
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
