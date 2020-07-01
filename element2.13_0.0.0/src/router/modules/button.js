export default {
    name:'button',
    routes:[
        {
            path: "/button",
            name: "button",
            component: () => import("@/views/Button"),
        }
    ]
}