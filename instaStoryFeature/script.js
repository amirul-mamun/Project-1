var arr = [
    { dp: 'https://images.unsplash.com/photo-1774244764160-c6db8d01c4a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1774244764160-c6db8d01c4a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    { dp: 'https://images.unsplash.com/photo-1774028156721-706b219614b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1774028156721-706b219614b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    { dp: 'https://plus.unsplash.com/premium_photo-1764199598914-7ed34769561d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://plus.unsplash.com/premium_photo-1764199598914-7ed34769561d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    { dp: 'https://images.unsplash.com/photo-1774275987863-4209a6c6d91c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1774275987863-4209a6c6d91c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    { dp: 'https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1771957585146-e76c62faf663?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     },
    { dp: 'https://images.unsplash.com/photo-1774173511915-c1777df1560f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://images.unsplash.com/photo-1774173511915-c1777df1560f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
     }
]

var storiyan = document.querySelector('.storiyan') 
var clutter = ''

arr.forEach(function(elem, idx){
    clutter += ` <div class="story">
               <img id ='${idx}' src="${elem.dp}" alt="">
            </div>`
})


storiyan.innerHTML = clutter;

storiyan.addEventListener('click', function(dets){
var value = arr[dets.target.id].story

document.querySelector('.full-screen').style.display = 'block'

document.querySelector('.full-screen').style.backgroundImage = `url(${value})`
 
setTimeout(function(){
    document.querySelector('.full-screen').style.display = 'none'
 
},2000)
})