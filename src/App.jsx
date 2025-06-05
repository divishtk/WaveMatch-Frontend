import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/body";
import Login from "./components/login";
import Profile from "./components/profile";
import { Provider } from "react-redux";
import appStore from "./utils/appReduxStore";
import Feed from "./components/feed";
import YourConnections from "./components/yourConnections";
import ReceivedRequest from "./components/receivedRequest";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="yourAcceptedConnections" element={<YourConnections />} />
              <Route path="yourReceivedConnectionRequests" element={<ReceivedRequest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
