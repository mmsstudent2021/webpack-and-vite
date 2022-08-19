import counterUp from 'counterup2'
import 'waypoints/lib/noframework.waypoints.min';
import * as bootstrap from 'bootstrap';
import Swal from 'sweetalert2'

document.getElementById('clickMe').addEventListener('click',function (){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
})


const el = document.querySelector( '.counter' )

new Waypoint({
    element : document.querySelector(".last"),
    handler : function (){
        counterUp( el, {
            duration: 3000,
            delay: 50,
        })
    },
    offset : "75%"
})
