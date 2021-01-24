import AdminHomePage from "../containers/AdminHomePage";
import TaskBoard from "../containers/TaskBoard";

export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
    {
        value: 0,
        lable: "REDDY"
    },
    {
        value: 1,
        lable: "IN PROGRESS"
    },
    {
        value: 2,
        lable: "COMPLETED"
    }
];

export const STATUSES_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202
};

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        exact: true,
        component: AdminHomePage
    },
    {
        path: '/task-board',
        name: 'Quản lý công việc',
        exact: false,
        component: TaskBoard
    },
]