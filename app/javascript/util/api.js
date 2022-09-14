// import API from './index'
const csrfToken = document.querySelector("meta[name=csrf-token]").content;
export const temp = "test";
  export function followUser(id){
    customFetch(`/users/${id}/follow`,{method: 'post'}
    )
  }

  export function unfollowUser(id){
    customFetch(`/users/${id}/follow`,{method: 'delete'})
  }

async function customFetch(url, options = {}) {
  options.headers = {
    'Accept': 'application/json',
    'X-CSRF-Token': csrfToken,


    ...options.headers
  };

  let response = await fetch(url, options);
  if (response.ok === true){
    return response.json();
  }else{
    throw response;
  }
}
// export const followUser = followUser;
// export const unfollowUser = unfollowUser;
// window.API = API;