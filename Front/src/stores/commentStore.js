import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "@/stores/userStore.js";


const URL = 'http://localhost:8080/commentapi'


export const useCommentStore = defineStore("comment", () => {
  
  const comments = ref([]);
  const likedComments = ref([]);
  const dislikedComments = ref([]);
  const accessToken = ref('');
  const userStore = useUserStore();

  const comment = ref('');
  const commentCnt = ref(0);
  const commentLikeCnt = ref(0);
  const commentDislikeCnt = ref(0);

  let disable = false;

  const isLiked = (commentId) => {
    return likedComments.value.includes(commentId);
  };

  const isDisliked = (commentId) => {
    return dislikedComments.value.includes(commentId);
  };



  // 댓글 등록
//   const writeComment = (articleId, newComment) => {
    // const storeObj = JSON.parse(sessionStorage.getItem('user'));
    // accessToken.value = storeObj.accessToken;

    // console.log('UserId: ', userStore.loginUserId);

    // axios.post(`${URL}/article/${articleId}/comments`, 
    //     {
    //         commentContent: newComment,
    //         nickname: userStore.loginUserNickname,
    //         user_id: userStore.loginUserId
    //     },
    //     {
    //         headers: {
    //             "access-token": accessToken.value 
    //         }
    //     })
    //      .then((res) => {
    //         comments.value.push(res.data);
    //         commentCnt.value = comments.value.length;
    //         //newComment.value = ''; // 입력란 초기화 => 밖에서 작성할 것
    //         showComments(articleId);
    //     })
    const writeComment = async (articleId, newComment) => {
    try {
        const storeObj = JSON.parse(sessionStorage.getItem('user'));
        accessToken.value = storeObj.accessToken;
  
        await axios.post(`${URL}/article/${articleId}/comments`, 
          {
            commentContent: newComment,
            nickname: userStore.loginUserNickname,
            userId: userStore.loginUserId
          },
          {
            headers: {
              "access-token": accessToken.value 
            }
          }
        );
        // comments.value.push(response.data);
        // commentCnt.value = comments.value.length;        
        showComments(articleId);
      } catch (error) {
        console.error("Error writing comment:", error);
      }
  };


  // 댓글 삭제
  const deleteComment = (articleId, commentId) => {
    const storeObj = JSON.parse(sessionStorage.getItem('user'));
    accessToken.value = storeObj.accessToken;

    axios.delete(`${URL}/article/${articleId}/comments/${commentId}`,
        {
            headers: {
                "access-token": accessToken.value
            }
        })
         .then(() => {
            alert("댓글이 삭제되었습니다.");
            showComments(articleId);
        })
  };


  // 댓글 수정
  const updateComment = (articleId, commentId, updatedComment) => {
    const storeObj = JSON.parse(sessionStorage.getItem('user'));
    accessToken.value = storeObj.accessToken;

    axios.put(`${URL}/article/${articleId}/comments/${commentId}`, 
        {
            commentContent: updatedComment
        }, 
        {
            headers:{
                "access-token": accessToken.value
            }
        })
         .then(() => {
          // const index = comments.value.findIndex(c => c.commentId === comment.value.commentId);
          // if (index !== -1) {
          //   comments.value[index] = { ...comment.value };
          // }
            showComments(articleId);
        })
  };

  // 수정된 댓글을 저장
  const updateCommentPromise = (articleId, commentId, updatedComment) => {

    return new Promise((resolve, reject)=>{
      const storeObj = JSON.parse(sessionStorage.getItem('user'));
      accessToken.value = storeObj.accessToken;

      axios.put(`${URL}/article/${articleId}/comments/${commentId}`, 
          {
              commentContent: updatedComment
          }, 
          {
              headers:{
                  "access-token": accessToken.value
              }
          })
          .then(() => {
            // const index = comments.value.findIndex(c => c.commentId === comment.value.commentId);
            // if (index !== -1) {
            //   comments.value[index] = { ...comment.value };
            // }
              showComments(articleId);
              resolve();
          })
          .catch(() => {
              reject();
          })

    })
    
  };



  // 모든 댓글 조회
//   const showComments = (articleId) => {
    // const storeObj = JSON.parse(sessionStorage.getItem('user'));
    // accessToken.value = storeObj.accessToken;

    // axios.get(`${URL}/article/${articleId}`,
    //     {
    //         headers: {
    //             "access-token": accessToken.value
    //         }
    //     })
    //      .then((res) => {
    //         comments.value = res.data;
    //     })
  const showComments = async (articleId) => {
    try {
        const storeObj = JSON.parse(sessionStorage.getItem('user'));
        accessToken.value = storeObj.accessToken;
  
        const response = await axios.get(`${URL}/article/${articleId}?userId=${userStore.loginUserId}`, {
          headers: {
            "access-token": accessToken.value
          }
        });
  
        comments.value = response.data;
        commentCnt.value = comments.value.length;
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
  };


//   // 좋아요 toggle
//     const toggleLike = (articleId, commentId) => {
//     const storeObj = JSON.parse(sessionStorage.getItem('user'));
//     accessToken.value = storeObj.accessToken;

//     if(!disable){
//         disable = true;

//         if(!isLiked){
//             isLiked = true;

//             axios.get(`${URL}/article/${articleId}/comments/${commentId}/pluslike?userId=${userStore.loginUserId}`,
//             {
//                 headers: {
//                     "access-token": accessToken.value
//                 }
//             })
//             .then((res) => {
//                 const likes = res.data.commentLikeCnt;
//                 const commentIdx = comments.value.findIndex(comment => comment.commentId === commentId);

//                 if(commentIdx !== -1){
//                     comments.value[commentIdx].commentLike = likes;
//                     likedComments.value.push(commentId);
//                     }
//             })
//             .finally(() => {
//                 disable = false;
//             })
//         } else {
//             isLiked = false;

//             axios.get(`${URL}/article/${articleId}/comments/${commentId}/minuslike?userId=${userStore.loginUserId}`,
//             {
//                 headers: {
//                     "access-token": accessToken.value
//             }
//             })
//             .then((res) => {
//                 const likes = res.data.commentLikeCnt;
//                 const commentIdx = comments.value.findIndex(comment => comment.commentId === commentId);

//                 if(commentIdx !== -1){
//                     comments.value[commentIdx].commentLike = likes;
//                     likedComments.value = likedComments.value.filter(id => id !== commentId);
//                 }
//             })
//             .finally(() => {
//                 disable = false;
//             })
//            }
//         }
//   };


//   // 싫어요 toggle
// //   const toggleDislike = (articleId, commentId) => {
//     const toggleDislike = (articleId, commentId) => {
//     const storeObj = JSON.parse(sessionStorage.getItem('user'));
//     accessToken.value = storeObj.accessToken;

//     const enable = !disable;
//     if(enable){
//         disable = true;
//         if(isDisliked){
//             isDisliked = false;
//         } else {
//             isDisliked = true;
//          axios.get(`${URL}/article/${articleId}/comments/${commentId}/plusdislike?userId=${userStore.loginUserId}`,
//         {
//             headers: {
//                 "access-token": accessToken.value
//             }
//         })
//         .then((res) => {
//             const dislikes = res.data.commentDislikeCnt;
//             const commentIdx = comments.value.findIndex(comment => comment.commentId === commentId);
//             if(commentIdx !== -1){
//                 comments.value[commentIdx].commentDislike = dislikes;
//                 if(isDisliked){
//                     dislikedComments.value = dislikedComments.value.filter(id => id !== commentId);
//                 } else {
//                     dislikedComments.value.push(commentId);
//                 }
//             }
//         })
//         .finally(() => {
//             disable = false;
//         })
//     }
//   }
// };


// 좋아요 toggle
const toggleLike = (articleId, commentId) => {
  // 1. commentId => comments에서 해당 comment의 정보만 출력해보기.
  const cmt = comments.value.find((c) => c.commentId === commentId);
  console.log(cmt);

  // 2. 해당 comment의 userCommentLikeCnt === 0 => plus
  //    해당 comment의 userCommentLikeCnt === 1 => minus

  if(cmt.userCommentLikeCnt === 0){ // cnt가 0이라면..


    console.log('plus를 합니다.')
    // 서버에 plus 요청
    axios
    .get(`${URL}/article/${articleId}/comments/${commentId}/pluslike?userId=${userStore.loginUserId}`, {
      headers: {
        "access-token": accessToken.value,
      },
    }).then(()=>{
      // plus 요청이 성공했다면.
      showComments(articleId);

    }).catch(()=>{
      // plus 요청이 실패했다면.
    })

  } else {
    console.log('minus를 합니다.')
    // 서버에 minus 요청
    axios
        .get(`${URL}/article/${articleId}/comments/${commentId}/minuslike?userId=${userStore.loginUserId}`, {
          headers: {
            "access-token": accessToken.value,
          },
        })
        .then(()=>{
          // minus 요청이 성공했다면
          showComments(articleId);
        })
  }
};


// 싫어요 toggle
const toggleDislike = (articleId, commentId) => {
  // 1. commentId => comments에서 해당 comment의 정보만 출력해보기.
  const cmt = comments.value.find((c) => c.commentId === commentId);
  console.log(cmt);

  // 2. 해당 comment의 userCommentLikeCnt === 0 => plus
  //    해당 comment의 userCommentLikeCnt === 1 => minus

  if(cmt.userCommentDislikeCnt === 0){ // cnt가 0이라면..


    console.log('plus를 합니다.')
    // 서버에 plus 요청
    axios
    .get(`${URL}/article/${articleId}/comments/${commentId}/plusdislike?userId=${userStore.loginUserId}`, {
      headers: {
        "access-token": accessToken.value,
      },
    }).then(()=>{
      // plus 요청이 성공했다면.
      showComments(articleId);

    }).catch(()=>{
      // plus 요청이 실패했다면.
    })

  } else {
    console.log('minus를 합니다.')
    // 서버에 minus 요청
    axios
        .get(`${URL}/article/${articleId}/comments/${commentId}/minusdislike?userId=${userStore.loginUserId}`, {
          headers: {
            "access-token": accessToken.value,
          },
        })
        .then(()=>{
          // minus 요청이 성공했다면
          showComments(articleId);
        })
  }
};


// const toggleLike = (articleId, commentId) => {
//     const storeObj = JSON.parse(sessionStorage.getItem('user'));
//     accessToken.value = storeObj.accessToken;

//     const enable = !disable;
//     if (enable) {
//         disable = true;

//        if (!isLiked(commentId)) {
//       isLiked.value = true;
//       axios
//         .get(`${URL}/article/${articleId}/comments/${commentId}/pluslike?userId=${userStore.loginUserId}`, {
//           headers: {
//             "access-token": accessToken.value,
//           },
//         })
//         .then((res) => {
//           const likes = res.data.commentLikeCnt;
//           const commentIdx = comments.value.findIndex((comment) => comment.commentId === commentId);
//           if (commentIdx !== -1) {
//             comments.value[commentIdx].commentLike = likes;
//             likedComments.value.push(commentId);
//           }
//         })
//         .finally(() => {
//           disable = false;
//         });
//     } else {
//       isLiked.value = false;
//       axios
//         .get(`${URL}/article/${articleId}/comments/${commentId}/minuslike?userId=${userStore.loginUserId}`, {
//           headers: {
//             "access-token": accessToken.value,
//           },
//         })
//         .then((res) => {
//           const likes = res.data.commentLikeCnt;
//           const commentIdx = comments.value.findIndex((comment) => comment.commentId === commentId);
//           if (commentIdx !== -1) {
//             comments.value[commentIdx].commentLike = likes;
//             likedComments.value = likedComments.value.filter((id) => id !== commentId);
//           }
//         })
//         .finally(() => {
//           disable = false;
//         });
//     }
//   }
// };


// // 싫어요 toggle
// const toggleDislike = (articleId, commentId) => {
//     const storeObj = JSON.parse(sessionStorage.getItem('user'));
//     accessToken.value = storeObj.accessToken;

//     const enable = !disable;
//     if (enable) {
//         disable = true;

//         if (!isDisliked(commentId)) {
//             isDisliked.value = true;
//             axios
//               .get(`${URL}/article/${articleId}/comments/${commentId}/plusdislike?userId=${userStore.loginUserId}`, {
//                 headers: {
//                   "access-token": accessToken.value,
//                 },
//               })
//               .then((res) => {
//                 const dislikes = res.data.commentDislikeCnt;
//                 const commentIdx = comments.value.findIndex((comment) => comment.commentId === commentId);
//                 if (commentIdx !== -1) {
//                   comments.value[commentIdx].commentDislike = dislikes;
//                   dislikedComments.value.push(commentId);
//                 }
//               })
//               .finally(() => {
//                 disable = false;
//               });
//           } else {
//             isDisliked.value = false;
//             axios
//               .get(`${URL}/article/${articleId}/comments/${commentId}/minusdislike?userId=${userStore.loginUserId}`, {
//                 headers: {
//                   "access-token": accessToken.value,
//                 },
//               })
//               .then((res) => {
//                 const dislikes = res.data.commentDislikeCnt;
//                 const commentIdx = comments.value.findIndex((comment) => comment.commentId === commentId);
//                 if (commentIdx !== -1) {
//                   comments.value[commentIdx].commentDislike = dislikes;
//                   dislikedComments.value = dislikedComments.value.filter((id) => id !== commentId);
//                 }
//               })
//               .finally(() => {
//                 disable = false;
//               });
//           }
//         }
//       };


  return {accessToken, comments, comment, commentCnt, commentLikeCnt, commentDislikeCnt, likedComments, dislikedComments,
    writeComment, deleteComment, updateComment, updateCommentPromise, showComments, disable, toggleLike, isLiked, toggleDislike, isDisliked};

}, { persist: { storage: sessionStorage }});
