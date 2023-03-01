  import { Button, Nav, NavItem } from "reactstrap";
  import Logo from "./Logo";
  import { Link, useLocation } from "react-router-dom";
  import ramana from "../assets/images/logos/sri-ramana.jpeg";
  import ramanasramam from "../assets/images/logos/ramanasramam-image.png";
  
  const navigation = [
    {
      title: "Dashboard",
      href: "/starter",
      icon: "bi bi-house",
    },
    {
      title: "Rooms View",
      href: "/rooms",
      icon: "bi bi-house",
    },
    // {
    //   title: "Alert",
    //   href: "/alerts",
    //   icon: "bi bi-bell",
    // },
    // {
    //   title: "Badges",
    //   href: "/badges",
    //   icon: "bi bi-patch-check",
    // },
    // {
    //   title: "Buttons",
    //   href: "/buttons",
    //   icon: "bi bi-hdd-stack",
    // },
    // {
    //   title: "Cards",
    //   href: "/cards",
    //   icon: "bi bi-card-text",
    // },
    // {
    //   title: "Grid",
    //   href: "/grid",
    //   icon: "bi bi-columns",
    // },
    {
      title: "Approvals",
      href: "/requests",
      icon: "bi bi-check2-square",
    },
    {
      title: "Check-in",
      href: "/checkin",
      icon: "bi bi-people",
    },
    {
      title: "Frro Upload",
      href: "/frro",
      icon: "bi bi-envelope",
    },
    // {
    //   title: "Breadcrumbs",
    //   href: "/breadcrumbs",
    //   icon: "bi bi-link",
    // },
  ];

  const Sidebar = () => {
    const showMobilemenu = () => {
      document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return (
      <div className="p-3">
        <div className="d-flex align-items-center">
          {/* <Logo /> */}
          <img
              src={ramanasramam}
              alt="profile"
              className="rounded-circle"
              width="70"
            ></img> 
            <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </div>
        <div className="card-title">  Admin - <br/>Guru Ramana</div>
        <div className="pt-4 mt-2">
          <Nav vertical className="sidebarNav">
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
            {/* <Button
              color="danger"
              tag="a"
              target="_blank"
              className="mt-3"
              href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
            >
              Upgrade To Pro
            </Button> */}
          </Nav>
        </div>
      </div>
    );
  };

  export default Sidebar;
