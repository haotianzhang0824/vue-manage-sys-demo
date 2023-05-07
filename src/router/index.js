import { createRouter, createWebHistory } from 'vue-router';

// 基本功能
import Home from '../components/views/Home.vue';
import UserInfo from '../components/views/UserInfo.vue';
import Login from '../components/views/Login.vue';
import Register from '../components/views/Register.vue'

// seat信息
import GetSeat from '../components/seatsfunc/GetSeat.vue';
import ManageSeats from '../components/seatsfunc/ManageSeats.vue';
import AddSeat from '../components/seatsfunc/AddSeat.vue';
import EditSeat from '../components/seatsfunc/EditSeat.vue';

// book信息
import GetBooks from '../components/booksfunc/GetBooks.vue';
import ManageBooks from '../components/booksfunc/ManageBooks.vue';
import AddBook from '../components/booksfunc/AddBook.vue';
import EditBook from '../components/booksfunc/EditBook.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/userinfo', name: 'userinfo', component: UserInfo },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  // seats操作
  { path: '/getseat', name: 'getseat', component: GetSeat },
  { path: '/manageseats', name: 'manageseats', component: ManageSeats },
  { path: '/addseat', name: 'addseat', component: AddSeat },
  { path: '/editseat', name: 'editseat', component: EditSeat },
  // books操作
  { path: '/getbooks', name: 'getBooks', component: GetBooks },
  { path: '/managebooks', name: 'manageBooks', component: ManageBooks },
  { path: '/addbook', name: 'addbook', component: AddBook },
  { path: '/editbook', name: 'editbook', component: EditBook }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
