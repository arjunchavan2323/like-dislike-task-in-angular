import { Component } from '@angular/core';
import { ireel, iyou } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusablecomponent';

  reels:Array<ireel>=[
    {
      title:"lorem ipsum1",
      likecount:123,
      islike:false,
      id:1

    },
  {
    
      title:"lorem ipsum1",
      likecount:123,
      islike:false,
      id:2

    
  },

  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:3

  },


  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    
    id:4

  },



  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },




  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  }



  ,



  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },







  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },









  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },













  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },








  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },










  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  },













  {
    title:"lorem ipsum1",
    likecount:123,
    islike:true,
    id:4

  }
  ]



  

  oncallbackfunctionbtn(like:boolean, id:any){
    console.log(like)
    this.reels.forEach(reel=>{
      if(reel.id===id){
        if(like){
  
         reel.likecount++

        }
      }else{
        reel.likecount--

      }
    })

   
  }













  youtube:Array<iyou>=[
    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:false,
      id:1
    },




    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:true,
      id:2
    },


    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:true,
      id:8
    },



    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:false,
      id:8
    },



    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:true,
      id:5
    },



    {
      description:"youtube most  view video",
      likecount:122,
      dislike:12,
      islike:false,
      id:4
    },
  ]


  btniscallback(like:boolean, id:any){
           
    this.youtube.forEach(you=>{
      if(you.id===id){
        if(like){
          you.likecount++
          you.dislike++
        }
      }else{
        you.likecount--
        you.dislike--
      }
    })
     

  }



}
