import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";




// import About from './component/About';
import Header from './component/Header';
// import Inven from './component/Inven';
import RegistrationForm from './component/RegistrationForm';
import Contact from './component/Contact';
import BAIUSTASWF from './component/BAIUSTASWF';
import Benefits from './component/Benefits';
import LifeTimeMember from './component/LifeTimeMember';
import GeneralMemberForm from './component/GeneralMemberForm';
import Events from './component/Events';
import EventDetails from './component/EventDetails';
import EventDetails1 from './component/EventDetails1';
import EventDetails2 from './component/EventDetails2';
import EventDetails3 from './component/EventDetails3';
import EventDetails4 from './component/EventDetails4';
import EventDetails5 from './component/EventDetails5';
import EventDetails6 from './component/EventDetails6';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },

  {
    path: "/registration",
    element: <RegistrationForm/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },

  {
    path: "/baiustaswf",
    element: <BAIUSTASWF/>,
  },


  {
    path: "/benefits",
    element: <Benefits/>,
  }, 


  {
    path: "/lifetimemember",
    element: <LifeTimeMember/>,
  },


  {
    path: "/generalmember",
    element: <GeneralMemberForm/>,
  },


  {
    path: "/events",
    element: <Events/>,
  },



  {
    path: "/eventdetails",
    element: <EventDetails/>,
  },

  {
    path: "/eventdetails1",
    element: <EventDetails1/>,
  },


  {
    path: "/eventdetails2",
    element: <EventDetails2/>,
  },

  {
    path: "/eventdetails3",
    element: <EventDetails3/>,
  },


  {
    path: "/eventdetails4",
    element: <EventDetails4/>,
  },

  {
    path: "/eventdetails5",
    element: <EventDetails5/>,
  },
  {
    path: "/eventdetails6",
    element: <EventDetails6/>,
  },


  // {
  //   path: "/event/:id",
  //   element: <Events/>,
  // },


  // {
  //   path: "/inven",
  //   element: <Inven></Inven>,
  // },

  // {
  //   path: "/about",
  //   element: <About></About>,
  // },


]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
