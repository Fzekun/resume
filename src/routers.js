/**
 * Created by fengzekun on 16/11/9.
 */
const routers = [
    {
      path : '/',
      redirect : { name : 'about' }
    },
    {
        path : '/about',
        name : 'about',
        component(resolve) {
          require(['./view/about'], resolve)
        }
    },
    {
        path : '/skill',
          component(resolve) {
          require(['./view/skill'], resolve)
        },

    },
    {
        path : '/project',
        component(resolve) {
          require(['./view/project'], resolve)
        }
    },
    {
        path : '/contactme',
          component(resolve) {
          require(['./view/contactme'], resolve)
        }
    }
]

export default routers;
