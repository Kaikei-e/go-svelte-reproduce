import type * as SvelteTypes from "@sveltejs/kit"

import { get, writable } from 'svelte/store';
import { goto } from '$app/navigation';


type userData = {
    email: string;
    name: string;
    sessionToken: string;
}

export type userStatusType = {
    loading: boolean,
    user: userData,
}
export const initUser: userStatusType = {
    loading: false,
    user: null
}

export const userStatus = writable<userStatusType>(initUser);


export const isRegisterSuccess = writable({
    email: null,
    isSuccess: false
})




export async function login(formData: object): Promise<void> {
  let resData;

  // Validate the did token on the server
  await fetch('/api/tryLogin', {

      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': 'SameSite=none'
      },
      body: JSON.stringify(formData),
      credentials: 'include'
  }).then(res => {
      if (!res.ok) {
          console.error("Response is bad. Server error : " + res)
          console.log(res.headers)
      } else {
          resData = res;
      }
  }).catch(error => console.error("Can't get the response properly : " + error));


  if (resData.ok) {
      const data = await resData.json();

      console.log(data);
      

      let uData: userData = {
          email: data.userData.email,
          name: data.userData.name,
          sessionToken: data.userData.sessionToken,
      }


      const passedUser: userStatusType = {
          loading: false,
          user: uData
      }

      userStatus.set(passedUser);

      console.log(get(userStatus));
      

  } else {
      console.log("Res is empty!!")
  }
}
