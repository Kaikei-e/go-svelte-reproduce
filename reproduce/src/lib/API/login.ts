import type * as SvelteTypes from "@sveltejs/kit"

import { get, writable } from 'svelte/store';


type userData = {
    id: string;
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




export async function trylogin(formData: object): Promise<void> {
    let resData;

    await fetch('/api/v1/tryLogin', {

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
            console.log(res.json())
            resData = res;
        }
    }).catch(error => console.error("Can't get the response properly : " + error));


    if (resData.ok) {
        const data = await resData.json();

        console.log(data);


        let uData: userData = {
            id: data["userId"],
            sessionToken: data["userToken"],
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
