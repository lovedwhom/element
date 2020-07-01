export default {
    name:'link',
    routes:[
        {
            path:'/link',
            name:'link',
            component: () => import("@/views/Link")
        }
    ]
}