import React, { useEffect } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { useState } from 'react'
import { connect } from 'react-redux'

const BlogsPost = ({ blogPost: blogPost }) => {
  const [count, setCount] = useState(8)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(blogPost.slice(0, count))
  }, [count, blogPost])

  return (
    <Section id='BlogsPost' title='Blogs-Post'>
      <div className='cards'>
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>

      <div className='d-flex justify-content-center'>
        {count < blogPost.length && (
          <div
            className='btn btn-primary mt-5 btn-lg'
            onClick={() => setCount(count + 4)}
          >
            See more
          </div>
        )}
      </div>
    </Section>
  )
}

const mapStateToProps = (store) => {
  const { blogPost } = store.blogPost
  return { blogPost }
}

export default connect(mapStateToProps)(BlogsPost)































// import React from "react";
// import { useEffect, useState } from "react/cjs/react.development";
// import Blog from "./Blog";
// // import './Skills.css'

// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);



// const BlogsPost = () => {
//   const [totalBlogs, setTotalBlogs] = useState([])
//   const [slideIndex, setSlideIndex] = useState(0)
// console.log(totalBlogs);
//   const onClickHandler = ()=>{
//     console.log("done")
//   }
//   useEffect(()=>{
//     fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@azizul-haque')
//     .then(res => res.json())
//     .then(data => {
//       setTotalBlogs(data.items)
//     })
//   },[])
//   return (
//     <div className="p-5" id="BlogsPost">
//       <div className="blog-wrapper">
//         <div className="container">
//           <h3 className="mb-5 mt-5">Blogs Post</h3>
//           <div className="row">
//             {/* <div className="col-md-12"> */}
//             <Swiper
//             spaceBetween={15}
//             slidesPerView={3}
//             navigation
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false
//             }}
//             loop={true}
//             onClick={(swiper) => onClickHandler(swiper)}
//             onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
//           >
//             {totalBlogs?.map(blog => {
//               return (<SwiperSlide key={blog.id}>
//                 {({ isActive }) => (
//                   <Blog isActive={isActive} blog={blog} />
//                 )}
//               </SwiperSlide>)
//             })}
//           </Swiper>
//             {/* </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsPost;






















