import {Route, Routes} from "react-router-dom";
import Home from '../Page/Home';
import ListMovie from '../Page/ListMovie';
import MovieDetail from '../Page/MovieDetail';
import OrderPage from '../Page/OrderPage';
import OrderHistory from "../Page/Users/OrderHistory";
import PaymentInfo from '../Page/PaymentInfo';
import Authentication from '../Page/Authentication';
import SignIn from '../Page/Authentication/SignIn';
import VerifyAuth from "../Page/Authentication/VerifyAuth";
import Layout from "../Page/Layout/Layout";
import AlreadySignin from "../Page/Authentication/AlreadySignin";
import Users from "../Page/Users";
import Account from "../Page/Users/Account";
import Register from "../Page/Authentication/Register";

function Navigation() {
    return(
      <Routes>
      <Route path="/" element={<Layout />}>
      {/* public route */}
        <Route index element={<Home />} />
        <Route path="list-movie" element={<ListMovie />} />
        <Route path='movie-detail'  element={<MovieDetail />}>
          <Route path=':movieId'  element={<MovieDetail />} />
        </Route>

        {/* cant access after sign in */}
        <Route element={<AlreadySignin />}>
        <Route path="authentication" element={<Authentication/>}>
          <Route path='signIn' element={<SignIn />}/>
          <Route path="register" element={<Register/>} />
        </Route>
        
        </Route>
        

        {/* protected route */}
        <Route element={<VerifyAuth />}>
          <Route path="users" element={<Users />}>
            <Route path="order-history" element={<OrderHistory/>}/>
            <Route path="account-setting" element={<Account />}/>
          </Route>
          <Route path=":movieId/order" element={<OrderPage/>} >
            <Route path=':scheduleId'  element={<OrderPage />} />
          </Route>
          <Route path=':movieId/payment/' element={<PaymentInfo/>} >
            <Route path=':bookingId' element={<PaymentInfo/>} />
          </Route>
        {/* <Route path=':movieId/orderHistory' element={<OrderHistory/>} /> */}
      </Route>
      </Route>
     
      
      
      <Route path='/authentication' element={<Authentication />} />
      
      
    </Routes>
    )
}

export default Navigation